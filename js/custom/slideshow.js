$(document).ready(function(){
	var counter = 0, idarray = [];
	var interval = setInterval(getImages, 5000);
	function getImages(){
		$.ajax({
			type: "get",
			url: "database/getImages.php"
		}).done(function(response){
			if(response){
				var obj = $.parseJSON(response);
				var count = obj.length;
				counter++;	
				if(idarray.indexOf(obj[0].id) == -1){
					idarray.push(obj[0].id);
					$imgSource = obj[0].img_path;
					firstChange($imgSource);
				}else{
					if(counter < count)
					{	
						console.log(counter);
						var imgurl = obj[counter].img_path;
						$("#main-product-image").fadeOut(500, function() {
				        	$("#main-product-image").attr("src",imgurl);
				    	}).fadeIn(500);
					}
					else
					{
						counter = 0;
						firstChange($imgSource);
					}
				}
			}
		});
	}

	getImages();

	function firstChange($imgSource){
		$("#main-product-image").fadeOut(500, function() {
			$("#main-product-image").attr("src",$imgSource);
		}).fadeIn(500);
	}
});