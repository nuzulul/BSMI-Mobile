set /p A="Alias : "
set /p S="Store Password : "
set /p K="Key Password : "
call cordova telemetry off
call cordova platform remove android
call cordova platform add android@12.0.0
rem call cordova prepare
rem del %~dp0platforms\android\CordovaLib\src\org\apache\cordova\PermissionHelper.java
call cordova build android --release -- --keystore=../data/keystore/bsmimobile.keystore --storePassword=%S% --alias=%A% --password=%K% --packageType=apk
copy /Y %~dp0platforms\android\app\build\outputs\apk\release\app-release.apk %~dp0app-release.apk
pause