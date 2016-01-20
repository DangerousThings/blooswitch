# BlooSwitch

    cordova platform add android
    
    cordova plugin add cordova-plugin-whitelist
    cordova plugin add cordova-plugin-ble-central
    cordova plugin add cordova-plugin-dialogs
    cordova plugin add cordova-plugin-camera
    
    cordova build android --debug

    cordova build android --release
    
    pushd platforms/android/build/outputs/apk
    
    cp android-release-unsigned.apk android-release-unaligned.apk
    jarsigner android-release-unaligned.apk amal # -keystore amal.keystore
    
    zipalign -v 4 android-release-unaligned.apk android-release.apk
    
    popd
