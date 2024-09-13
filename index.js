gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

document.addEventListener("wheel",function (dets){
  if(dets.offsetY  > 600){
    if(dets.deltaY>0){
      gsap.to("#nav",{
        top:"-100px",
          duration:0.5,
         ease:power0.easeNone,
     
       })
  }
  }
if(dets.deltaY < 0){
  gsap.to("#nav",{
    top:"0px",

  })
}
 })


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var tl = gsap.timeline()
tl.from("#nav svg",{
    // y:-20,
    opacity:0,
    duration:0.5,
    delay:0.4,
 
})
.from("#page1 img",{
    scale:0.5,
    delay:-0.1,
    duration:1,
    borderRadius:50,
    ease: Power4.easeOut

})
.from("#nav",{
    y:-50,
    delay:-0.4,
    opacity:0,
    duration:0.5,
})

var h2Data = document.querySelectorAll("#page2 h2");
h2Data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;     
  });
  elem.innerHTML = clutter;
});
tl.to("#page2 h2 span", {
  color: "#E3E3C4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -5%",
    scrub: 2,
  },
});

gsap.to("#page2 #svg2,#page2 #svg3",{
  left:'-100vw',
  scrollTrigger:{
    trigger:"#page2 #svg2",
    scroller:"#main",
    // markers:true,
    scrub:2,
  }
})


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    // markers: true,
    start: "top 40%",
    end: "top 20%",
    scrub: 3,
  },
});




tl2.to("#page6-left", {
  transform: `translateX(-50%)`,
  duration: 1,
},"page6-anim");
tl2.to("#page6-right", {
  transform: `translateX(60%)`,
  duration: 1,
},"page6-anim");
tl2.from("#page6-center", {
  transform: `translateY(10%)`,
  duration: 1,
  opacity:0,
},"page6-anim");
// ${} template literals

// IIFE - immediately invoked fuction expression 


var h2Dataa = document.querySelectorAll("#page3 h2");
h2Dataa.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;     
  });
  elem.innerHTML = clutter;
});
tl.to("#page3 h2 span", {
  color: "#434B34",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page3 h2 span",
    scroller: "#main",
    // markers: true,
    start: "top 40%",
    end: "top 20%",
    scrub: 1,
  },
});



tl.from("#textt p,#page3 img ,#img2, #img3",{
  y:120,
  opacity:0,
  stagger:1,
  duration:1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    markers: true,
    start: "top -50%",
    end: "top -90%",
    scrub: 2,
  },
})
// document.addEventListener("wheel",function (dets){
//   if(dets.offsetY  > 600){
//     if(dets.deltaY>0){
//       gsap.to("#nav",{
//         top:"-100px",
//           duration:0.5,
//          ease:"power2",
     
//        })
//   }

// if(dets.deltaY < 0){
//   gsap.to("#nav",{
//     top:"0px",

//   })
// }
//  }
// })


gsap.to("#nav svg",{
  transform:"translateY(0%) scale(0.15)",

  scrollTrigger:{
    trigger:"#nav svg",
    scroller:"#main",
    // markers:true,
    start:"top 0%",
    end:"top -10%",
  }

})