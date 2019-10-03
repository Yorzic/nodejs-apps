const express = require("express");
const path = require('path');
const router = express.Router();

const app = express();

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));

app.get("/", function(request, response){
  // response.send("<!doctype html><html lang='en-US'><head><link href='/styles.css' rel='stylesheet' type='text/css'></head><body><div class='teaser' id='title'><h1>Hello world!</h1><p>You've reached Artur Daylidonis.</p><p><a href='/contact'>Contact me</a></p></div></body></html>");
  response.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get("/contact", function(request, response){
  // response.send("<!doctype html><html lang='en-US'><head><link href='/styles.css' rel='stylesheet' type='text/css'></head><body><div class='teaser' id='title'><h1>Contact me</h1><p><a href='mailto:a@apy.app?subject=Email%20from%20a%20custom%20server'>a@apy.app</a></p></div></body></html>");
  response.sendFile(path.join(__dirname+'/contact.html'));
});

app.get("/about", function(request, response){
  // response.send("<!doctype html><html lang='en-US'><head><link href='/styles.css' rel='stylesheet' type='text/css'></head><body><div class='teaser' id='title'><h1>Contact me</h1><p><a href='mailto:a@apy.app?subject=Email%20from%20a%20custom%20server'>a@apy.app</a></p></div></body></html>");
  response.sendFile(path.join(__dirname+'/about.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000, function() {
  console.log("Server started on port 3000");
});
