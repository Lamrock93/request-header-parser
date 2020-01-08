// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// This allows for the style sheet (held in the public folder) to be used
app.use(express.static('public'));

// This brings up the front-end HTML file when the project URL is entered
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// This gives permission for the correct IP address to be shown
app.enable('trust proxy')

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
})

// listen for requests
var listener = app.listen(process.env.PORT, () => {} );