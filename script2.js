gsap.registerPlugin(ScrollTrigger);

var menu = document.querySelector(".menu")
var menuIcon = document.querySelector(".menubar")
var cross = document.querySelector(".menu i")

menuIcon.addEventListener("click", function() {
  gsap.to(".menu",{
    display: "block",
    right:0,
    duration: 0.3,
    ease: "power2.inOut"
  })
})

const tl = gsap.timeline()
cross.addEventListener("click", function() {
  tl.to(".menu",{
    display: "none",
    right:"-30vw",
    duration: 1,
    ease: "power2.inOut"
  },"back"),
  tl.to(".services",{
    top:"-50vw",
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
        top:"14vw",
        opacity:1,
        duration:1,
        ease: "power2.inOut"
      })
      flag = 1;
    }else{
      gsap.to(".services",{
        top:"-50vw",
        opacity:0,
        duration:1,
      })
      flag = 0;
    }
  
  })
})

if (window.innerWidth >= 768) {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".steps",{
      top:"45vw",
      duration:8,
      stagger:10,
      scrollTrigger:{
        trigger: "#process",
        start:"top 0%",
        end: "top -400%",
        scrub: 1,
        pin: true,
        // markers: true,
      }
    })
    console.log("process")
  }
  else{
    gsap.from(".steps",{
      top:"70vw",
      duration:8,
      stagger:10,
      scrollTrigger:{
        trigger: "#process",
        start:"top 0%",
        end: "top -400%",
        scrub: 1,
        pin: true,
        // markers: true,
      }
    })
    console.log("WARNING")
  }

  
