$(function() {
		
	$(".show-project").click(function(e){
		var next = "projects/" + this.value;
		console.log(next);
		window.location.replace(next);
	});


});