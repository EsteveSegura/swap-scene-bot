require('dotenv').config();
const OBSWebSocket = require('obs-websocket-js');

const obs = new OBSWebSocket();
obs.connect({ address: process.env.ADDRESS, password: process.env.PASSWORD });

async function swapScene(sceneName){
     console.log(process.env.ADDRESS)
     console.log(process.env.PASSWORD)
     await obs.send('SetCurrentScene', {
          'scene-name': sceneName
     });
}

module.exports = { swapScene }