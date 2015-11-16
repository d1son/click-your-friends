// global variables

var imgCount = 0;
var friendImg = document.getElementsByTagName('img');
var startButton = document.getElementById("btn-start");

// GAME START!

startButton.addEventListener("click", startGame);

// function to begin timeout and click count

function startGame() {
    startButton.setAttribute("class", "btn btn-danger");
    setTimeout(gameEnd, 20000);
    for (var i = 0; i < friendImg.length; i++) {
        friendImg[i].disabled = false;
        friendImg[i].addEventListener("click", clickCounter);
    }
}

// function determining what images are clicked and unclicked

function clickCounter() {
    if (this.getAttribute("data-state") === "unclicked") {
        this.setAttribute("data-state", "clicked");
        imgCount = imgCount + 1;
    }
}

// function to alert player that game has ended

function gameEnd() {
    alert("You clicked " + imgCount + " of your friends!");
    imgCount = 0;
    location.reload();

}