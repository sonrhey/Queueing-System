$(document).ready(function(){
$quewrapper = $(".que-wrapper");
$audio = $("#audio");
$putModalHere = $(".put-modal-here");
$myModal5 = $("#myModal5");
var idArray = [], qn = [];
var counter = 0, qncount = 0, count, divcount = 0;
var synth = window.speechSynthesis, varset, qn_number;

$availableQueuedInterval = setInterval(getAvailableQueued, 5000);

function getAvailableQueued(){

$.ajax({
type: "get",
url: "database/getQueuedNumbersDisplay.php"
}).done(function(response){
var obj = $.parseJSON(response);
var count = obj.length;

if(count != 0){
$quewrapper.empty();
var done;
for(var i=0;i<count;i++){
	if(obj[i].status == "0"){
		$class = "status-serve";
		$serveStatus = "Now Serving";
		qn_number = obj[i].qn_number;
		qn.push(qn_number);
		showModal(qn_number, obj[i].id);
	}else{
		$class = "status-served";
		$serveStatus = "Served";
	}
	$quewrapper.append("<div class='status"+obj[i].status+"'><h1>"+obj[i].qn_number+"</h1><label class='"+$class+"'>"+$serveStatus+"</label></div>");
}

divcount = $(".que-wrapper > div").length;
}else{
$quewrapper.empty();
idArray = [];	
}
});

}

getAvailableQueued();

var timeout;
function showModal(qn_number, id){
		var qq = Number(qn_number);
		if(idArray.indexOf(id) == -1){
		idArray.push(id);
		$audio.get(0).play();
			setTimeout(function(){
				var voices = synth.getVoices();
				var utterance = new SpeechSynthesisUtterance('Now Serving, Number "' + qq);
				utterance.voice = voices[2];
				// utterance.pitch = 3;
				// utterance.rate = 2;
			 	window.speechSynthesis.speak(utterance);
				$("#myModal5").modal("show");
				$(".number-wrapper").html(qn_number);
				setTimeout(function() {
					$("#myModal5").modal("hide");
				}, 3000);
			}, 2000);
		}
}

// $(window).on("load", function(){
// 	//$myModal5.remove();
// });
// setTimeout(manyQueued, 200);
// function manyQueued(){
// 	count = qn.length;
	
// 	if(count != 0){
// 			$audio.get(0).play();
// 			var interval = setInterval(function(){
// 				if(counter < count){
// 					$("#myModal5").modal("show");
// 					$(".number-wrapper").text(qn[counter]);
// 				}else if(counter >= count){
// 					clearInterval(interval);
// 					$("#myModal5").fadeOut().modal("hide");
// 				}
// 				counter++;
// 			},3000);
// 	}
// }

});