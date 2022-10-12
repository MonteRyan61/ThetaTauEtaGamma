
//Correct sizing for the slideshow landscape photos
let slideLandscape = document.querySelectorAll(".slideShowLandscape");
let slideVertical = document.getElementById("slideVertical");
function setHeightForLandscapeSlide() {
    let w = window.innerWidth;
    for (const flexItem of slideLandscape) {
        flexItem.style.height = w/4 + "px";
    }
    // slideVertical.style.height = w/1.01 + "px";
    setTimeout("setHeightForLandscapeSlide()", 340);
}
document.addEventListener('DOMContentLoaded', setHeightForLandscapeSlide());

let i = 0;
let interval = 2000;
let horizontalImage = [];


//Create an array of the images that will cycle through on the main page
horizontalImage[0] = "slideShow/landscape/gardenOfTheGods.JPG";
horizontalImage[1] = "slideShow/landscape/nationals.png";
horizontalImage[2] = "slideShow/landscape/pikespeak.png";
horizontalImage[3] = "slideShow/landscape/graduation2022.png";
horizontalImage[4] = "slideShow/landscape/campfire2022.png";
horizontalImage[5] = "slideShow/landscape/pledgeparty.png";
horizontalImage[6] = "slideShow/landscape/pledgeparty_1.png";


let horizontalImageChange = document.getElementById("slide");
function horizontalSlideShow(){
    if(i < horizontalImage.length - 1)
    {
        i++;
    }
    else
    {
        i = 0;
    }
    horizontalImageChange.src = horizontalImage[i];
    setTimeout("horizontalSlideShow()", interval);
}

document.addEventListener('DOMContentLoaded', horizontalSlideShow());


let j = 0;
let verticalImage = [];


//Create an array of the images that will cycle through on the main page
verticalImage[0] = "slideShow/portrait/formal_3.png";
verticalImage[1] = "slideShow/portrait/formal.png";
verticalImage[2] = "slideShow/portrait/formal2022.JPG";
verticalImage[3] = "slideShow/portrait/kingben.png";

let verticalImageChange = document.getElementById("slideVertical");
function verticalSlideShow(){
    if(j < verticalImage.length - 1)
    {
        j++;
    }
    else
    {
        j = 0;
    }
    verticalImageChange.src = verticalImage[j];
    setTimeout("verticalSlideShow()", interval);
}

document.addEventListener('DOMContentLoaded', verticalSlideShow());

