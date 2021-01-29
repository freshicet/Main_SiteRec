var fs = require('fs');
var http = require('http');
var https = require('https');
var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

var privateKey  = fs.readFileSync('/etc/letsencrypt/live/benjamintaylor.me/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/benjamintaylor.me/fullchain.pem', 'utf8');

const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/file', function (req, res) {
  res.download(__dirname + '/Resume.pdf', 'Resume.pdf');
});

httpsServer.listen(443);
//Http to Https
var http_server = http.createServer(function(req,res){
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80, function(err){
    console.log("Node.js Express HTTPS Server Listening on Port 80");
});
