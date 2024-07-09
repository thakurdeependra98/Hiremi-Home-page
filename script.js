gsap.registerPlugin(ScrollTrigger);

var menu = document.querySelector(".menu")
var menuIcon = document.querySelector(".menubar")
var cross = document.querySelector(".menu i")

menuIcon.addEventListener("click", function() {
  gsap.to(".menu",{
    y:65,
    duration: 1,
    ease: "power2.inOut"
  })
})

cross.addEventListener("click", function() {
  gsap.to(".menu",{
    y:"-50%",
    duration: 1,
    ease: "power2.inOut"
  })
})

var service = document.querySelectorAll("#service, #serve")
var services = document.querySelector(".services")
var flag = 0

service.forEach(function(elem){
  var target = elem.childNodes[2] 

  elem.addEventListener("click", function() {
    if(flag == 0){
      gsap.to(".services",{
        y:450,
        opacity:1,
        duration:1,
        ease: "power2.inOut"
      })
      flag = 1;
    }else{
      gsap.to(".services",{
        y:-450,
        opacity:0,
        duration:1,
      })
      flag = 0;
    }
  
  })
})
