$(function() {
    	$('.carousel-item').click(function(e) {
    		console.log("oke");
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});