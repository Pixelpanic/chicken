//Chicken-Toilet Bot
//by pixelpanic
//under MIT license
//Any issus please come to Telegram @din_lo_it

'use strict'

var tg = require('telegram-node-bot')('YOUR API KEY HERE') // YOUR API KEY HERE!!!!
const fs= require('fs'); //Handle filestream
var count = 0
console.log("Listening...")

tg.router.
    when(['/chickt :name'], 'ArguController').
    when(['/chickt@chickt_bot'], 'ArguController').
    when(['/sunny'], 'ArguController').
    when(['/rubbish'], 'ArguController').
    when(['/sing'], 'ArguController').
    when(['/rubbishgif'], 'ArguController').
    when(['/mustbe :item'], 'ArguController').
    when(['/dogalsonof :itemss'], 'ArguController').
    when(['/google :q'], 'ArguController').
    when(['/howsee :q'], 'ArguController')

tg.controller('ArguController', ($) => {
        tg.for('/chickt :name', ($) => {
            $.sendMessage("我宣佈："+$.query.name + "係🐤係🚽！")
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
        tg.for('/chickt@chickt_bot', ($) => {
            $.sendMessage("邊個係🐤係🚽? 打 (/chickt 名) 就得架啦")
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
        tg.for('/sunny', ($) => {
            $.sendMessage("陽光勃勃☀️")
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
        tg.for('/rubbish', ($) => {
            $.sendMessage("我是說在坐各位都是垃圾😊")
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
        tg.for('/sing', ($) => {
            $.sendPhotoFromUrl('https://na.cx/i/7q41HO.jpg')
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
        tg.for('/rubbishgif', ($) => {
          //Call filesystem api to send document
          	var doc= {
          	value: fs.createReadStream('rubbish.gif'),
          	filename: 'rubbish.gif',
          	contentType:'image/gif'
          	}

	         $.sendDocument(doc)
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
        tg.for('/mustbe :item', ($) => {
            $.sendMessage("識揀一定揀"+$.query.item)
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
	tg.for('/dogalsonof :itemss', ($) => {
            $.sendMessage($.query.itemss +"狗都唔屌")
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
	tg.for('/google :q', ($) => {
            $.sendMessage("https://google.com/?#q=" + $.query.q )
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })
  tg.for('/howsee :q', ($) => {
            $.sendMessage("點睇"+$.query.q+"?")
            count++
            console.log('Responsed:'+ count)
            console.log($)
        })

})
