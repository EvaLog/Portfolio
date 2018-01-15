
var nodemailer = require('nodemailer');

module.exports=function(){
var transporter = nodemailer.createTransport({
    service: 'naver',
    auth: {
    user: '네이버아이디@naver.com',
    pass: '비밀번호'
    }
    });
    
var mailOptions = {
    from: '네이버아이디@naver.com',
    to: '받는사람아이디@도메인',
    subject: '이메일 제목',
    text: '이메일 내용'
    };

transporter.sendMail(mailOptions, (error, info)=>{
    if (error) {
    console.log(error);
    }
    else {
    console.log('Email sent! : ' + info.response);
    }
    transporter.close();
    });

}