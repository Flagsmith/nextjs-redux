# 3rd Party Integrations

## Contents

1. [Firebase](#firebase)
2. [Facebook Login](#facebook-login)
3. [Google Sign In](#google-sign-in)
4. [Fabric Digits](#fabric-digits)
5. [Google Analytics](#google-analytics)
6. [Branch.io](#branchio)

### Firebase

Start by following the instructions found here https://git.solidstategroup.com/solidstategroup/firebase-project-starter.
Add a web app via the Firebase console and update the `firebase` object in `env/project_*.js`

##### iOS

Add an iOS app in the Firebase console giving your bundle ID, download the `GoogleService-Info.plist` file and replace the existing one in the ios folder. Ignore the additional steps.

From `GoogleService-Info.plist` copy the `CLIENT_ID` value to `env/project_*.js` and replace `google.iosClientId` with it

Open up project settings with XCode and under the Capabilities tab update Keychain Sharing with the bundle ID

##### Android

Get your debug SHA-1 signing certificate by running
```
keytool -list -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android
```
Add an Android app in the Firebase console giving your package name and debug SHA-1 signing certificate, download the `google-services.json` file and replace the existing one in ```mobile/android/app/src```. Ignore the additional steps.

From the `google-services.json` file copy the `client_id` value where `client_type == 3` to `env/project_*.js` and replace the `google.webClientId` value with it.

### Facebook Login
(https://github.com/magus/react-native-facebook-login)

Create a Facebook app on https://developers.facebook.com/apps/ to get a Facebook ID

##### iOS
Open up project settings with info.plist tab update `FacebookAppId` and `FacebookDisplayName`.
Update the three URL types, first one with the Facebook ID

![iOS Facebook](http://g.recordit.co/GDqmbyI6Gb.gif)

##### Android

Open `android/app/src/main/res/values/strings.xml` and change the Facebook app ID's for `fb_app_id` and `fb_login_protocol_scheme`.

### Google Sign In
(https://github.com/joonhocho/react-native-google-sign-in)

Download the google services json and plist from firebase

### Branch.
(https://github.com/BranchMetrics/react-native-branch-deep-linking)

Create a Branch.io app at https://branch.io in order to get a API key and secret.

##### iOS

Open up `Info.plist` and update the `branch_key` live and test values

Under URL types update Item 0 -> URL Schemes -> Item 0 from `ssgfeb` to the URL scheme you are going to use.

For universal linking support, go to Project Settings and under Capabilites update the Associated Domains to the 4 character domain name found in your Branch.io apps settings.

![iOS Branch.io](http://g.recordit.co/u9xPBrOoGn.gif)

##### Android
Open up `AndroidManifest.xml` and find the `<intent-filter>` with `android:scheme` set to `ssgfeb`. Update this value with the URL scheme you are going to use.
Within the same file update the `io.branch.sdk.BranchKey` metadata value with the live Branch.io API key.

