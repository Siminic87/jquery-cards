$(document).ready(function() {
 

    $("#bottom_button1").mouseenter(function(){
        $("#bottom_button1").fadeTo('fast', 1);
    });
    $("#bottom_button1").mouseleave(function(){
        $("#bottom_button1").fadeTo('fast', 0.5);
    });

 	$(".card_para").on("click", function() {
 		$(".card_para").css('color', 'red');
	});
 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 