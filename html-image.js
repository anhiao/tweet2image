import nodeHtmlToImage from 'node-html-to-image';
export default async function (html){
 return await nodeHtmlToImage({
    quality:100,
    puppeteerArgs:{
        args: ['--no-sandbox'],
        defaultViewport:{
        width:512,
        height:1080,
        isMobile:true,
        }
        },
  
  html:`
  <!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        
    <style>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
    
    }
        /*.twitter-tweet iframe #app  >div >div >div article div:not(:first-child){*/
        /*    display: none !important;*/
        /*}*/
    </style>
    </head>
    
    <body>
    ${html}
    </body>
  </html>
`
//   html: ''
});
    
}

// import twitterGetUrl from "twitter-url-direct";
// (async ()=>{
    
// let response = await twitterGetUrl("https://twitter.com/Veibae/status/1578721989002694657?t=sLzaFU_uJ7Xh31pnp4dE_w&s=19");
// console.log(response);
    
// })();

// // // // const ytdl = require('ytdl-core');
// // import ytdl from 'ytdl-core';
// // import fs from 'fs';
// // // TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// // // TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// // // TypeScript: import ytdl = require('ytdl-core'); with neither of the above
// // (async()=>{
// //     // console.log(await ytdl.getInfo("https://youtu.be/zUJiT9Agb1U"));
// //  const result = await ytdl.getInfo('https://youtu.be/zUJiT9Agb1U');
// // //  console.log(Reflect.ownKeys(result['videoDetails']))
// //  console.log(result.videoDetails.thumbnails);
// //  console.log(result.videoDetails.title)
// // //  result.pipe(fs.createWriteStream("dd.mp4"));
// // //  console.log(result);
// // })();

// // // // //   .pipe(fs.createWriteStream('video.webm'));
// // // import { Pully, Presets } from 'pully';
// // // (async ()=>{
    
// // // const pully = new Pully();

// // // // const video = await pully.query('<some-neato-video-url>');
// // // // console.log(`${video.videoTitle} by ${video.channelName} has ${video.views} views!`);

// // // const options = {
// // //   url: 'https://youtu.be/zUJiT9Agb1U',
// // //   preset: Presets.FourK,
// // //   progress: (data) => console.log(data.percent + '%') // Progress reporter callback...
// // // };

// // // const { path, format, duration } = await pully.download(options);
// // // console.log(path);     // Path to the downloaded file.
// // // console.log(format);   // Object containing all audio/video/meta data.
// // // console.log(duration); // Number of milliseconds the download took.    
    
// // // })();

