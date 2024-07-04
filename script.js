var menu = document.querySelector(".menu")
var menuIcon = document.querySelector(".nav i")
var cross = document.querySelector(".menu i")

menuIcon.addEventListener("click", function() {
  menu.style.top = 0
})

cross.addEventListener("click", function() {
  menu.style.top = "-10%"
})