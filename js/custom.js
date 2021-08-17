(function($){

'use strict';

$(window).scroll(function(){
	var gotop = $(window).scrollTop();

 if (gotop > 900) {
  
  $(".scrl-top").css({'opacity' : '1'});
}
else {
	$(".scrl-top").css({'opacity' : '0'});
}

});

$(".scrl-top").on("click", function(){
  
  $("html").animate({"scrollTop" : "0"}, 4000);

});

// This Function for Responsive Menu only.

$(".menu-icon").on("click", function(){
   
   $(".sw-menu").css({"left" : "0",  "opacity" : "1"});
});

$(".close").on("click", function(){
   
   $(".sw-menu").css({"left" : "-220px", "opacity" : "0"});
});

// These Functions for our work section.

$(".photograph").on("click", function(){

 $(".sw-work-photography").css({"display" : "block"});
 $(".sw-work-design").css({"display" : "none"});
 $(".sw-work-graphic").css({"display" : "none"});

});

$(".design").on("click", function(){

 $(".sw-work-photography").css({"display" : "none"});
 $(".sw-work-design").css({"display" : "block"});
 $(".sw-work-graphic").css({"display" : "none"});
 
});

$(".graph").on("click", function(){

 $(".sw-work-photography").css({"display" : "none"});
 $(".sw-work-design").css({"display" : "none"});
 $(".sw-work-graphic").css({"display" : "block"});
 
});








})(jQuery);