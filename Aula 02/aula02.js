$(document).ready(function(){
    $("body").css("background", "red");
    $("p").append(" <- Isso é um texto");
    $('p').append($("#target h1"));
    //$('p').appendTo("#target h1");
    //$("p").html("Chatana");
    $('p').text("Oi")
  });