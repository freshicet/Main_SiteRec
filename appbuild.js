var fs = require('fs');
var http = require('http');
var https = require('https');

//Keys for letsencrypt
var privateKey = fs.readFileSync(
	'/etc/letsencrypt/live/benjamintaylor.me/privkey.pem',
	'utf8'
);
var certificate = fs.readFileSync(
	'/etc/letsencrypt/live/benjamintaylor.me/fullchain.pem',
	'utf8'
);

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
//Main Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//Page for Resume
app.get('/file', function (req, res) {
	res.download(__dirname + '/Resume.pdf', 'Resume.pdf');
});

//418 page
//I'm a teapot
app.get('/418', function (req, res) {
	res.redirect('https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418');
});

//404 page
//Rick_Roll
app.get('*', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443);

var http_server = http
	.createServer(function (req, res) {
		res.writeHead(301, {
			Location: 'https://' + req.headers['host'] + req.url,
		});
		res.end();
	})
	.listen(80, function (err) {
		console.log('Node.js Express HTTPS Server Listening on Port 80');
	});
