call cordova platform remove android
call cordova platform add android
rem call cordova prepare
del %~dp0platforms\android\CordovaLib\src\org\apache\cordova\PermissionHelper.java
call cordova build android --release android
copy /Y %~dp0platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk %~dp0app-release-unsigned.apk
pause