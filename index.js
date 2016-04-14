var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
 var bot = new builder.BotConnectorBot({ appId: '4e5785916f5b4a3ab6bdc4f41cee52ab', appSecret: 'bbbb6331491d4200a9b36b7f3964e318' });
 bot.add('/', function (session) {
     session.send('Hello World');
     });

     // Setup Restify Server
     var server = restify.createServer();
     server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
     server.listen(process.env.port || 3978, function () {
         console.log('%s listening to %s', server.name, server.url); 
         });
         
