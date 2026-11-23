package id.lesinaja.ujian;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.ActivityManager;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.Typeface;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.provider.MediaStore;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.ref.WeakReference;
import java.nio.charset.StandardCharsets;

public class MainActivity extends Activity {

    private static final String EXAM_URL = "https://lesinaja.id/ujian/";

    private FrameLayout rootLayout;
    private WebView webView;
    private LinearLayout errorOverlay;
    private TextView errorMessageView;
    private Button retryButton;
    private final Handler handler = new Handler(Looper.getMainLooper());

    private volatile boolean pageLoadedOnce = false;
    private volatile boolean alarmActive = false;

    private final Runnable alarmEnforcer = new Runnable() {
        @Override
        public void run() {
            if (!alarmActive) {
                return;
            }
            enforceMaxAlarmVolume();
            handler.postDelayed(this, 500);
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        try {
            Window window = getWindow();
            if (window != null) {
                window.addFlags(
                        WindowManager.LayoutParams.FLAG_SECURE
                                | WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
                );
            }
        } catch (Throwable ignored) {
            // lanjutkan startup meskipun flag window ditolak OEM tertentu
        }

        rootLayout = new FrameLayout(this);
        rootLayout.setBackgroundColor(Color.parseColor("#F6F2E8"));

        errorOverlay = buildInitialLoadErrorOverlay();
        boolean webViewReady = initWebView();
        if (webViewReady && webView != null) {
            rootLayout.addView(webView);
        }
        rootLayout.addView(errorOverlay);

        setContentView(rootLayout);

        // Wajib dipanggil SETELAH setContentView agar DecorView & WindowInsetsController sudah terpasang
        rootLayout.post(this::applyImmersiveFullscreen);

        if (webViewReady && webView != null) {
            if (savedInstanceState != null) {
                try {
                    webView.restoreState(savedInstanceState);
                } catch (Throwable ignored) {
                    webView.loadUrl(EXAM_URL);
                }
            } else {
                webView.loadUrl(EXAM_URL);
            }
        }
    }

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    private boolean initWebView() {
        try {
            webView = new WebView(this);
            webView.setLayoutParams(new FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
            ));

            WebSettings settings = webView.getSettings();
            if (settings != null) {
                settings.setJavaScriptEnabled(true);
                settings.setDomStorageEnabled(true);
                settings.setDatabaseEnabled(true);
                settings.setCacheMode(WebSettings.LOAD_DEFAULT);
                settings.setMediaPlaybackRequiresUserGesture(false);
                settings.setSupportZoom(false);
                settings.setBuiltInZoomControls(false);
                settings.setDisplayZoomControls(false);
                settings.setUserAgentString(
                        settings.getUserAgentString() + " LesinAjaExamBro/1.0.1"
                );
            }

            // Blokir menu klik-tahan / copy-paste bawaan WebView
            webView.setLongClickable(false);
            webView.setOnLongClickListener(v -> true);
            webView.setHapticFeedbackEnabled(false);

            webView.addJavascriptInterface(new ExamBroBridge(this), "LesinAjaExamBro");
            webView.setWebChromeClient(new WebChromeClient());
            webView.setWebViewClient(new WebViewClient() {
                @Override
                public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                    return handleNavigationUri(request != null ? request.getUrl() : null);
                }

                @Override
                @SuppressWarnings("deprecation")
                public boolean shouldOverrideUrlLoading(WebView view, String url) {
                    return handleNavigationUri(url != null ? Uri.parse(url) : null);
                }

                @Override
                public void onPageFinished(WebView view, String url) {
                    super.onPageFinished(view, url);
                    if (url != null && url.startsWith("https://lesinaja.id/ujian")) {
                        pageLoadedOnce = true;
                        if (errorOverlay != null) {
                            errorOverlay.setVisibility(View.GONE);
                        }
                    }
                }

                @Override
                public void onReceivedError(
                        WebView view,
                        WebResourceRequest request,
                        WebResourceError error
                ) {
                    super.onReceivedError(view, request, error);
                    if (request != null && request.isForMainFrame() && !pageLoadedOnce) {
                        showErrorOverlay(
                                "Halaman ujian gagal dimuat.\nPastikan Wi-Fi / Data Seluler aktif untuk membuka gerbang ujian dan mengunduh soal, lalu tekan Muat Ulang.",
                                true
                        );
                    }
                }

                @Override
                public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                    if (rootLayout != null && webView != null) {
                        try {
                            rootLayout.removeView(webView);
                            webView.destroy();
                        } catch (Throwable ignored) {
                            // aman diabaikan
                        }
                        webView = null;
                    }
                    showErrorOverlay(
                            "Layanan browser perangkat sempat berhenti. Tekan Muat Ulang untuk memulihkan halaman ujian.",
                            true
                    );
                    return true;
                }
            });
            return true;
        } catch (Throwable t) {
            webView = null;
            showErrorOverlay(
                    "Komponen Android System WebView tidak dapat dijalankan ("
                            + t.getClass().getSimpleName()
                            + "). Pastikan Android System WebView aktif/terbarui di perangkat.",
                    false
            );
            return false;
        }
    }

    private void showErrorOverlay(String text, boolean allowWebViewReload) {
        if (errorMessageView != null) {
            errorMessageView.setText(text);
        }
        if (retryButton != null) {
            retryButton.setVisibility(allowWebViewReload ? View.VISIBLE : View.GONE);
        }
        if (errorOverlay != null) {
            errorOverlay.setVisibility(View.VISIBLE);
        }
    }

    private boolean handleNavigationUri(Uri uri) {
        if (uri == null) {
            return true;
        }
        String scheme = uri.getScheme();
        String host = uri.getHost();
        String path = uri.getPath();
        boolean allowed = "https".equalsIgnoreCase(scheme)
                && "lesinaja.id".equalsIgnoreCase(host)
                && path != null
                && (path.equals("/ujian") || path.startsWith("/ujian/"));
        if (!allowed) {
            try {
                Toast.makeText(
                        this,
                        "Navigasi ke luar halaman ujian diblokir.",
                        Toast.LENGTH_SHORT
                ).show();
            } catch (Throwable ignored) {
                // abaikan
            }
            return true;
        }
        return false;
    }

    private LinearLayout buildInitialLoadErrorOverlay() {
        int pad = dp(24);
        LinearLayout container = new LinearLayout(this);
        container.setOrientation(LinearLayout.VERTICAL);
        container.setGravity(Gravity.CENTER);
        container.setPadding(pad, pad, pad, pad);
        container.setBackgroundColor(Color.parseColor("#F6F2E8"));
        container.setVisibility(View.GONE);
        container.setLayoutParams(new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));

        TextView badge = new TextView(this);
        badge.setText("UJIAN LESINAJA");
        badge.setTextColor(Color.BLACK);
        badge.setBackgroundColor(Color.parseColor("#FFE600"));
        badge.setTypeface(Typeface.MONOSPACE, Typeface.BOLD);
        badge.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        badge.setPadding(dp(12), dp(6), dp(12), dp(6));

        errorMessageView = new TextView(this);
        errorMessageView.setText("Halaman ujian gagal dimuat.\nPastikan Wi-Fi / Data Seluler aktif untuk membuka gerbang ujian dan mengunduh soal, lalu tekan Muat Ulang.");
        errorMessageView.setTextColor(Color.parseColor("#10100F"));
        errorMessageView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 15);
        errorMessageView.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams msgParams = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT
        );
        msgParams.topMargin = dp(16);
        msgParams.bottomMargin = dp(20);
        errorMessageView.setLayoutParams(msgParams);

        retryButton = new Button(this);
        retryButton.setText("MUAT ULANG HALAMAN UJIAN");
        retryButton.setTextColor(Color.WHITE);
        retryButton.setBackgroundColor(Color.parseColor("#2143D8"));
        retryButton.setTypeface(Typeface.DEFAULT_BOLD);
        retryButton.setPadding(dp(20), dp(14), dp(20), dp(14));
        retryButton.setOnClickListener(v -> {
            container.setVisibility(View.GONE);
            if (webView == null) {
                if (initWebView() && webView != null && rootLayout != null) {
                    rootLayout.addView(webView, 0);
                    webView.loadUrl(EXAM_URL);
                }
            } else {
                webView.loadUrl(EXAM_URL);
            }
        });

        container.addView(badge);
        container.addView(errorMessageView);
        container.addView(retryButton);
        return container;
    }

    private int dp(int value) {
        return Math.round(TypedValue.applyDimension(
                TypedValue.COMPLEX_UNIT_DIP,
                value,
                getResources().getDisplayMetrics()
        ));
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (webView != null) {
            try {
                webView.saveState(outState);
            } catch (Throwable ignored) {
                // abaikan
            }
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (rootLayout != null) {
            rootLayout.post(this::applyImmersiveFullscreen);
        }
        if (webView != null) {
            try {
                webView.onResume();
            } catch (Throwable ignored) {
                // abaikan
            }
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            applyImmersiveFullscreen();
        }
    }

    @Override
    protected void onDestroy() {
        alarmActive = false;
        handler.removeCallbacks(alarmEnforcer);
        if (webView != null) {
            try {
                webView.destroy();
            } catch (Throwable ignored) {
                // abaikan
            }
            webView = null;
        }
        super.onDestroy();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (alarmActive && (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN
                || keyCode == KeyEvent.KEYCODE_VOLUME_MUTE)) {
            enforceMaxAlarmVolume();
            return true;
        }
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (webView != null) {
                try {
                    webView.evaluateJavascript("try { window.history.back(); } catch (e) {}", null);
                } catch (Throwable ignored) {
                    // abaikan
                }
            }
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (alarmActive && (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN
                || keyCode == KeyEvent.KEYCODE_VOLUME_MUTE)) {
            enforceMaxAlarmVolume();
            return true;
        }
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    private void applyImmersiveFullscreen() {
        try {
            Window window = getWindow();
            if (window == null) {
                return;
            }
            View decor = window.peekDecorView();
            if (decor == null) {
                return;
            }
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                window.setDecorFitsSystemWindows(false);
                WindowInsetsController controller = window.getInsetsController();
                if (controller != null) {
                    controller.hide(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
                    controller.setSystemBarsBehavior(
                            WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
                    );
                }
            } else {
                applyLegacyImmersiveFlags(decor);
            }
        } catch (Throwable ignored) {
            // jangan biarkan fullscreen API menyebabkan force close
        }
    }

    @SuppressWarnings("deprecation")
    private void applyLegacyImmersiveFlags(View decor) {
        decor.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        );
    }

    private boolean isInLockTaskMode() {
        try {
            ActivityManager am = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
            if (am == null) {
                return false;
            }
            return am.getLockTaskModeState() != ActivityManager.LOCK_TASK_MODE_NONE;
        } catch (Throwable ignored) {
            return false;
        }
    }

    private void enforceMaxAlarmVolume() {
        try {
            AudioManager audioManager = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
            if (audioManager == null) {
                return;
            }
            try {
                int maxMusic = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
                int targetMusic = Math.max(1, (int) Math.ceil(maxMusic * 0.90));
                if (audioManager.getStreamVolume(AudioManager.STREAM_MUSIC) < targetMusic) {
                    audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, targetMusic, 0);
                }
            } catch (Throwable ignored) {
                // fallback diam
            }
            try {
                int maxAlarm = audioManager.getStreamMaxVolume(AudioManager.STREAM_ALARM);
                int targetAlarm = Math.max(1, (int) Math.ceil(maxAlarm * 0.90));
                if (audioManager.getStreamVolume(AudioManager.STREAM_ALARM) < targetAlarm) {
                    audioManager.setStreamVolume(AudioManager.STREAM_ALARM, targetAlarm, 0);
                }
            } catch (Throwable ignored) {
                // DND perangkat bisa membatasi STREAM_ALARM
            }
        } catch (Throwable ignored) {
            // abaikan
        }
    }

    private static String sanitizeFilename(String rawFilename) {
        String base = rawFilename == null ? "" : new File(rawFilename).getName();
        String cleaned = base.replaceAll("[^A-Za-z0-9._-]", "_");
        if (cleaned.isEmpty() || cleaned.equals(".") || cleaned.equals("..")) {
            cleaned = "JAWABAN_UJIAN.lesinaja.json";
        }
        if (!cleaned.endsWith(".json")) {
            cleaned = cleaned + ".json";
        }
        return cleaned;
    }

    private boolean saveSubmissionAndShare(String filename, String jsonContent) {
        String safeName = sanitizeFilename(filename);
        byte[] bytes = (jsonContent == null ? "{}" : jsonContent).getBytes(StandardCharsets.UTF_8);

        File internalDownloadsDir = getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
        if (internalDownloadsDir == null) {
            return false;
        }
        if (!internalDownloadsDir.exists()) {
            internalDownloadsDir.mkdirs();
        }
        File shareCopy = new File(internalDownloadsDir, safeName);
        try (FileOutputStream fos = new FileOutputStream(shareCopy)) {
            fos.write(bytes);
            fos.flush();
        } catch (IOException e) {
            return false;
        }

        // Simpan juga ke folder Download publik agar mudah ditemukan siswa
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            try {
                ContentResolver resolver = getContentResolver();
                ContentValues values = new ContentValues();
                values.put(MediaStore.Downloads.DISPLAY_NAME, safeName);
                values.put(MediaStore.Downloads.MIME_TYPE, "application/json");
                values.put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);
                Uri inserted = resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values);
                if (inserted != null) {
                    try (OutputStream os = resolver.openOutputStream(inserted)) {
                        if (os != null) {
                            os.write(bytes);
                            os.flush();
                        }
                    }
                }
            } catch (Throwable ignored) {
                // salinan internal + Share sheet tetap tersedia
            }
        } else {
            try {
                File publicDownloads = Environment.getExternalStoragePublicDirectory(
                        Environment.DIRECTORY_DOWNLOADS
                );
                if (publicDownloads != null) {
                    if (!publicDownloads.exists()) {
                        publicDownloads.mkdirs();
                    }
                    File publicFile = new File(publicDownloads, safeName);
                    try (FileOutputStream fos = new FileOutputStream(publicFile)) {
                        fos.write(bytes);
                        fos.flush();
                    }
                }
            } catch (Throwable ignored) {
                // tanpa izin WRITE_EXTERNAL_STORAGE, Share sheet tetap bekerja
            }
        }

        runOnUiThread(() -> {
            try {
                Toast.makeText(
                        MainActivity.this,
                        "Jawaban disimpan di folder Download: " + safeName,
                        Toast.LENGTH_LONG
                ).show();

                Uri shareUri = SubmissionFileProvider.getUriForFilename(safeName);
                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("application/json");
                shareIntent.putExtra(Intent.EXTRA_STREAM, shareUri);
                shareIntent.putExtra(Intent.EXTRA_SUBJECT, safeName);
                shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                startActivity(Intent.createChooser(shareIntent, "Kirim File Jawaban ke Pengawas"));
            } catch (Throwable ignored) {
                // tidak ada app pengirim atau aktivitas sedang ditutup
            }
        });

        return true;
    }

    public static final class ExamBroBridge {

        private final WeakReference<MainActivity> activityRef;

        public ExamBroBridge(MainActivity activity) {
            this.activityRef = new WeakReference<>(activity);
        }

        @JavascriptInterface
        public boolean isExamBro() {
            return true;
        }

        @JavascriptInterface
        public void enterKioskMode() {
            MainActivity activity = activityRef.get();
            if (activity == null || activity.isFinishing() || activity.isDestroyed()) {
                return;
            }
            activity.runOnUiThread(() -> {
                activity.applyImmersiveFullscreen();
                if (!activity.isInLockTaskMode()) {
                    try {
                        activity.startLockTask();
                    } catch (Throwable ignored) {
                        // aman diabaikan bila sistem menolak
                    }
                }
            });
        }

        @JavascriptInterface
        public void exitKioskMode() {
            MainActivity activity = activityRef.get();
            if (activity == null || activity.isFinishing() || activity.isDestroyed()) {
                return;
            }
            activity.runOnUiThread(() -> {
                activity.alarmActive = false;
                activity.handler.removeCallbacks(activity.alarmEnforcer);
                if (activity.isInLockTaskMode()) {
                    try {
                        activity.stopLockTask();
                    } catch (Throwable ignored) {
                        // aman diabaikan
                    }
                }
                activity.applyImmersiveFullscreen();
            });
        }

        @JavascriptInterface
        public void setAlarmActive(boolean active) {
            MainActivity activity = activityRef.get();
            if (activity == null || activity.isFinishing() || activity.isDestroyed()) {
                return;
            }
            activity.runOnUiThread(() -> {
                if (active) {
                    boolean already = activity.alarmActive;
                    activity.alarmActive = true;
                    activity.enforceMaxAlarmVolume();
                    if (!already) {
                        activity.handler.removeCallbacks(activity.alarmEnforcer);
                        activity.handler.postDelayed(activity.alarmEnforcer, 500);
                    }
                } else {
                    activity.alarmActive = false;
                    activity.handler.removeCallbacks(activity.alarmEnforcer);
                }
            });
        }

        @JavascriptInterface
        public boolean saveEncryptedSubmission(String filename, String jsonContent) {
            MainActivity activity = activityRef.get();
            if (activity == null || activity.isFinishing() || activity.isDestroyed()) {
                return false;
            }
            return activity.saveSubmissionAndShare(filename, jsonContent);
        }
    }
}
