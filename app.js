'use strict'

const Discord = require('discord.js')
const client = new Discord.Client()
const settings = require('./settings.json')

var prefix=">"

client.on('ready', () => {
    console.log(`I'm online\nI'm online!`)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    let args = message.content.split(' ').slice(1)
    var argResult = args.join(' ')


    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send(`pong! \`${Date.now() - message.createdTimestamp} ms\``)
    } else

    if (message.content.startsWith(prefix + 'send')) {
        client.channels.get('511578748995502098').send('Hello second channel!')
    }else 

    if (message.content.startsWith(prefix + 'setgame')) {
        client.user.setActivity(argResult, {type: 'WATCHING'})
    }


});

client.login(settings.token)