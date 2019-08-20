## Changing the mobile bundle ID

Install the react-native-app-id package globally if you haven't already done so

`npm i react-native-app-id -g`

Run it to change the bundle ID on the app

`react-native-app-id <my-bundle-id>`

## Fastlane

From the `mobile` folder.

#### iOS

##### Metadata

Set up store metadata by editing files in `fastlane/metadata` ignoring the `android` folder

##### Generate app icons:

`fastlane icon`

##### Deploy Testflight build:

Build number is automatically increased by the below command:

`fastlane beta`

##### Release production build:

Update version and build number in Xcode Project Settings and then run:

`fastlane release`

#### Android

##### Metadata

Set up store metadata by editing files in `fastlane/metadata/android`

##### Generate app icons:

`fastlane android icon`

##### Deploy beta build:

Version code is automatically increased by the below command:

`fastlane android beta`

##### Release production build

Update the version code and version name in `android/app/build.gradle` and then run:

`fastlane android release`
