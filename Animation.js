

//Animation.js

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: "none" });



gsap.config({
  trialWarn: false
});

// Typed.js code
var typed = new Typed('#element', {
    strings: ['HTML', 'CSS', 'JavaScript', '&amp; ReactJs', ' Front End Developer.'],
    typeSpeed: 100,
    loop:true,
});

// // GSAP animation code  for left-inner
var xMove = 50;
gsap.to(".box", {
    
    delay: 0.5,
    rotation :360,
    duration: 1,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
    x: function(i, elem, boxes) {
        return i % 2 === 1 ? -xMove : xMove;
    }
});

// function checkViewportWidth() {
//   if (window.innerWidth <= 576) { // Adjust the width threshold as needed
//       playAnimation();
//   }
// }

// // Initial check on page load
// checkViewportWidth();

// // Recheck on window resize
// window.addEventListener('resize', checkViewportWidth);

// var yMove = 50; // Adjust the value as needed

// gsap.to(".box", {
//     delay: 0.5,
//     // rotation: 360,
//     duration: 1,
//     stagger: 0.4,
//     repeat: -1,
//     yoyo: true,
//     y: function (i, elem, boxes) {
//         return i % 2 === 1 ? -yMove : yMove;
//     },
//     // height:"100px",
//     // width:"100px"
// });



// svg animation
console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});


const pulses = gsap.timeline({
  defaults: {
    duration: 0.05, 
    autoAlpha: 1, 
    scale: 2, 
    transformOrigin: 'center', 
    ease: "elastic(2.5, 1)"
  }})
.to(".ball02, .text01", {}, 0.2) 
.to(".ball03, .text02", {}, 0.33)
.to(".ball04, .text03", {}, 0.46)

const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: 0}, 0)
.to(".ball01", {motionPath: {
  path: ".theLine", 
  align:".theLine",
  alignOrigin: [0.5, 0.5],
}}, 0)
.add(pulses, 0);



//svg timeline
const timelineStart = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    duration: 0.3
  },
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }
});

timelineStart.fromTo(
  "#startText",
  { autoAlpha: 0 },
  { autoAlpha: 1, ease: "power1.inOut" },
  "<" // Position the animation relative to the timeline's start
);

//heading side effect 
gsap.registerPlugin(ScrollTrigger);

const textAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".animate-text",
    start: "top 80%", // Adjust the scroll trigger point
    end: "bottom 20%",
    toggleActions: "play play play reset",
  },
});

textAnimation.fromTo(
  ".animate-text",
  { opacity: 0, x: "-100%" },
  { opacity: 1, x: "0%", duration: 0.8, ease: "power3.out" },
  
);

//paragraph animation effect
const textAnimation2= gsap.timeline({
  scrollTrigger: {
    trigger: ".animate-text2",
    start: "top 80%", // Adjust the scroll trigger point
    end: "bottom 20%",
    toggleActions: "play pause reverse reset",
  },
});

textAnimation.fromTo(
  ".animate-text2",
  { opacity: 0, x: "100%" },
  { opacity: 1, x: "0%", duration: 1.5, ease: "power3.out" },
  
);

//heading project and Achivement

gsap.registerPlugin(ScrollTrigger);

const textAnimatio3= gsap.timeline({
  scrollTrigger: {
    trigger: ".animate-text3",
    start: "top 80%", // Adjust the scroll trigger point
    end: "bottom 20%",
    toggleActions: "play play play reset",
  },
});

textAnimation.fromTo(
  ".animate-text3",
  { opacity: 0, x: "-100%" },
  { opacity: 1, x: "0%", duration: 2.5, ease: "power3.out" },
  
);








// Animation.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Navigation animation
  gsap.from(".nav", { opacity: 0, y: -50, duration: 1, delay: 0.5 });

  // Header animation
  gsap.from(".firstSection", { opacity: 0, y: 50, duration: 1, delay: 1 });

});




// Get references to the image and button elements
const image = document.getElementById('disappearing-image');
const button = document.getElementById('toggle-button');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Toggle the visibility of the image
    if (image.style.display === 'block') {
        image.style.display = 'none'; // Hide the image
    } else {
        image.style.display = 'block'; // Show the image
    }
});



