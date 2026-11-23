package id.lesinaja.ujian;

import android.content.ContentProvider;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.os.Environment;
import android.os.ParcelFileDescriptor;
import android.provider.OpenableColumns;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * ContentProvider internal agar file jawaban .lesinaja.json dapat dibagikan
 * melalui Intent Android 7-14+ tanpa memerlukan dependensi AndroidX.
 */
public class SubmissionFileProvider extends ContentProvider {

    public static final String AUTHORITY = "id.lesinaja.ujian.files";

    public static Uri getUriForFilename(String safeFilename) {
        return new Uri.Builder()
                .scheme("content")
                .authority(AUTHORITY)
                .appendPath(safeFilename)
                .build();
    }

    @Override
    public boolean onCreate() {
        return true;
    }

    @Override
    public String getType(Uri uri) {
        return "application/json";
    }

    @Override
    public Cursor query(
            Uri uri,
            String[] projection,
            String selection,
            String[] selectionArgs,
            String sortOrder
    ) {
        File file = resolveFile(uri);
        String[] cols = {OpenableColumns.DISPLAY_NAME, OpenableColumns.SIZE};
        MatrixCursor cursor = new MatrixCursor(cols, 1);
        if (file != null && file.exists()) {
            cursor.addRow(new Object[]{file.getName(), file.length()});
        }
        return cursor;
    }

    @Override
    public ParcelFileDescriptor openFile(Uri uri, String mode) throws FileNotFoundException {
        File file = resolveFile(uri);
        if (file == null || !file.exists()) {
            throw new FileNotFoundException("File jawaban tidak ditemukan.");
        }
        return ParcelFileDescriptor.open(file, ParcelFileDescriptor.MODE_READ_ONLY);
    }

    @Override
    public Uri insert(Uri uri, ContentValues values) {
        throw new UnsupportedOperationException("Insert tidak didukung.");
    }

    @Override
    public int delete(Uri uri, String selection, String[] selectionArgs) {
        return 0;
    }

    @Override
    public int update(Uri uri, ContentValues values, String selection, String[] selectionArgs) {
        return 0;
    }

    private File resolveFile(Uri uri) {
        Context context = getContext();
        if (context == null || uri == null) {
            return null;
        }
        String segment = uri.getLastPathSegment();
        if (segment == null || segment.isEmpty()) {
            return null;
        }
        File dir = context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
        if (dir == null) {
            return null;
        }
        String cleanName = new File(segment).getName();
        File target = new File(dir, cleanName);
        try {
            String dirCanonical = dir.getCanonicalPath();
            String fileCanonical = target.getCanonicalPath();
            if (!fileCanonical.startsWith(dirCanonical + File.separator)) {
                return null;
            }
        } catch (IOException e) {
            return null;
        }
        return target;
    }
}
