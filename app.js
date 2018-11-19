'use strict'


require('./services/util.service')
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
    
    if (message.content.startsWith(prefix + 'setgame')) {
        client.user.setActivity(argResult, {type: 'WATCHING'})
    }
    
    if (message.content.startsWith(prefix + 'raffle')) {
        let users = message.content.split(' ').slice(1).join('').split(',')
        if (users.length % 2) {
            message.channel.send('Whoops.. must be an even number')
        } else {
            var fullStr = ''
            var teamCount = users / 2;
            for (let i = 1; i <= teamCount / 2; i++) {
                fullStr += `**TEAM ${i}**\n
                           ${raffleRandomUser}\n
                           ${raffleRandomUser}\n
                           `
            }
            
        }
    }
});

function raffleRandomUser(users) {
    var getRandomInt = settings.getRandomIntInclusive
    var currUser = users.splice(getRandomInt(0, users.length-1), 1)
    return currUser
}

client.login(settings.token)

