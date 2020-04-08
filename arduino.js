// Import the discord.js module


/*



Note this bot has no PREFLIX


THIS BOT WAS MADE FOR A COLLEGE CLASS.

This is the Discord Bot with a Arduino Modules. Can be a cool IOT Project.


Feel free to send me feedback.

*/

const {Client, Attachment} = require('discord.js');

const Discord = require('discord.js');
const client = new Discord.Client();


const five = require('johnny-five'); // This Package is for arduino.
const board = new five.Board({ port: "COM3" }); // Arduino Port make sur u put ur port.
const { Board, Thermometer } = require("johnny-five");

require('events').EventEmitter.defaultMaxListeners = 25;

// THE Codex BOT...... Made By Cody.

// Create an instance of a Discord client
const bot = new Client();



/**  
 * The ready event is the main event, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */


client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Trying to login my Safari book');


   var testChannel = client.channels.find(channel => channel.id === 'PLACE HERE'); // THE CHANNEL IF FOR A MESSAGE EACH 24H PLEASE PLACE THE ID HERE

  setInterval(() => {

testChannel.send("Hello people.");


  }, 86400000); // 24h that message will be delivered ^^
  
});





//Filter Pic       *pull a picture from a folder*
client.on('message', message => {
  // Filter Pic
  if (message.content === 'filter pic') {
    number = 11;
    imageNumber = Math.floor (Math.random()* (number -1 + 1)) +1;
   
    message.channel.send ({files: ["./filter pic/" + imageNumber + ".jpg"]} )
  }   
});



// will pic       *pull a picture from a folder*
client.on('message', message => {
  
  if (message.content === 'will pic') {
    number = 3;
    imageNumber = Math.floor (Math.random()* (number -1 + 1)) +1;
    
    message.channel.send ({files: ["./will/" + imageNumber + ".jpg"]} )
  }
});

// pic             *pull a picture from a folder*
client.on('message', message => {
  
  if (message.content === 'pic') {
    number = 14;
    imageNumber = Math.floor (Math.random()* (number -1 + 1)) +1;
   
    const attachment2 = new Attachment('./images/Capture.png')
    message.channel.send ({files: ["./images/" + imageNumber + ".jpg"]} )
  }
});


// class pic         *pull a picture from a folder*
client.on('message', message => {
  // Pic of class
  if (message.content === 'class pic') {
    number = 12;
    imageNumber = Math.floor (Math.random()* (number -1 + 1)) +1;
    
    message.channel.send ({files: ["./class pic/" + imageNumber + ".jpg"]} )
  }
});




// ping
client.on('message', message => {
  // ping
  if (message.content === 'ping') {
  
    let ping = client.user.createdTimestamp - message.createdTimestamp
    let choices = ["__Is this really my ping__", "__Well we might need cat 7 class__", "__That's not bad__", "__Stop asking me for pinging you dam API I Don't care__"]
    let response = choices[Math.floor(Math.random() * choices.length)]

    message.channel.send(`${response}: Bot Latency: \`${client.ping}\`, API Latency: \`${Math.round(client.ping)}\``)

    
  }
});


// contact INFO
client.on('message',  message => {
  if (message.content === 'contact codex') {
   
   message.channel.send('EMAIL HERE')
   
  }
});
       
// ver
client.on('message',  message => {
  if (message.content === 'ver') {
   
   message.channel.send('__Current bot status:__ **Beta** runing on __1.0.1__')
   
  }
});

// Uptime
client.on('message',  message => {
  // If the message is "Uptime"
  if (message.content === 'uptime') {

   function duration(ms) {

    const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
   }

   


   message.channel.send(`I have been online for: ${duration(client.uptime)}`)
   
  }
});





