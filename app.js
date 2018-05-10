var express = require("express");
var app = express();
var csvToJson = require('convert-csv-to-json');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


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

require('./controllers/project_controller.js').init(app);
 
app.listen(5000);
