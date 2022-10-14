let currHorizontalImg = 0;
let currVerticalImg = 0;
let interval = 5000;
let horizontalImage = [];
let verticalImage = [];

//Create an array of the landscape images that will cycle through on the main page
horizontalImage[0] = "slideShow/landscape/gardenOfTheGods.JPG";
horizontalImage[1] = "slideShow/landscape/nationals.png";
horizontalImage[2] = "slideShow/landscape/pikespeak.png";
horizontalImage[3] = "slideShow/landscape/graduation2022.png";
horizontalImage[4] = "slideShow/landscape/campfire2022.png";
horizontalImage[5] = "slideShow/landscape/pledgeparty.png";
horizontalImage[6] = "slideShow/landscape/pledgeparty_1.png";

//Create an array of the portrait images that will cycle through on the main page
verticalImage[0] = "slideShow/portrait/formal_3.png";
verticalImage[1] = "slideShow/portrait/formal.png";
verticalImage[2] = "slideShow/portrait/formal2022.JPG";
verticalImage[3] = "slideShow/portrait/kingben.png";


let verticalImageChange = document.getElementById("slideVertical");
let horizontalImageChange = document.getElementById("slideHorizontal");
function mainSlideShows(){
    currHorizontalImg < (horizontalImage.length - 1) ? currHorizontalImg++ : currHorizontalImg = 0;
    currVerticalImg < (verticalImage.length - 1) ? currVerticalImg++ : currVerticalImg = 0;
    verticalImageChange.src = verticalImage[currVerticalImg];
    horizontalImageChange.src = horizontalImage[currHorizontalImg];
    setTimeout("mainSlideShows()", interval);
}

document.addEventListener('DOMContentLoaded', mainSlideShows());

//Correct sizing for the slideshow landscape photos
let slideLandscape = document.getElementById("slideShowLandscape");
let slideVertical = document.getElementById("slideVertical");
function setHeightForLandscapeSlide() {
    let w = window.innerWidth;
    slideLandscape.style.height = w/4 + "px";
    // slideVertical.style.height = w/1.01 + "px";
    setTimeout("setHeightForLandscapeSlide()", 340);
}
document.addEventListener('DOMContentLoaded', setHeightForLandscapeSlide());

//Add the ability to go left or right on a slideshow
let leftButton = document.getElementById("leftButton");
leftButton.innerHTML = '◀';
leftButton.addEventListener("click", leftLandscape);
function leftLandscape() {
    console.log("Click");
    currHorizontalImg > 0 ? currHorizontalImg-- : currHorizontalImg = horizontalImage.length - 1;
    horizontalImageChange.src = horizontalImage[currHorizontalImg];
    
}
let rightButton = document.getElementById("rightButton");
rightButton.innerHTML = '▶';
rightButton.addEventListener("click", rightLandscape);
function rightLandscape() {
    currHorizontalImg < (horizontalImage.length - 1) ? currHorizontalImg++ : currHorizontalImg = 0;
    horizontalImageChange.src = horizontalImage[currHorizontalImg];
}