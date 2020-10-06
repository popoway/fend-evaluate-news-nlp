var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const key = process.env.API_KEY;

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// receive url from client side and send request to API
app.post('/test', function (req, res) {
    apiParams = new URLSearchParams()
    apiParams.set('key', key)
    apiParams.set('of', 'json')
    apiParams.set('lang', 'en')
    console.log(`Receiving request from client side for url: ${JSON.stringify(req.body)}`);
    apiParams.set('url', req.body.url)
    console.log('Sending to MeaningCloud');
    fetch(baseURL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: apiParams
    })
    .then(response => response.json())
    .then(function(response) {
        console.log(`Receiving response from MeaningCloud: ${JSON.stringify(response)}`);
        res.send(response)
    })
})
