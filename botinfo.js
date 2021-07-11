const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const client = new Discord.Client();
module.exports = {
    name: "botinfo",
    description: "Shows the bot info",
    run: async (client, message, args) => {
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        let embed = new Discord.MessageEmbed()
        .setAuthor("JAM#7481's Info", client.user.avatarURL())
        .setColor("RANDOM")
            .setDescription(`**Bot Name: **JAM \n**Owner: **No۝b_|⫷ᗩᑎIᗰᕮ ᒪOᐯᕮᖇ⫸#9999 \n**Total Categories: **8 \n**Total Commands: **141 \n**Users:** ${client.users.cache.size} \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${client.channels.cache.size} \n**Uptime and Ping: **${duration} / ${Math.round(client.ws.ping)}ms \n**State: **Under Development \n**Online Status: **Up 24/7 (Except during Maintenance)`)
        .addField("Some Useful Links", "**Get JAM's Invite Link** **[Here](https://discord.com/api/oauth2/authorize?client_id=863080140628164618&permissions=8&scope=bot)** \n**Need Help? Join JAM's** **[Support Server](https://discord.gg/KVTraBW2sJ)** **for assistance**")
        .setFooter("Regards, JAM Bot Team");
    message.channel.send(embed);
    }
}