// info
client.on('message', message => {
  
  if (message.content === 'info') {
    let sEmbed = new Discord.RichEmbed()
    
    .setTitle("The Codex Bot")
    .setThumbnail(client.user.displayAvatarURL)   
    .addField('**ADD SOMETHING HERE**',  )
    .addField("**I built this bot for no reason so don't ask me wy**" )
    .setFooter(`TheCodexBot`, client.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
    
  }
});


// serverinfo
client.on('message', message => {
 
  if (message.content === 'serverinfo') {
    let sEmbed = new Discord.RichEmbed()
    .setColor(0xdd9323)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setFooter(`TestBot | Footer`, client.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
  }
});

// Codex
client.on('message', message => {
  
    if (message.content === 'codex') {
     
      message.channel.send('Do I look like someone who can help u? What the fuck do you want...');
    }
  });

// About Codex
  client.on('message', message => {
    
    if (message.content === 'about') {
      
      message.channel.send("Hi my name is Codex and I'm nothing.");
    }
  });


  // help us Codex
  client.on('message', async message => {
    
    if (message.content === 'help us codex') {
      
      let embed = new Discord.RichEmbed()


    .setColor(0xdd9323)
    .setTitle("``Here you go. Now listen to me when I fucking talk.``")
    .setThumbnail(client.user.displayAvatarURL)   
    .addField("*1.*  __Networking__  👆  ",`${"Video on Networking"}`, true)
    .addField("*2.*  __Subnetting__  🤜 ", `${"Video on subnetting."}`, true)
    .addField("*3.*  __Routing__     🖖 ", `${"Video on routing."}`, true)
    .addField("*4.*  __Printer__    🤙 ", `${"Video on printer."}`, true)
    .setFooter(`TheCodexBot`, client.user.displayAvatarURL);

    
     message.channel.send(embed).then(async message => {
     })

     
       
    
message.react("👆").then(() => message.react('🤜').then(() => message.react('🖖').then(() => message.react('🤙'))));
     {

     }


      

const filter = (reaction, user) => {
	return ['👆','🤜','🖖','🤙'].includes(reaction.emoji.name) && user.id === message.author.id;
};


message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

    // Network
		if (reaction.emoji.name === '👆') {
			message.reply('Here you go. https://www.youtube.com/watch?v=BmoHqVjL1ZI');
    } 
    // Subnetting
    if (reaction.emoji.name === '🤜') {
			message.reply('Here you go. https://www.youtube.com/watch?v=qQEaAb_p8_E');
    } 
    // Routing
    if (reaction.emoji.name === '🖖') {
			message.reply('Here you go. https://www.youtube.com/watch?v=zeArDrC2xPg');
    } 
    // Troubleshooting Printer
    if (reaction.emoji.name === '🤙') {
			message.reply('Here you go. https://www.youtube.com/watch?v=WyQw8bk3HpM');
    } 
    
	})
	.catch(collected => {
		message.reply('You did not answer. Stop wasting my fucking time.');
  });
  
    }



  });


  // Check for Assignment
  client.on('message', message => {
    
    if (message.content === 'check') {
      
      message.channel.send('`Checking....`');
      
      
      setTimeout(test, 3000);

      function test(){ 
        message.channel.send("Looks like your in luck... ``0 Assignments Today` __Beta feature__", );

      }
      
    }
  });


  // Codex help command list
  client.on('message', message => {
    
    if (message.content === 'codex help') {
      
      message.channel.send('`Here are all my commands.`')
      let sEmbed = new Discord.RichEmbed()

    .setColor(0xdd9323)
    .setTitle("**The Codex Bot Commands Beta**")
    .setThumbnail(client.user.displayAvatarURL)   
    .addField('**-ping**', `${"__*Description*__ = Checks to se if the bot is responding."}`, true)
    .addField('**-pic / filter pic / will pic / class pic**', `${"__*Description*__ = This command will show  the beauty of SOMEONE"}`, true)
    .addField("**-check**", `${" __*Description*__ = Check to see if there's new assignment __(Today)__. **Beta** "}`, true)
    .addField('**-uptime**', `${"__*Description*__ = Check to the uptime of the bot."}`, true)
    .addField('**-info**', `${"__*Description*__ = Info about this Bot."}`, true)
    .addField('**-codex help**', `${"__*Description*__ = List of all the commands for Codex."}`, true)
    .addField('**-help us codex**', `${"__*Description*__ = List or leaning video of Professor Messer."}`, true)
    .addField('**-contact codex**', `${"__*Description*__ = SOMEONE email."}`, true)
    .addField('**-ver**', `${"__*Description*__ = Check the current build. "}`, true)
    .addField('**-about**', `${"__*Description*__ = Info about Codex."}`, true)
     .addField('**-arduino help**', `${"__*Description*__ = List of arduino commands."}`, true)
    .addField("__**I built this bot for no reason so don't ask me wy**__", `${" Respect for Codex.  Made By __**Cody**__"}`, true )
    .setFooter(`TheCodexBot`, client.user.displayAvatarURL);
    
    message.channel.send({embed: sEmbed});
    }
    

  });

  client.on('message', message => {
    
    if (message.content === 'arduino help') {
      let sEmbed = new Discord.RichEmbed()
      .setColor(0xdd9323)
      .setTitle("**The Codex Arduino Commands**")
      .setThumbnail(client.user.displayAvatarURL)   
      .addField('**-led on / led off**', `${"__*Description*__ = Turns a led on, or off."}`, true)
      message.channel.send({embed: sEmbed});
    }
     
  });



//ARDUINO _____________

  // To make this work with arduino you need to upload the StandardFirmalaPlus. Don't forgot or will not work...

//Simple led on and off
// ON

// LED 

board.on("ready", () => {
	const led = new five.Led(13); // make sure ur input is on PIN 13
	client.on('message', msg => { 
		if (msg.content === "led on");
    else if (msg.content === "led off");
    
    if (msg.content === 'led on') {

      msg.reply ("LED is now ON")
    };

    if (msg.content === 'led off') {

      msg.reply ("LED is now OFF")
    };
	});
});






// LCD
board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [12, 11, 5, 4, 3, 2],
    backlight: 6,
    rows: 2,
    cols: 20


    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  // Tell the LCD you will use these characters:


  // Line 1: Hi rmurphey & hgstrp!
  lcd.clear().print("LCD DISPLAY");
  lcd.cursor(1, 0);

  // Line 2: I <3 johnny-five
  // lcd.print("I").write(7).print(" johnny-five");
  // can now be written as:
  lcd.print("LCD DISPLAY");

  this.wait(3000, function() {
    lcd.clear().cursor(0, 0).print("LCD DISPLAY");
  });

  this.repl.inject({
    lcd: lcd
  });
});







//ARDUINO -----------------------


const DEV = ""; // permission ID from discord Roles. If u don't put this u will not have access to the **clear** Command.




// Clear msg
client.on('message', message => {
  
  if (message.content === 'clear') {
   
    if(message.member.roles.has(DEV) ) 
    {
 
      message.channel.fetchMessages({limit: 5}) // 5 msg deleted
      .then(function(list){
           message.channel.bulkDelete(list);
           message.reply ("You deleted 5 messages.")
       }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})             

}


else {


  message.reply (" No permission")

}}


});





//Token Don't give out...

client.login('PLASE PUT TOKEN HERE');
