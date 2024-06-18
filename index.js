// slide navbar
var slidenav = document.getElementById("slidenav")
var menu = document.getElementById("menu")
var close = document.getElementById("close")
menu.addEventListener("click",function(){
    slidenav.style.left=0
})
close.addEventListener("click",function(){
    slidenav.style.left="-50%"
})
// image slider
// var left = document.getElementById("slider-left-activate");
// var right = document.getElementById("slider-right-activate");
// var slider = document.querySelectorAll(".slider-image-container");

// right.addEventListener("click",function(){
//     slider.style.transform = `translateX(-1500px)`;
// })
// like button
var likebtn = document.querySelector(".like")
let i = 0;
function like() {
    i++;
    if(i % 2==0) {
        this.src = "images/redheart.png"
    } else {
        this.src ="images/blackheart.png"
    }
}
likebtn.addEventListener("click",like)
// offer
var offer = document.querySelector(".offer");
var closeoffer= document.getElementById("closeoffer")
closeoffer.addEventListener("click", function(){
    offer.style.display="none"
})