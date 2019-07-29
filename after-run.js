if (!process.env.CORDOVA_PLATFORM) {
    console.log('process.env.CORDOVA_PLATFORM not defined. Not running after-run.js hook.')
    return;
  }

const fs = require('fs')
const cordovaConfigPath = 'config.xml'

console.log(`renaming ${cordovaConfigPath}.backup to ${cordovaConfigPath}`)
fs.renameSync(`${cordovaConfigPath}.backup`, cordovaConfigPath)