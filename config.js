const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_42_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBRUXphTDNRK1I1MGxKMlkzTWR6aFNpK2tsU25lb2ZTUUxmbmMyUzRpYTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjgxa3BMNEpuUmoyblpBWm5VRnh0emdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmMzOWVhY2EtZWU3Yy00YzY4LWEwYmQtYTAzOWQ5OGVmOTQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDIzMSxcbiAgICAgIDM5LFxuICAgICAgNjUsXG4gICAgICAxNSxcbiAgICAgIDE3NyxcbiAgICAgIDE4MyxcbiAgICAgIDE5MSxcbiAgICAgIDIzMyxcbiAgICAgIDE5OCxcbiAgICAgIDY5LFxuICAgICAgMTY2LFxuICAgICAgMTc4LFxuICAgICAgMTg3LFxuICAgICAgMTI1LFxuICAgICAgMTE3LFxuICAgICAgMjQwLFxuICAgICAgMTE4LFxuICAgICAgNzksXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAxOTgsXG4gICAgICAxMjgsXG4gICAgICA3NyxcbiAgICAgIDIxNCxcbiAgICAgIDE3MCxcbiAgICAgIDEwMCxcbiAgICAgIDEyMixcbiAgICAgIDg2LFxuICAgICAgMjQ5LFxuICAgICAgNzUsXG4gICAgICAxNjgsXG4gICAgICAxMTgsXG4gICAgICAxNTUsXG4gICAgICAxMDAsXG4gICAgICAxMyxcbiAgICAgIDIyLFxuICAgICAgMzMsXG4gICAgICAxOTEsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkxXNFRaMzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU4MzQwNDIwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIzLJBzLJSzLJTzLJIzLJBzLJOzLJBzLJcIixcbiAgICBcImxpZFwiOiBcIjE0NzAyMTU5NjI2MjY1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEwveE5JREVPYWt5YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKOGc2NUtpMkZEbmx4bElocUkyNnQvOTN4bVFhbUk0c2svYis5WUJkbzEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJUMCtJdnFHSXFjS2J0S0N5MEpjVTQ0VlZyVnZzaC83RUg5OFYrSlh6SGF0dGZCdkN2cS9NMlQ3Qmo0VlJVcDk1V3JjMm1sS3g2TnByNGhhanl3TEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJhaHhjVnVqbTlvYnQ1ZG1jZ3R6ZUdzemxyNTZISEtYQmcvalBXM2ZkYUY1dFV2STJiWWdVc21jNFBsZ0svZVh5TXpqc2lhb2w2SWVFc0xtdVhtL0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU4MzQwNDIwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk2MjUzOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
