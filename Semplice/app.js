var express = require('express');
var app = express(); 

const path = require('path');
//assuming app is express Object.
app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/about',function(req,res){
console.log(__dirname);
 res.sendFile(path.join(__dirname,'about.html')); 
});
app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname,'sitemap.html')); 
});
app.get('/procioni',function(req,res){
 res.sendFile(path.join(__dirname,'dati.json')); 
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
