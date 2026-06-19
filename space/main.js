// 1. Register the plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// 2. Select the paragraph element
const textContainer = document.querySelector("#type-text p");

// 3. Save the text and clear it from the screen
const originalText = textContainer.innerText;
textContainer.innerText = "";

// 4. Run the scroll-locked animation with PINNING
gsap.to(textContainer, {
  text: originalText,
  ease: "none", 
  scrollTrigger: {
    trigger: ".intro", 
    start: "top top", // Locks the section when its top hits the top of your screen
    end: "+=150%",    // Forces the user to scroll down 150% of the screen height to finish the text
    scrub: 1,         // Smoothly types the text as you scroll
    pin: true         // THE MAGIC: Freezes the section in place
  }
});


gsap.from("#pair1h", {
  y: 400, // This tells it to move DOWN by 400 pixels over the course of the scroll. Use a negative number (e.g., -400) to make it move UP.
  ease: "none", // Keeps the movement speed totally linear and consistent
  scrollTrigger: {
    trigger: ".intro", // The section that controls the scroll
    start: "-90%", // Starts the animation as soon as the top of the section enters the bottom of your screen
    end: "-10%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});
gsap.from("#star", {
  rotate:180, // This tells it to move DOWN by 400 pixels over the course of the scroll. Use a negative number (e.g., -400) to make it move UP.
  ease: "none", // Keeps the movement speed totally linear and consistent
  scrollTrigger: {
    trigger: ".intro", // The section that controls the scroll
    start: "-90%", // Starts the animation as soon as the top of the section enters the bottom of your screen
    end: "-10%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

gsap.from(".glowbox", {
  width: "0px", // This tells it to move DOWN by 400 pixels over the course of the scroll. Use a negative number (e.g., -400) to make it move UP.
  ease: "none", // Keeps the movement speed totally linear and consistent
  scrollTrigger: {
    trigger: ".intro", // The section that controls the scroll
    start: "top top", // Locks the section when its top hits the top of your screen
    end: "+=150%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Grab all the panels and the track container
const panels = gsap.utils.toArray(".panel");
const track = document.querySelector(".wrapper");

const scrollTween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1), 
  ease: "none", 
  scrollTrigger: {
    trigger: ".sidescrool",
    pin: true, 
    scrub: 1,  
    end: () => "+=" + track.offsetWidth 
  }
});




// gsap.from("#blob1", {
//   y: -200,
//   opacity: 0,
//   rotation: -45,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".side1",
//     containerAnimation: scrollTween, // THE MAGIC: Links it to the sideways scroll
//     start: "left center", 
//     toggleActions: "play none none reverse" // Plays forward, reverses when you scroll back
//   }
// });


gsap.from("#blob1", {
   y: -200,
   opacity: 0,
  scrollTrigger: {
    trigger: ".side1", // The section that controls the scroll
    start: "-20%", // Locks the section when its top hits the top of your screen
    end: "+=70%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

gsap.from("#blob1", {
   rotate: 720,
  scrollTrigger: {
    trigger: ".side1", // The section that controls the scroll
    start: "top top", // Locks the section when its top hits the top of your screen
    end: "+=200%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

gsap.from("#blob2", {
      y: 200,
   opacity: 0,
  scrollTrigger: {
    trigger: ".side1", // The section that controls the scroll
    start: "-50%", // Locks the section when its top hits the top of your screen
    end: "+=40%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

gsap.from("#sideh1", {
    x: "-20px",
   opacity: 0,
  scrollTrigger: {
    trigger: ".side1", // The section that controls the scroll
    start: "-50%", // Locks the section when its top hits the top of your screen
    end: "+=50%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});
gsap.from("#sideh2", {
   x: "-20px",
   opacity: 0,
  scrollTrigger: {
    trigger: ".side1", // The section that controls the scroll
    start: "-50%", // Locks the section when its top hits the top of your screen
    end: "+=50%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

gsap.from("#headblob", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".side2", 
        containerAnimation: scrollTween, // THE MAGIC: Links it to the sideways scroll
        start: "-50%", // Animation starts when the LEFT edge of .side2 hits the CENTER of your screen
        end: "-10%", // Ends when .side2 is perfectly centered
        scrub: 2 
    }
});

gsap.from("#headhead", {
    y: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".side2", 
        containerAnimation: scrollTween, // THE MAGIC: Links it to the sideways scroll
        start: "-50%", // Animation starts when the LEFT edge of .side2 hits the CENTER of your screen
        end: "-10%", // Ends when .side2 is perfectly centered
        scrub: 2 
    }
});



gsap.from(".guess", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".side", 
        containerAnimation: scrollTween, // THE MAGIC: Links it to the sideways scroll
        start: "0%", // Animation starts when the LEFT edge of .side2 hits the CENTER of your screen
        end: "10%", // Ends when .side2 is perfectly centered
        scrub: 2 
    }
});



gsap.from("#extratxt1", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".side2", 
        containerAnimation: scrollTween, // THE MAGIC: Links it to the sideways scroll
        start: "-100%", // Animation starts when the LEFT edge of .side2 hits the CENTER of your screen
        end: "-20%", // Ends when .side2 is perfectly centered
        scrub: 2 
    }
});

gsap.from("#innerextratxt1", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".side2", 
        containerAnimation: scrollTween, // THE MAGIC: Links it to the sideways scroll
        start: "-100%", // Animation starts when the LEFT edge of .side2 hits the CENTER of your screen
        end: "-20%", // Ends when .side2 is perfectly centered
        scrub: 2 
    }
});


gsap.from(".cir", {
  rotate: 90,
  scrollTrigger: {
    trigger: ".side1", // The section that controls the scroll
    start: "-20%", // Locks the section when its top hits the top of your screen
    end: "+=100%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

gsap.from("#innterclassthgrow", {
  x:-1800,
  scrollTrigger: {
    trigger: ".side3", // The section that controls the scroll
    containerAnimation: scrollTween, // <-- ADD THIS LINE
    start: "left center", // Changed to horizontal terminology
    end: "right right",  // Changed to horizontal terminology
    scrub: 3 // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
  }
});

gsap.from("#editor", {
  y: 400,
  scrollTrigger: {
    trigger: ".newsec", // The section that controls the scroll
    start: "-90%", // Locks the section when its top hits the top of your screen
    end: "-10%", // Ends the animation when the bottom of the section leaves the top of your screen
    scrub: 2, // Links the movement perfectly to your scrollbar with a 1-second smoothing effect
    // pin: true
  }
});
// ==========================================
// 5. STACKED CARD ANIMATION + FINAL GLOW CARD
// ==========================================

// Grab ALL 5 cards dynamically (including the new .final-card-glow)
const cards = gsap.utils.toArray(".newsection2 > div");

// Push Cards 2, 3, 4, AND the Final Glow Card down off the bottom of the screen
gsap.set(cards.slice(1), { y: window.innerHeight });

// Create a new Timeline to pin the section
const cardTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".newsection2",
    pin: true, 
    scrub: 1,  
    // We increase the distance to * 5 because we have 4 slide animations + 1 zoom animation
    end: () => "+=" + (window.innerHeight * 5)
  }
});

// Loop through the hidden cards and animate them up one by one
cards.slice(1).forEach((card, index) => {
  
  // Slide the new card up from the bottom
  cardTimeline.to(card, {
    y: 0,
    ease: "none"
  });

  // Scale down and fade the card directly underneath it
  cardTimeline.to(cards[index], {
    scale: 0.9,      
    opacity: 0.4,    
    ease: "none"
  }, "<"); 
});

// NEW: After the glow card slides up and sits on top of the stack, 
// we zoom it in massively to consume the entire screen.
cardTimeline.to(".final-card-glow", {
    scale: 15, // Large enough to cover any monitor size
    ease: "power2.in" 
});