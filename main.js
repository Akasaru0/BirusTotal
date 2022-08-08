const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/convert',(req,res) => {
    console.log('client get request to client')
    res.sendFile(path.join(__dirname, '/convert.html'));
});
app.get('/info',(req,res) => {
    console.log('client get request to info')
    res.sendFile(path.join(__dirname, '/info.html'));    
});
app.get('/style.css',(req,res) => {
    console.log('STYLE BRO')
    res.sendFile(path.join(__dirname, '/style.css'));    
});
app.get('/birustotal.ico',(req,res) => {
    console.log('LOGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    res.sendFile(path.join(__dirname, '/birustotal.ico'));    
});
app.get('/api',(req,responce) => {
    req.query.hash
    axios .get('https://www.virustotal.com/vtapi/v2/file/report?apikey=a89987301c0277e1f074b33d2856400667886cd0fe394a012aeb164b399f17c1&resource='+req.query.hash)
        .then(res => { //console.log(`statusCode: ${res.status.data}`);
        //console.log(res);
        responce.status(200).json(res.data)
        })
        .catch(error => { //console.error(error);
        });
    console.log('Api hash'+req.query.hash)

});

app.listen(port,() => {
	console.log(`Virus Total api listen to ${port}`)

});

