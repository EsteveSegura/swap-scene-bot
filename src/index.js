require('dotenv').config();
const tmi = require('tmi.js');
const sceneSwap = require('./sceneSwap');
const scenes = require('./scenes.json');
console.log(scenes.scenesList.length)


const client = new tmi.Client({
     options: { debug: true },
     connection: {
          reconnect: true,
          secure: true
     },
     identity: {
          username: 'fasterchatter',
          password: process.env.TOKEN
     },
     channels: [`${process.env.CHANNEL}`]
});


client.connect();

client.on('message', (channel, tags, message, self) => {
     if (self) return;

     if(channel == `#${process.env.CHANNEL.toLocaleLowerCase()}`){
          console.log("GOT")
     }

     for (let i = 0; i < scenes.scenesList.length; i++) {
          if (message.toLowerCase() === scenes.scenesList[i].command) {
               console.log(scenes.scenesList[i].scene)
               sceneSwap.swapScene(scenes.scenesList[i].scene)
          }
     }
});

