$(document).ready(function() {

	//var percentage = $('.progressbar-value').html();
	
	$( "[role=progressbar]" ).wrap( "<div class='progress-wrap clearfix'></div>" );
	
	$(".progressbar-value").contents().appendTo('.progress-wrap').wrap( "<span class='percentage'></span>" );
	
});