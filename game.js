var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

//$(document).load(function() {
//  gameStarted = false;
//});

$(document).keydown(function() {
    if (gameStarted === false) {
        nextSequence();
        gameStarted = true;
        $("#level-title").text("Level " + level);
    }
});

//$(document).keydown(function(e) {
//    $("h1").text(e.key);
//});

//$(document).keydown(function(event) { 
//    alert('You pressed down a key'); 
//}); 

function nextSequence() {
    var randomNumber;
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
   // var btnSound = new Audio("sounds/" + randomChosenColour + ".mp3");
    //btnSound.play();
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    level ++;
    $("#level-title").text("Level " + level);
    //$("#"+randomChosenColour).css("background-color","white");
    //console.log(randomNumber);
    console.log(randomChosenColour);
    console.log(gamePattern);
}

$(".btn").click(function (e) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    //console.log(userChosenColour);
    //console.log(userClickedPattern);
});

function animatePress(currentColour) {
   $("#"+currentColour).addClass( "pressed" );
   setTimeout(function(){ $("#"+currentColour).removeClass("pressed"); }, 100);
}

function playSound(name) {
    var btnSound = new Audio("sounds/" + name + ".mp3");
    btnSound.play();
}
//$("body").css("background-color","red");
//alert("Phil Sux");
//$(document).keydown(function(e) {
//    $("h1").text(e.key);
//});
