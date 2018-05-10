var csv = require('csvtojson')
var Converter = require("csvtojson").Converter;
var utf8 = require('utf8');
var converter = new Converter({checkType:true});
var csvFile = "data/test.csv"; 
var json = [];


exports.init = function(app){
	app.get("/projects/:id", getProject);
}

converter.fromFile(csvFile,function(err,result){
    if(err){
        console.log("An Error Has Occured");
        console.log(err);  
    } 
    json = result;
});


getProject = function(req, res){
 	var id = parseInt(req.params.id);
 	var project = {};
 	for (i=0;i<json.length;i++) {
 		if (json[i]['id'] === id){
 			var project = json[i];
 		}
 	}
 	console.log(project.wireframes);
 	var wireframes = project.wireframes.split(",");
 	var screenshots = project.screenshots.split(",");

	res.render('../public/views/projectshow', {
										title: project.title,
										team: project.team_members,
										opportunity: project.opportunity,
										vision: project.vision,
										w1: "../images/" + wireframes[0],
										w2: "../images/" + wireframes[1],
										s1: "../images/" + screenshots[0],
										s2: "../images/" + screenshots[1],
										s3: "../images/" + screenshots[2],
										s4: "../images/" + screenshots[3],
	});
}
