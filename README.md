
# svelte-cordova

Develop a svelte app with cordova, including hot reload from your device.
Read more about it on my [blog](https://www.learningsomethingnew.com/introducing-svelte-cordova-template)

## Get the template

The easiest way to get started is with the template, which scaffolds a svelte app using degit, with a cordova folder inside, using cordova-svelte hooks for setting everything up.

```bash
npx degit syonip/svelte-cordova-template svelte-cordova-app
cd svelte-cordova-app
npm i
```

## Run local dev server (no cordova)

```bash
npm run dev
```

## Add your cordova platform

```bash
cd src-cordova
cordova platform add android/ios
```

## Develop on your device with hot reload

Back in the root folder:
```bash
npm run dev-android
```
or
```bash
npm run dev-ios
```

This will run the cordova project with a web view pointing to your workstation's IP.

You should see the message `Cordova deviceready fired!` if cordova loaded correctly.

Try to change something in App.svelte, and you should see the content reload in your device.

* You need to have an emulator/device connected to adb 
* Your device has to be connected to the same wifi network as your workstation.

## To build a prod version:

```bash
npm run build-android
```
or
```bash
npm run build-ios
```

## IOS quirks

You need to add a `build.json` file in `src-cordova` folder with your developer id. More info at [cordova docs](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)