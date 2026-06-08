// ============================================
// GSAP Animations for Zheng Lin Lei Portfolio
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  (function () {
    const header = document.querySelector("nav");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        header.classList.add("hidden-scroll");
      } else {
        header.classList.remove("hidden-scroll");
      }

      lastScroll = currentScroll;
    });

    const navLinks = document.querySelectorAll(
      'nav a[href^="#"], nav a[href^="./#"]',
    );
    const menuToggle = document.querySelector("nav button.md\\:hidden");
    const navMenu = document.querySelector("nav ul.hidden.md\\:flex");
    let mobileMenuOpen = false;

    function smoothScroll(targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        history.pushState(null, null, targetId);
      }
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let href = link.getAttribute("href");
        let targetId = href.replace("./", "").split("#")[1];
        if (targetId) {
          smoothScroll(`#${targetId}`);
        }
        if (mobileMenuOpen && window.innerWidth < 768) {
          toggleMobileMenu();
        }
      });
    });

    function toggleMobileMenu() {
      if (!navMenu) return;
      mobileMenuOpen = !mobileMenuOpen;
      if (mobileMenuOpen) {
        navMenu.classList.remove("hidden");
        navMenu.classList.add(
          "flex",
          "flex-col",
          "absolute",
          "top-full",
          "left-0",
          "right-0",
          "bg-background/90",
          "backdrop-blur-lg",
          "p-6",
          "gap-4",
          "border-b",
          "border-border",
          "z-50",
        );
        const svg = menuToggle.querySelector("svg");
        if (svg) {
          svg.innerHTML =
            '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
        }
      } else {
        navMenu.classList.add("hidden");
        navMenu.classList.remove(
          "flex",
          "flex-col",
          "absolute",
          "top-full",
          "left-0",
          "right-0",
          "bg-background/90",
          "backdrop-blur-lg",
          "p-6",
          "gap-4",
          "border-b",
          "border-border",
        );
        const svg = menuToggle.querySelector("svg");
        if (svg) {
          svg.innerHTML =
            '<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>';
        }
      }
    }

    if (menuToggle) {
      menuToggle.addEventListener("click", toggleMobileMenu);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        toggleMobileMenu();
      }
    });
  })();

  const cursor = document.querySelector(".cursor");
  if (cursor) {
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
    });
    document.body.style.cursor = "none";
    document.querySelectorAll("button, a, .group").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          duration: 0.2,
          scale: 1.5,
          backgroundColor: "#FF6B35",
          opacity: 0.4,
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          duration: 0.2,
          scale: 1,
          backgroundColor: "#FF6B35",
          opacity: 0.3,
        });
      });
    });
  }

  setTimeout(() => {
    const loading = document.querySelector(".loading");
    if (loading) {
      gsap.to(loading, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => loading.remove(),
      });
    }

    gsap.to("nav", {
      duration: 0.6,
      translateY: 0,
      opacity: 1,
      ease: "power3.out",
      delay: 0.4,
    });

    const heroLetters = document.querySelectorAll(
      "#home .font-heading.text-\\[clamp\\(3\\.5rem\\,12vw\\,10rem\\)\\]",
    );
    gsap.from(heroLetters, {
      duration: 0.8,
      y: 200,
      opacity: 0,
      stagger: 0.05,
      ease: "back.out(1.2)",
      delay: 0.2,
    });
    gsap.from("#home .text-muted-foreground", {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power3.out",
      delay: 0.8,
    });
    gsap.from("#home .flex.items-center.gap-6", {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power3.out",
      delay: 0.9,
    });
    gsap.from("#home .relative.aspect-\\[3\\/4\\]", {
      duration: 1.2,
      x: 100,
      opacity: 0,
      ease: "power3.out",
      scale: 0.9,
      delay: 0.5,
    });
    // Floating arrow animation
    gsap.to("#home .absolute.bottom-8", {
      duration: 1.5,
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1.5,
    });

    // --- About Section Animations ---
    gsap.from("#about h2.font-heading", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      x: 100,
      opacity: 0,
    });
    gsap.from("#about .relative.overflow-hidden", {
      scrollTrigger: {
        trigger: "#about .relative.overflow-hidden",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      x: -80,
      opacity: 0,
      ease: "power3.out",
    });
    gsap.from("#about .space-y-8", {
      scrollTrigger: {
        trigger: "#about .space-y-8",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      x: 80,
      opacity: 0,
      ease: "power3.out",
    });
    // Animate Languages and Background items
    gsap.from("#about .space-y-4 > div", {
      scrollTrigger: {
        trigger: "#about .space-y-4",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.6,
      x: -30,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(0.8)",
    });
    gsap.from("#about .space-y-6 > div", {
      scrollTrigger: {
        trigger: "#about .space-y-6",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.6,
      x: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(0.8)",
    });

    const marquee = document.querySelector(
      ".border-y.overflow-hidden .flex.items-center",
    );
    if (marquee) {
      const marqueeWidth = marquee.scrollWidth / 2;
      gsap.to(marquee, {
        duration: 25,
        x: -marqueeWidth,
        repeat: -1,
        ease: "none",
        modifiers: {
          x: (x) => (parseFloat(x) % -marqueeWidth) + "px",
        },
      });
    }

    // --- Knowledge Section Animations ---
    gsap.from("#knowledge h2.font-heading", {
      scrollTrigger: {
        trigger: "#knowledge",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      x: 100,
      opacity: 0,
    });
    gsap.from("#knowledge .divide-y > div", {
      scrollTrigger: {
        trigger: "#knowledge .divide-y",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
    });

    // --- Projects Section Animations ---
    gsap.from("#projects h2.font-heading", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });
    gsap.from("#projects .grid-cols-1.md\\:grid-cols-2 > a", {
      scrollTrigger: {
        trigger: "#projects .grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.9,
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(0.6)",
      transformOrigin: "center center",
    });

    // --- Experience Section Animations ---
    gsap.from("#experience h2.font-heading", {
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });
    gsap.from("#experience .lg\\:grid-cols-2 > div .space-y-0 > div", {
      scrollTrigger: {
        trigger: "#experience .lg\\:grid-cols-2",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.5,
      x: -30,
      opacity: 0,
      stagger: 0.08,
      ease: "power2.out",
    });
    gsap.from("#experience .flex-wrap.gap-3 > span", {
      scrollTrigger: {
        trigger: "#experience .flex-wrap",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.4,
      scale: 0.9,
      opacity: 0,
      stagger: 0.03,
      ease: "back.out(0.8)",
    });
    gsap.from(
      "#experience .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3 > div",
      {
        scrollTrigger: {
          trigger: "#experience .grid-cols-1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out",
      },
    );

    gsap.from("#contact h2.font-heading, #contact .subtitle", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });
    gsap.from("#contact .space-y-0 > a", {
      scrollTrigger: {
        trigger: "#contact .space-y-0",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.5,
      x: -30,
      opacity: 0,
      stagger: 0.08,
      ease: "power2.out",
    });
    gsap.from("#contact .flex-wrap.gap-3 > span", {
      scrollTrigger: {
        trigger: "#contact .flex-wrap",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      duration: 0.4,
      scale: 0.9,
      opacity: 0,
      stagger: 0.03,
      ease: "back.out(0.8)",
    });
    gsap.from("#insights h2.font-heading", {
      scrollTrigger: {
        trigger: "#insights",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });
    gsap.from("#insights .grid > div", {
      scrollTrigger: {
        trigger: "#insights .grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 40,
      opacity: 0,
    });
    gsap.from("#philosophy .lg\\:col-span-5, #philosophy .lg\\:col-span-7", {
      scrollTrigger: {
        trigger: "#philosophy",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    // ===== MY WORKS GALLERY ANIMATIONS =====
    gsap.from("#my-works h2.font-heading", {
      scrollTrigger: {
        trigger: "#my-works",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });
    gsap.from("#my-works .subtitle", {
      scrollTrigger: {
        trigger: "#my-works",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });
    const workItems = document.querySelectorAll(".work-item");
    if (workItems.length) {
      gsap.from(workItems, {
        scrollTrigger: {
          trigger: "#my-works",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.08,
        ease: "power2.out",
      });

      workItems.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 30;
          const rotateY = (centerX - x) / 30;
          gsap.to(item, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            ease: "power2.out",
            overwrite: true,
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            ease: "elastic.out(1, 0.5)",
          });
        });
      });
    }

    gsap.from("#open-source-deep h2.font-heading", {
      scrollTrigger: {
        trigger: "#open-source-deep",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });
    gsap.from("#open-source-deep .subtitle", {
      scrollTrigger: {
        trigger: "#open-source-deep",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
    });

    const openSourceSection = document.querySelector("#open-source-deep");
    if (openSourceSection) {
      gsap.from("#open-source-deep .grid > div", {
        scrollTrigger: {
          trigger: "#open-source-deep",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        ease: "back.out(0.6)",
      });

      const cards = document.querySelectorAll("#open-source-deep .group");
      cards.forEach((card) => {
        card.style.transformStyle = "preserve-3d";
        card.style.perspective = "1000px";

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 40;
          const rotateY = (centerX - x) / 40;
          gsap.to(card, {
            duration: 0.4,
            rotateX: rotateX,
            rotateY: rotateY,
            ease: "power2.out",
            overwrite: true,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            duration: 0.6,
            rotateX: 0,
            rotateY: 0,
            ease: "elastic.out(1, 0.4)",
          });
        });
      });
    }
  }, 500);

  (function () {
    const playlist = [
      {
        title: "FOR YA",
        artist: "JIANG XIAONI (蒋小呢)",
        cover: "../img/forya.jpeg",
        src: "../audio/forya.mp3",
      },
      {
        title: "NIEBLA",
        artist: "MVRK, SNEAKY WH",
        cover: "../img/niebla.jpeg",
        src: "../audio/niebla.mp3",
      },
      {
        title: "两难",
        artist: "JIA MU (加木)",
        cover: "../img/liangnan.jpeg",
        src: "../audio/liangnan.mp3",
      },
      {
        title: "TU ET MOI",
        artist: "JUDELINE, MC MORENA",
        cover: "../img/tuetmoi.jpeg",
        src: "../audio/tuetmoi.mp3",
      },
      {
        title: "UNO DE ESES GATOS",
        artist: "SEN SENRA, SKY ROMPIENDO",
        cover: "../img/unodeesesgatos.jpeg",
        src: "../audio/unodeesesgatos.mp3",
      },
    ];

    const audio = document.getElementById("nadAudio");
    const playBtn = document.getElementById("nadPlayBtn");
    const prevBtn = document.getElementById("nadPrevBtn");
    const nextBtn = document.getElementById("nadNextBtn");
    const progress = document.getElementById("nadProgress");
    const currentSpan = document.getElementById("nadCurrentTime");
    const durationSpan = document.getElementById("nadDuration");
    const trackTitle = document.getElementById("nadTrackTitle");
    const trackArtist = document.getElementById("nadTrackArtist");
    const coverImg = document.getElementById("nadCoverImg");
    const volumeSlider = document.getElementById("nadVolume");
    const playSvg = document.getElementById("playSvg");
    const pauseSvg = document.getElementById("pauseSvg");

    const volumeIconBtn = document.querySelector(".nadrilleno-volume svg");

    let currentIndex = 0;
    let isPlaying = false;

    function formatTime(sec) {
      if (isNaN(sec)) return "0:00";
      const mins = Math.floor(sec / 60);
      const secs = Math.floor(sec % 60);
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    function updateVolumeIcon(volume) {
      if (!volumeIconBtn) return;

      volumeIconBtn.innerHTML = "";

      const svgNS = "http://www.w3.org/2000/svg";
      let paths = [];

      if (volume === 0) {
        paths.push(
          `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>`,
          `<line x1="23" y1="9" x2="17" y2="15"></line>`,
          `<line x1="17" y1="9" x2="23" y2="15"></line>`,
        );
      } else if (volume < 0.33) {
        paths.push(
          `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>`,
          `<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>`,
        );
      } else if (volume < 0.66) {
        paths.push(
          `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>`,
          `<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>`,
          `<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`,
        );
      } else {
        paths.push(
          `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>`,
          `<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>`,
          `<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`,
          `<path d="M22.6 1.4a15 15 0 0 1 0 21.2"></path>`,
        );
      }

      volumeIconBtn.innerHTML = paths.join("");
      volumeIconBtn.setAttribute("width", "18");
      volumeIconBtn.setAttribute("height", "18");
      volumeIconBtn.setAttribute("viewBox", "0 0 29 24");
      volumeIconBtn.setAttribute("fill", "none");
      volumeIconBtn.setAttribute("stroke", "currentColor");
      volumeIconBtn.setAttribute("stroke-width", "2");
      volumeIconBtn.setAttribute("stroke-linecap", "round");
      volumeIconBtn.setAttribute("stroke-linejoin", "round");
    }

    function loadTrack(index) {
      if (index < 0) index = playlist.length - 1;
      if (index >= playlist.length) index = 0;
      currentIndex = index;
      const track = playlist[currentIndex];
      audio.src = track.src;
      trackTitle.textContent = track.title;
      trackArtist.textContent = track.artist;
      coverImg.src = track.cover;
      progress.value = 0;
      currentSpan.textContent = "0:00";
      durationSpan.textContent = formatTime(audio.duration) || "0:00";
      if (isPlaying) audio.play().catch((e) => console.warn(e));
    }

    function updateProgress() {
      if (!isNaN(audio.duration)) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        currentSpan.textContent = formatTime(audio.currentTime);
      }
    }

    function setUI(playing) {
      isPlaying = playing;
      if (playing) {
        playSvg.style.display = "none";
        pauseSvg.style.display = "inline";
      } else {
        playSvg.style.display = "inline";
        pauseSvg.style.display = "none";
      }
    }

    audio.addEventListener("loadedmetadata", () => {
      durationSpan.textContent = formatTime(audio.duration);
      progress.max = 100;
    });
    audio.addEventListener("play", () => setUI(true));
    audio.addEventListener("pause", () => setUI(false));
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => loadTrack(currentIndex + 1));
    audio.addEventListener("error", () =>
      console.error("Error cargando audio"),
    );

    playBtn.addEventListener("click", () => {
      if (audio.paused) audio.play().catch((e) => console.warn(e));
      else audio.pause();
    });
    prevBtn.addEventListener("click", () => loadTrack(currentIndex - 1));
    nextBtn.addEventListener("click", () => loadTrack(currentIndex + 1));
    progress.addEventListener("input", (e) => {
      if (!isNaN(audio.duration))
        audio.currentTime = (e.target.value / 100) * audio.duration;
    });

    volumeSlider.addEventListener("input", (e) => {
      const vol = parseFloat(e.target.value);
      audio.volume = vol;
      updateVolumeIcon(vol);
    });

    audio.volume = parseFloat(volumeSlider.value);
    updateVolumeIcon(audio.volume);

    loadTrack(0);
    setUI(false);
  })();
});
