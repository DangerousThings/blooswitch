# BlooSwitch

    cordova -d platform add android
    
    cordova -d plugin add cordova-plugin-whitelist
    cordova -d plugin add cordova-plugin-ble-central
    cordova -d plugin add cordova-plugin-dialogs
    cordova -d plugin add cordova-plugin-camera
    
    cordova -d build android --debug

    cordova -d build android --release
    
    pushd platforms/android/build/outputs/apk
    
    cp android-release-unsigned.apk android-release-unaligned.apk
    jarsigner android-release-unaligned.apk amal # -keystore amal.keystore
    
    zipalign -v 4 android-release-unaligned.apk android-release.apk
    
    popd
