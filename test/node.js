const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;
const TELEGRAM_TOKEN = '7176317817:AAElgqp46Wys0IfYLRt1NxuzKQE_e24VMyg'; // توکن ربات تلگرام خود را وارد کنید
const TELEGRAM_CHAT_ID = 't.me/shayan8089_bot'; // شناسه چت تلگرام خود را وارد کنید

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
        const { name, message } = req.body;
        const text = `نام: ${name}\nپیام: ${message}`;

        axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: text
        })
        .then(response => {
            res.send('پیام شما ارسال شد.');
        })
        .catch(error => {
            res.send('خطایی رخ داده است.');
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
