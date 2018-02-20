$(document).ready(function(){

	function getImages(){
		$.ajax({
			type: "get",
			url: "database/getImages.php"
		}).done(function(response){
			var obj = $.parseJSON(response);
			var count = obj.length;
			var rand = function() {
		    return Math.floor(Math.random()*count);
			};

			setInterval(function(){
					var imgurl = obj[rand()].img_path;
					$("#main-product-image").fadeOut().fadeIn().attr("src", imgurl);
			},5000);

		});
	}

	getImages();

});