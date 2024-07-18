gsap.registerPlugin(ScrollTrigger);

var menu = document.querySelector(".menu")
var menuIcon = document.querySelector(".menubar")
var cross = document.querySelector(".menu i")

menuIcon.addEventListener("click", function() {
  gsap.to(".menu",{
    top:0,
    duration: 1,
    ease: "power2.inOut"
  })
})

const tl = gsap.timeline()
cross.addEventListener("click", function() {
  tl.to(".menu",{
    top:"-20%",
    duration: 1,
    ease: "power2.inOut"
  },"back"),
  tl.to(".services",{
    top:"-50%",
    opacity:0,
    duration:1,
  },"back")
})

var service = document.querySelectorAll("#service, #serve")
var services = document.querySelector(".services")
var flag = 0

service.forEach(function(elem){
  var target = elem.childNodes[2] 

  elem.addEventListener("click", function() {
    if(flag == 0){
      gsap.to(".services",{
        top:"16%",
        opacity:1,
        duration:1,
        ease: "power2.inOut"
      })
      flag = 1;
    }else{
      gsap.to(".services",{
        top:"-50%",
        opacity:0,
        duration:1,
      })
      flag = 0;
    }
  
  })
})
