$(document).ready(function(){
	$choosefile = $("#choosefile"), $img_list = $(".img-list");

	function readURL(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $img_list.append("<img src='"+e.target.result+"'>");
	        }

	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$choosefile.on("change", function(){
		readURL(this);
		$img_list.empty();
	});

	$("#save_ads").submit( function(e){
		e.preventDefault();
		$url = $(this).attr("action");
		$method = $(this).attr("method");
		$data = new FormData($(this)[0]);
		$.ajax({
			type: $method,
			url: $url,
			data: $data,
			cache: false,
	        contentType: false,
	        processData: false
		}).done(function(response){
			alert(response);
		});
	});
});