var primetest = function($n){
	if(isNaN($n) || $n == '') {
		window.alert("Please enter a valid number.");  //displays message when an empty comment is attempted
	}
	else{
		$prime = true;
		for(var i = 2; i <= Math.sqrt($n); i++) {
			if($n % i === 0) {$prime = false;}
		}
		if($prime) {$prime = $n > 1;}

		if($prime === true) $verdict = $n + " is indeed prime!";
		else $verdict = $n + " is not prime at all...";
		
		var $new_verdict = $("<p>").text($verdict).hide();
		$(".verdicts").append($new_verdict);	
		$new_verdict.slideDown(2000);
	}
	$("#box").val("");	//clears the input box
};

var main = function () {
	"use strict";
	
	$(".num-input #pr").on("click", function(event){	
		var $num = $(".num-input input").val(); 
		primetest($num);
	});
	
	$(".num-input #cl").on("click", function(event){	//clears the input box when Clear is clicked
		$("#box").val("");
	});
	
	$(".num-input #rm").on("click", function(event){	//empties the verdict list when Remove All is clicked
		$(".verdicts").empty();
	});
	
	$(".num-input input").on("keypress", function(event){  
		if(event.keyCode === 13){
			var $num = $(".num-input input").val(); 
			primetest($num);
		}
	});
};

$(document).ready(main);