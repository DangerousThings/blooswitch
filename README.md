# BlooSwitch

    cordova -d plugin add cordova-plugin-whitelist
    cordova -d plugin add cordova-plugin-ble-central
    cordova -d plugin add cordova-plugin-dialogs
    cordova -d plugin add cordova-plugin-camera

## Android

    cordova -d platform add android
    
    cordova -d build android # --release
    
    pushd platforms/android/build/outputs/apk
    
    cp android-release-unsigned.apk android-release-unaligned.apk
    jarsigner android-release-unaligned.apk amal # -keystore amal.keystore
    
    zipalign -v 4 android-release-unaligned.apk android-release.apk
    
    popd

## iOS

    cordova -d platform add ios
    
    cordova -d build ios # --release
