
//Correct sizing for the slideshow landscape photos
let slideLandscape = document.querySelectorAll(".slideShowLandscape");
function setHeightForLandscapeSlide() {
    let w = window.innerWidth;
    for (const flexItem of slideLandscape) {
        flexItem.style.height = w/4 + "px";
    }
    setTimeout("setHeightForLandscapeSlide()", 340);
}
document.addEventListener('DOMContentLoaded', setHeightForLandscapeSlide());

let i = 0;
let interval = 2000;
let image = [];


//Create an array of the images that will cycle through on the main page
image[0] = "slideShow/landscape/gardenOfTheGods.JPG"
image[1] = "slideShow/landscape/nationals.png"
image[2] = "slideShow/landscape/pikespeak.png"
image[3] = "slideShow/landscape/graduation2022.png"
image[4] = "slideShow/landscape/campfire2022.png"
image[5] = "slideShow/landscape/pledgeparty.png"
image[6] = "slideShow/landscape/pledgeparty_1.png"


let imageChange = document.getElementById("slide");
function slideShow(){
    console.log(image[i]);
    imageChange.src = image[i];
    if(i < image.length - 1)
    {
        i++
    }
    else
    {
        i = 0;
    }
    setTimeout("slideShow()", interval);
}

document.addEventListener('DOMContentLoaded', slideShow());

