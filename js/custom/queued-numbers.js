$(document).ready(function(){
var inputClass = ["btn btn-primary btn-block" , "btn btn-success btn-block"], inputClassWrapper;
var countArray = [], divClass, responseTxt, responseMsg;
var getQueuedNumbers_interval = setInterval(getQueuedNumbers, 5000);
$queuedbtnwrapper = $("#queued_button_number_wrapper");

function getQueuedNumbers(){
	$.ajax({
		type: "GET",
		url: "database/getQueuedNumbers.php",
	}).done(function(response){
		var obj = $.parseJSON(response);
		var count = obj.length;

		$("#queued_button_number_wrapper").empty();
		for(var i=0; i<count; i++){
			if(i%2 == 0){
				inputClassWrapper = inputClass[0];
			}else{
				inputClassWrapper = inputClass[1];
			}
			$queuedbtnwrapper.append("<div class='form-group'><input type='submit' class='"+inputClassWrapper+"' name='button' id='button' value="+obj[i].queued_number+"></div>");
		}
	});
}
getQueuedNumbers();

function saveToDisplay(buttonVal){
	$.ajax({
		type: "post",
		url: "database/save_to_display.php",
		data: "buttonVal="+buttonVal
	}).done(function(response){
		if(response == 0){
			divClass = "alert-success";
			responseTxt = "Success!";
			responseMsg = " Transaction number on queued...";
		}
		$queuedbtnwrapper.append("<div class='alert "+divClass+"'><strong>"+responseTxt+"</strong>"+responseMsg+"<button type='button' class='close' data-dismiss='alert'><span class='close-button' id='close-modal'>&times;</span></button></div>");
	});

}

$(document).on("click", "#button", function(e){
e.preventDefault();
$buttonVal = $(this).val();
saveToDisplay($buttonVal);
});

});