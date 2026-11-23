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
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
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
import java.nio.charset.StandardCharsets;

public class MainActivity extends Activity {

    private static final String EXAM_URL = "https://lesinaja.id/ujian/";

    private WebView webView;
    private LinearLayout errorOverlay;
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

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Proteksi level OS: blokir screenshot, rekam layar, dan jaga layar tetap menyala
        getWindow().addFlags(
                WindowManager.LayoutParams.FLAG_SECURE
                        | WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
        );
        applyImmersiveFullscreen();

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.parseColor("#F6F2E8"));

        webView = new WebView(this);
        webView.setLayoutParams(new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setUserAgentString(settings.getUserAgentString() + " LesinAjaExamBro/1.0");

        // Blokir menu klik-tahan / copy-paste bawaan WebView
        webView.setLongClickable(false);
        webView.setOnLongClickListener(v -> true);
        webView.setHapticFeedbackEnabled(false);

        webView.addJavascriptInterface(new ExamBroBridge(), "LesinAjaExamBro");
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
                    if (errorOverlay != null) {
                        errorOverlay.setVisibility(View.VISIBLE);
                    }
                }
            }
        });

        errorOverlay = buildInitialLoadErrorOverlay();
        root.addView(webView);
        root.addView(errorOverlay);
        setContentView(root);

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            webView.loadUrl(EXAM_URL);
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
            Toast.makeText(
                    this,
                    "Navigasi ke luar halaman ujian diblokir.",
                    Toast.LENGTH_SHORT
            ).show();
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

        TextView message = new TextView(this);
        message.setText("Halaman ujian gagal dimuat.\nPastikan Wi-Fi / Data Seluler aktif untuk membuka gerbang ujian dan mengunduh soal, lalu tekan Muat Ulang.");
        message.setTextColor(Color.parseColor("#10100F"));
        message.setTextSize(TypedValue.COMPLEX_UNIT_SP, 15);
        message.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams msgParams = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT
        );
        msgParams.topMargin = dp(16);
        msgParams.bottomMargin = dp(20);
        message.setLayoutParams(msgParams);

        Button retryBtn = new Button(this);
        retryBtn.setText("MUAT ULANG HALAMAN UJIAN");
        retryBtn.setTextColor(Color.WHITE);
        retryBtn.setBackgroundColor(Color.parseColor("#2143D8"));
        retryBtn.setTypeface(Typeface.DEFAULT_BOLD);
        retryBtn.setPadding(dp(20), dp(14), dp(20), dp(14));
        retryBtn.setOnClickListener(v -> {
            container.setVisibility(View.GONE);
            webView.loadUrl(EXAM_URL);
        });

        container.addView(badge);
        container.addView(message);
        container.addView(retryBtn);
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
            webView.saveState(outState);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        applyImmersiveFullscreen();
        if (webView != null) {
            webView.onResume();
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
                webView.evaluateJavascript("try { window.history.back(); } catch (e) {}", null);
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
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            getWindow().setDecorFitsSystemWindows(false);
            WindowInsetsController controller = getWindow().getInsetsController();
            if (controller != null) {
                controller.hide(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
                controller.setSystemBarsBehavior(
                        WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
                );
            }
        } else {
            applyLegacyImmersiveFlags();
        }
    }

    @SuppressWarnings("deprecation")
    private void applyLegacyImmersiveFlags() {
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        );
    }

    private boolean isInLockTaskMode() {
        ActivityManager am = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
        if (am == null) {
            return false;
        }
        return am.getLockTaskModeState() != ActivityManager.LOCK_TASK_MODE_NONE;
    }

    private void enforceMaxAlarmVolume() {
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
        } catch (SecurityException ignored) {
            // fallback diam
        }
        try {
            int maxAlarm = audioManager.getStreamMaxVolume(AudioManager.STREAM_ALARM);
            int targetAlarm = Math.max(1, (int) Math.ceil(maxAlarm * 0.90));
            if (audioManager.getStreamVolume(AudioManager.STREAM_ALARM) < targetAlarm) {
                audioManager.setStreamVolume(AudioManager.STREAM_ALARM, targetAlarm, 0);
            }
        } catch (SecurityException ignored) {
            // DND perangkat bisa membatasi STREAM_ALARM
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
            } catch (Exception ignored) {
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
            } catch (Exception ignored) {
                // tanpa izin WRITE_EXTERNAL_STORAGE, Share sheet tetap bekerja
            }
        }

        runOnUiThread(() -> {
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
            try {
                startActivity(Intent.createChooser(shareIntent, "Kirim File Jawaban ke Pengawas"));
            } catch (Exception ignored) {
                // tidak ada app pengirim
            }
        });

        return true;
    }

    private class ExamBroBridge {

        @JavascriptInterface
        public boolean isExamBro() {
            return true;
        }

        @JavascriptInterface
        public void enterKioskMode() {
            runOnUiThread(() -> {
                applyImmersiveFullscreen();
                if (!isInLockTaskMode()) {
                    try {
                        startLockTask();
                    } catch (Exception ignored) {
                        // aman diabaikan bila sistem menolak
                    }
                }
            });
        }

        @JavascriptInterface
        public void exitKioskMode() {
            runOnUiThread(() -> {
                alarmActive = false;
                handler.removeCallbacks(alarmEnforcer);
                if (isInLockTaskMode()) {
                    try {
                        stopLockTask();
                    } catch (Exception ignored) {
                        // aman diabaikan
                    }
                }
                applyImmersiveFullscreen();
            });
        }

        @JavascriptInterface
        public void setAlarmActive(boolean active) {
            runOnUiThread(() -> {
                if (active) {
                    boolean already = alarmActive;
                    alarmActive = true;
                    enforceMaxAlarmVolume();
                    if (!already) {
                        handler.removeCallbacks(alarmEnforcer);
                        handler.postDelayed(alarmEnforcer, 500);
                    }
                } else {
                    alarmActive = false;
                    handler.removeCallbacks(alarmEnforcer);
                }
            });
        }

        @JavascriptInterface
        public boolean saveEncryptedSubmission(String filename, String jsonContent) {
            return saveSubmissionAndShare(filename, jsonContent);
        }
    }
}
