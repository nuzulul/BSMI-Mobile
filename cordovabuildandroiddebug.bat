call cordova telemetry off
call cordova platform remove android
call cordova platform add android
del %~dp0platforms\android\CordovaLib\src\org\apache\cordova\PermissionHelper.java
call cordova build android
copy /Y %~dp0platforms\android\app\build\outputs\apk\debug\app-debug.apk %~dp0app-debug.apk
pause