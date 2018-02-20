$(document).ready(function(){
	var counter = 0;
	function getImages(){
		$.ajax({
			type: "get",
			url: "database/getImages.php"
		}).done(function(response){
			var obj = $.parseJSON(response);
			var count = obj.length;
			$("#main-product-image").fadeOut().fadeIn().attr("src", obj[0].img_path);
			setInterval(function(){
					counter++;	
					if(counter < count)
					{	
						var imgurl = obj[counter].img_path;
						// $("#main-product-image").fadeOut().fadeIn().attr("src", imgurl);

						$("#main-product-image").fadeOut(500, function() {
				        $("#main-product-image").attr("src",imgurl);
				    }).fadeIn(500);
					}
					else
					{
						counter = 0;
					}
			},5000);

		});
	}

	getImages();

});