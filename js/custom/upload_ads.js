$(document).ready(function(){
	$choosefile = $("#choosefile"), $img_list = $(".img-list");
	var total_file;

	$choosefile.on("change", function(){
			// var i = $choosefile.get(0).files.length;
			// alert(i);
			// // for(var a=0;a<i;a++){
			// // $img_list.append("<img src='"+URL.createObjectURL(event.target.files[a])+"'>");
			// // }
			$(".formwrap").css({"position":"relative", "transition":"0.3s"});
			$img_list.html("");
			total_file=$choosefile.get(0).files.length;
			$("#slmf").html(total_file + " File(s) selected for upload.");
			for(var i=0;i<total_file;i++){
				var file = this.files[i];
				var fileType = file["type"];
				var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
				if($.inArray(fileType, validImageTypes) < 0){
					alert("Chosen file is invalid!");
					$choosefile.val("");
				}else{
					$img_list.append("<div><img src='"+URL.createObjectURL(event.target.files[i])+"'></div>");
				}
			}
	});

	$("#save_ads").submit( function(e){
		e.preventDefault();
		//alert($(".img-list > img").length);
		for(var i=0;i<total_file;i++){
			$url = $(this).attr("action");
			$method = $(this).attr("method");
			$data = new FormData($(this)[i]);
			$.ajax({
				type: $method,
				url: $url,
				data: $data,
				cache: false,
		        contentType: false,
		        processData: false
			}).done(function(response){
				$img_list.html("");
				$(".formwrap").css({"position":"absolute", "transition":"0.3s"});
				$("#slmf").html("Select Multiple Files");
			});
		}
		
	});
});