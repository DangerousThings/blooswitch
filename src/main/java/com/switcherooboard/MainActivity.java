package com.switcherooboard;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }

    @Override
    public void onResume() {
        super.onResume();

        if (isBlooSwitchInstalled()) {
            ((Button) findViewById(R.id.hello)).setEnabled(false);
            ((Button) findViewById(R.id.goodbye)).setEnabled(true);
        }
    }

    public void installBlooSwitch(View view) {
        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=com.blooswitch")));
    }

    public void uninstallSwitcheroo(View view) {
        startActivity(new Intent(Intent.ACTION_DELETE, Uri.parse("package:com.switcherooboard")));
    }

    boolean isBlooSwitchInstalled() {
        try {
            getPackageManager().getApplicationInfo("com.blooswitch", 0);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }

}
