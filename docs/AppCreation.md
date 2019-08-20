The following guide tells you exactly how to get apps on beta and web deployed.

#Prerequesite
This will clone the boilerplate and setup the bundle id appropriately / add to git.

```
npm i ssg-frontend-cli -g
ssg-frontend {myproject} {com.solidstategroup.myproject}
git init
git remote add origin {REPO_URL}
git add .
git commit -m "Initial"
git push -u origin master
```

# Create Web

## Step 1 on your server create the app
```
ssh hetzner4
cd /home/dokku
dokku apps:create app-name
```

## step 2 on your local machine add flynn remote to repository and push master
```
git remote add dokku dokku@dokku1.solidstategroup.com:app-name
git push dokku master
```

## Step 3 add ssl
``
dokku config:set --no-restart app-name DOKKU_LETSENCRYPT_EMAIL=ben@solidstategroup.com
dokku letsencrypt app-name
dokku letsencrypt:cron-job --add
``

## Set env environment variable
dokku config:set app-name KEY=\"VAL\ WITH\ SPACES\"



# Create Mobile

    **Do the following from ./mobile**


## Replace AppIcon.png with your app icon.
This automatically gets converted into different sizes with fastlane.

## Ensure you have a valid provisioning profile installed
If you've uploaded to testflight before you don't need to worry about this step, ensure that  you have the certificates required from another member of the team.

## If the itunes connect isn't Solid State Group
Set the team Id in ```AppFile```. Set your apple Id in ```AppFile```

## Configure fastlane
Edit ```FastFile``` and ```AppFile``` and change any occurances of com.ssg.boilerplate to your bundle id.

    Edit ```name.txt`` to the name you want for your app```

## Add to testflight ios
```
fastlane beta
```

## Create app in playstore
<a href="https://play.google.com/apps">Google console</a>


## Add app in firebase and download google-services.json
```firebase console > overview > add app```
Either use boilerplate project or create new firebase project. Replace existing ```google-services.json``` in project.

## Create android signing key
This will create a keystore within the project used to sign the apk - do not commit it to git!
```
npm run keystore
```

## Set the app title
Edit ```title.txt``` to set the title


## Add to beta android
```
fastlane beta
```