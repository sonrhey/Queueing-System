$(document).ready(function(){
$quewrapper = $(".que-wrapper");
$audio = $("#audio");
$putModalHere = $(".put-modal-here");
var idArray = [], qn = [];
var counter = 0, qncount = 0;
var synth = window.speechSynthesis, utterance, varset, qn_number;

$availableQueuedInterval = setInterval(getAvailableQueued, 5000);

function getAvailableQueued(){

$.ajax({
type: "get",
url: "database/getQueuedNumbersDisplay.php"
}).done(function(response){
var obj = $.parseJSON(response);
var count = obj.length;

$quewrapper.empty();
var done;
for(var i=0;i<count;i++){
	if(obj[i].status == "0"){
		$class = "status-serve";
		$serveStatus = "Now Serving";
		qn_number = obj[i].qn_number
		showModal(qn_number, obj[i].id);
	}else{
		$class = "status-served";
		$serveStatus = "Served";
	}
	$quewrapper.append("<div class='status"+obj[i].status+"'><h1>"+obj[i].qn_number+"</h1><label class='"+$class+"'>"+$serveStatus+"</label></div>");
}

});

}

getAvailableQueued();


function showModal(qn_number, id){
	if(idArray.indexOf(id) == -1){
		idArray.push(id);
		$audio.get(0).play();
			setTimeout(function(){
				var voices = synth.getVoices();
				utterance = new SpeechSynthesisUtterance('Now Serving, "' + qn_number);
				utterance.voice = voices[2];
			 	synth.speak(utterance);
				$("#myModal5").modal("show");
				$(".number-wrapper").text(qn_number);
				setTimeout(function() {
					$("#myModal5").modal("hide");
				}, 3000);
			}, 3000);
	}
}


});