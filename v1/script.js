/*



*/

window.onload = function () {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
};
window.addEventListener("beforeunload", function () {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


const menuBtn = document.querySelector(".false-header");
ScrollTrigger.create({
    trigger: "#home",
    start: "bottom 10%",
    onEnter: () => gsap.to(menuBtn, {
      xPercent: 0,
      x: "0",
      duration: 0.6,
    }),
    onLeaveBack: () => gsap.to(menuBtn, {
      xPercent: 100,
      x: "2rem",
      duration: 0.6,
    })
});


// Menu btn
const menuOpenSection = document.querySelector("#open-header");
let menuSectionOpened = false;
menuBtn.addEventListener("click", () => {
    if (!menuSectionOpened) {
        menuOpenSection.classList.add("open");
        menuBtn.classList.add("open");
        document.body.style.overflowY = "hidden";
        menuSectionOpened = true;
    } else {
        menuOpenSection.classList.remove("open");
        menuBtn.classList.remove("open");
        document.body.style.overflowY = "auto";
        menuSectionOpened = false;
    }
});


// Home Section Animation
gsap.to("#home", {
    scale: 0.95,
    transform: "translateY(50px)",
    opacity: 0.8,
    scrollTrigger: {
        trigger: "#home",
        start: "center center",
        end: "bottom top",
        scrub: true,
    }
});

// About Section Animation
gsap.from("#portfolio .who-am-i", {
    y: -120,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio .who-am-i",
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
    }
});

gsap.fromTo("#portfolio .about-pic img",
    {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0
    },
    {
      clipPath: "inset(0 0% 0 0)",
      opacity: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: "#portfolio .about-pic img",
        start: "top 100%",
        end: "bottom 50%",
        scrub: true,
      }
    }
  );

gsap.from("#portfolio .info .info-me", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio .info .info-me",
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
    }
});

gsap.from("#portfolio .info .info-about", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio .info .info-about",
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
    }
});

gsap.from("#portfolio .language-section .language", {
    y: -120,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio .language-section .language",
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
    }
});

gsap.from("#portfolio .background-section .background", {
    y: -120,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio .background-section .background",
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
    }
});



// Language section animations
[".lang-spanish", ".lang-english", ".lang-chinese", ".lang-valencian", ".lang-korean"].forEach((selector, index) => {
    gsap.from(`#portfolio .language-section .info ${selector}`, {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: selector,
            start: "top 60%",
            end: "bottom 50%",
            scrub: true,
        }
    });
}
);

// Background section animations
['.degree-bg', '.erasmus-bg'].forEach((selector, index) => {
    gsap.from(`#portfolio .background-section .info ${selector}`, {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: selector,
            start: "top 60%",
            end: "bottom 50%",
            scrub: true,
        }
    });
}
);

// Knowledge Section Animation

const knowledgeTextReveal = gsap.timeline({
  defaults: { ease: "power3.inOut" },
  scrollTrigger: {
    trigger: "#knowledge",
    start: "top 0%",
    end: "bottom+=100% top",
    scrub: 1.2,
    pin: true
  }
});

const items = [
  ".kn-frontend",
  ".kn-backend",
  ".kn-fullstack",
  ".kn-devops",
  ".kn-cybersecurity",
  ".kn-hardware",
  ".kn-smartcities"
];
gsap.set(items, { y: 100, z: 300, autoAlpha: 0 });

knowledgeTextReveal
.to("#knowledge .title p.first", { 
    y: 0, 
    duration: 1.5 
})
.to("#knowledge .title", {
    top: "20%",
    duration: 1.5 
}, "-=0.5")

.to("#knowledge .kn-progress-bar", {
    x: "50px",
    duration: 1.5 
}, "-=1")

items.forEach((sel, i) => {
  knowledgeTextReveal
    .to(sel, { 
        y: 0,
        z: 0,
        autoAlpha: 1,
        duration: 1.5
    }, "-=0.5")
    .to("#knowledge .kn-progress", {
        height: `${(i + 1) * (100 / items.length)}%`,
        duration: 1.5
    }, "<")
    .to({}, {
        duration: 2.5
    }, ">")
    .to(sel, {
        y: -100,
        z: -250,
        autoAlpha: 0,
        duration: 1.5
    }, ">");
});

knowledgeTextReveal
.to("#knowledge .kn-progress", {
    height: `0%`,
    duration: 1.5
}, "-=0")
.to("#knowledge .kn-progress-bar", {
    x: "-10px",
    duration: 1.5 
}, "-=1")
.to('.kn-x-left', {
    top: '0',
    duration: 3
})
.to('.kn-x-right', {
    top: '0',
    duration: 3
}, "<")
.to("#knowledge .title", {
    top: "50%",
    duration: 1.5 
})
.to("#knowledge p.first", {
    y: "-100%",
    duration: 1.5
})
.to("#knowledge p.last", {
    y: "0",
    duration: 1.5 
})
.to('.kn-x-left', {
    width: '50vw',
    duration: 3
})
.to('.kn-x-right', {
    width: '50vw',
    duration: 3
}, "<")
.to("#knowledge .title", {
    top: "20%",
    duration: 1.5 
}, "-=0");
