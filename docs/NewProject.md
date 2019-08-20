
# Set your flynn cluster
```
#lists your flynn clusters
flynn cluster
flynn cluster default mycluster
```

# Create an app
```
flynn create myapp --remote prod
flynn create myapp-dev --remote dev
```

# Push to app
```$ git push dev```

# Set env environment variable
This determines which project.js file is deployed, this will default to project_dev.js.

<img src="http://image.prntscr.com/image/81147f28c68c413cb9ce9774b639396e.png"/>



**Do the following from ./mobile**

# Ensure you have a valid provisioning profile installed
If you've uploaded to testflight before you don't need to worry about this step, ensure that  you have the certificates required from another member of the team.

# If the itunes connect isn't Solid State Group
Set the team Id in ```AppFile```. Set your apple Id in ```AppFile```

# Configure fastlane
Edit ```FastFile``` and ```AppFile``` and change any occurances of com.ssg.boilerplate to your bundle id.

Edit ```name.txt`` to the name you want for your app```

# Add to testflight ios
```
fastlane beta
```

# Create app in playstore
<a href="https://play.google.com/apps">Google console</a>


# Add app in firebase and download google-services.json
```firebase console > overview > add app```
Either use boilerplate project or create new firebase project. Replace existing ```google-services.json``` in project.

# Create android signing key
Enter android for alias and password
```
keytool -genkey -v -keystore ./android/keystores/release.keystore -alias android -keyalg RSA -keysize 2048 -validity 10000
```

# Set the app title
Edit ```title.txt``` to set the title


# Add to beta android
```
fastlane beta
```