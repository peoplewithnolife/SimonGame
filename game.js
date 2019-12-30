var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

function resetGame() {
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
    nextSequence();
}

function startOver() {
   gameStarted = false;
   level = 0;
   userClickedPattern = [];
   gamePattern = [];
}

$(document).keydown(function () {
    if (gameStarted === false) {
        resetGame();
        gameStarted = true;
        $("#level-title").text("Level " + level);
    }
});

function nextSequence() {
    userClickedPattern = [];
    var randomNumber;
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    level++;
    $("#level-title").text("Level " + level);
    //console.log(randomChosenColour);
    //console.log(gamePattern);
}

function checkAnswer(currentLevel) {
    console.log("chkAns:" + currentLevel);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () { nextSequence(); }, 500);
       }
    }
    else {
            var failSound = new Audio("sounds/wrong.mp3");
            failSound.play();
            $("body").addClass("game-over");
            setTimeout(function () { $("body").removeClass("game-over"); }, 200);
            $("#level-title").text("Game over (you loser) Press Any Key to Restart");
            startOver();
        console.log("FAIL");
    }
}

$(".btn").click(function (e) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () { $("#" + currentColour).removeClass("pressed"); }, 100);
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
