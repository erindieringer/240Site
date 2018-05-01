var express = require("express");
var app = express();
/*
 * Upon receiving a GET request of the path /hi,
 * do the callback that sends as the response "hello world"
 */
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){   
     res.sendFile(__dirname + '/public/home.html');
});

app.get('/projects',function(req,res){   
     res.sendFile(__dirname + '/public/projects.html');
});

app.get('/speakers',function(req,res){   
     res.sendFile(__dirname + '/public/speakers.html');
});

app.get('/syllabus',function(req,res){   
     res.sendFile(__dirname + '/public/syllabus.html');
});
 
app.listen(5000);
console.log("Server listening at http://localhost:50000/");