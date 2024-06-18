// offer
var offer = document.querySelector(".offer");
var closeoffer= document.getElementById("closeoffer")
closeoffer.addEventListener("click", function(){
    offer.style.display="none"
})
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