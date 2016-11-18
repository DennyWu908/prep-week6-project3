/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {  
   

    
// Question #1

$(".changeColor").click(function(){
	$('li:nth-child(3)').css('color', '#8A2BE2');
});


// Question #2

$("li:nth-child(4)").click(function(){
	$("li:nth-child(4)").append("<li>This is the next item on the list.</li>");
});


// Question #3

$("#removeLi").click(function(){
	$('li:nth-child(2)').remove();
});


// Question #4

$("li:nth-child(5)").click(function(){
	$("li:nth-child(5)").css('font-size', '40px');
	$('li').not(':last').remove();
});
    
    
// Question #5

$('img.cute').click(function(){
	var $clone = $(this).clone();
	$('.clones').append($clone);
});
  

  // Question #6

$('body').dblclick(function(){
	$('#makeSquare').css({'border-radius':'0', 'width':'25%'});
});	
	

	
// Question #7

$('.swatches').click(function(){
	$('background').css('.swatches');
});
  
  
  
  // Question #8




});