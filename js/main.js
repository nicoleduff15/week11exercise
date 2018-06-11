// console.log("connected");

//#5
$("#hide").click(function(){
  $("img").hide();
});

$("#show").click(function(){
  $("img").show();
});


//#6
$("#toggle").click(function(){
  $("img").toggle();
});

//#9
$("#fade").click(function(){
  $("img").toggleClass("fade");
  //B2
  if( $("img").css("opacity") == '0') {
      $("#textChange").text("fade on");
    } else {
      $("#textChange").text("fade off");
    }
});

//#10
$("img").hover(function(){
  $("img").attr("src", "img/meme2.jpg");
});

//#12
$("#li").click(function(){
  $("#list").append("<li>Coding is Fun!</li>");
});


//#14
$("#last").click (function(){
  $("body").css("background-color","red");
})
