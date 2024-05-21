
jQuery(document).ready(function(){
jQuery("A").css("color","blue");
jQuery(".mobilemenu").children(".close").click(function(){
  console.log("sulge menu");
  jQuery("body").removeClass("mobile-menu-visible");
  jQuery(this).parent(".mobilemenu").hide();

})
jQuery(".burgermenu").click(function(){
console.log("ava");
jQuery(".mobilemenu").fadeToggle();
jQuery("body").addClass("mobile-menu-visible");



})

jQuery(window).scroll(function(event){
console.log("tere");
})






});