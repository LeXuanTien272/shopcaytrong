const nodemailer = require("nodemailer"); 


const transporter = nodemailer.createTransport({ 
    pool: true, 
    host: "smtp.gmail.com", 
    port: 465, 
    secure: true, // Use `true` for port 465, `false` for all other ports 
    auth: { 
        user: "hoctrinhf04@gmail.com", 
        pass: "ydum shdb aftj agqi", 
    }, 
});

const sendMail = async (data) => { 
    // send mail with defined transport object 
    try { 
        const {email, subject, content} = data; 
        const info = { 
            from: '"NodeJs 👻" <hoctrinhf04@gmail.com>', // sender address 
            to: email, // list of receivers 
            subject: subject,//"Hello ✔", // Subject line 
            html: content//"<b>Hello world?</b>", // html body 
        };
        await transporter.sendMail(info); 
    } catch (error) { 
    console.log(error); 
    } 
    } 
    module.exports = { sendMail } 