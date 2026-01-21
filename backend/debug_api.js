const https = require('https');
require('dotenv').config();

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-1.5-flash";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

console.log(`Testing Key: ${API_KEY ? API_KEY.slice(0, 5) + '...' : 'UNDEFINED'}`);
console.log(`URL: ${URL.replace(API_KEY, 'HIDDEN')}`);

const data = JSON.stringify({
    contents: [{
        parts: [{ text: "Hello" }]
    }]
});

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(URL, options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        console.log(`\nStatus Code: ${res.statusCode}`);
        console.log("Response Body:");
        console.log(body);
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.write(data);
req.end();
