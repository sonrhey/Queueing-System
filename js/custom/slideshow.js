$(document).ready(function(){
	var counter = 0;
	function getImages(){
		$.ajax({
			type: "get",
			url: "database/getImages.php"
		}).done(function(response){
			var obj = $.parseJSON(response);
			var count = obj.length;
			$imgSource = obj[0].img_path;
			firstChange($imgSource);
			//$("#main-product-image").attr("src", obj[0].img_path);
			setInterval(function(){
					counter++;	
					if(counter < count)
					{	
						console.log(counter);
						var imgurl = obj[counter].img_path;
						// $("#main-product-image").fadeOut().fadeIn().attr("src", imgurl);

						$("#main-product-image").fadeOut(500, function() {
				        $("#main-product-image").attr("src",imgurl);
				    }).fadeIn(500);
					}
					else
					{
						counter = 0;
						firstChange($imgSource);
					}

			},5000);

		});
	}

	getImages();

	function firstChange($imgSource){
		$("#main-product-image").fadeOut(500, function() {
			$("#main-product-image").attr("src",$imgSource);
		}).fadeIn(500);
	}
});