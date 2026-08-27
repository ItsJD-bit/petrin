// =========================================================
// RIN — INTERACTION
// Phase 3: Motion & Interaction
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const rinVideo = document.querySelector("#rinVideo");

if (rinVideo) {

    const videoObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    rinVideo.play().catch(() => {});
                } else {
                    rinVideo.pause();
                }

            });

        },
        {
            threshold: 0.5
        }
    );

    videoObserver.observe(rinVideo);
}

    

    const header = document.querySelector(".site-header");
    const heroPhoto = document.querySelector(".hero-photo");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".site-nav a");
    const footerYear = document.querySelector(".site-footer span:last-child");

        // =====================================================
    // BACKGROUND MUSIC
    // =====================================================
// =====================================================
// BACKGROUND MUSIC
// =====================================================

const backgroundMusic =
    document.querySelector("#backgroundMusic");

const musicToggle =
    document.querySelector("#musicToggle");

const musicLabel =
    document.querySelector(".music-label");


if (backgroundMusic && musicToggle) {

    // Default volume
    backgroundMusic.volume = 0.35;


    // -------------------------------------------------
    // Update button based on REAL audio state
    // -------------------------------------------------

    const updateMusicUI = () => {

        const isPlaying =
            !backgroundMusic.paused &&
            !backgroundMusic.ended;


        musicToggle.classList.toggle(
            "is-playing",
            isPlaying
        );


        musicToggle.setAttribute(
            "aria-pressed",
            String(isPlaying)
        );


        musicToggle.setAttribute(
            "aria-label",
            isPlaying
                ? "Turn sound off"
                : "Turn sound on"
        );


        if (musicLabel) {

            musicLabel.textContent =
                isPlaying
                    ? "Sound on"
                    : "Sound off";

        }

    };


    // -------------------------------------------------
    // Play music
    // -------------------------------------------------

    const playMusic = async () => {

        try {

            await backgroundMusic.play();

            updateMusicUI();

        } catch (error) {

            // Browser blocked autoplay
            updateMusicUI();

        }

    };


    // -------------------------------------------------
    // Pause music
    // -------------------------------------------------

    const pauseMusic = () => {

        backgroundMusic.pause();

        updateMusicUI();

    };


    // -------------------------------------------------
    // Toggle
    // -------------------------------------------------

    musicToggle.addEventListener("click", (event) => {

        event.stopPropagation();


        if (backgroundMusic.paused) {

            playMusic();

        } else {

            pauseMusic();

        }

    });


    // -------------------------------------------------
    // Keep UI synchronized with audio
    // -------------------------------------------------

    backgroundMusic.addEventListener(
        "play",
        updateMusicUI
    );

    backgroundMusic.addEventListener(
        "playing",
        updateMusicUI
    );

    backgroundMusic.addEventListener(
        "pause",
        updateMusicUI
    );

    backgroundMusic.addEventListener(
        "ended",
        updateMusicUI
    );


    // -------------------------------------------------
    // Initial state
    // -------------------------------------------------

    updateMusicUI();


    // -------------------------------------------------
    // Try autoplay
    // -------------------------------------------------

    playMusic();


    // -------------------------------------------------
    // Start after first user interaction
    // if autoplay was blocked
    // -------------------------------------------------

  const startAfterInteraction = (event) => {

    // Don't automatically restart music when
    // the user intentionally clicked the music button.

    if (
        event &&
        event.target.closest &&
        event.target.closest("#musicToggle")
    ) {
        return;
    }


    if (backgroundMusic.paused) {

        playMusic();

    }

};


    document.addEventListener(
        "click",
        startAfterInteraction,
        {
            once: true
        }
    );

    document.addEventListener(
        "touchstart",
        startAfterInteraction,
        {
            once: true
        }
    );

    document.addEventListener(
        "keydown",
        startAfterInteraction,
        {
            once: true
        }
    );

}


    // =====================================================
    // CURRENT YEAR
    // =====================================================

    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()}`;
    }


    // =====================================================
    // HEADER SCROLL EFFECT
    // =====================================================

    const updateHeader = () => {

        if (window.scrollY > 40) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }

    };

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


    // =====================================================
    // SCROLL REVEAL
    // =====================================================

    const revealElements = document.querySelectorAll(
    ".section-label, " +
    ".about-text, " +
    ".about-photo, " +
    ".story-content, " +
    ".moments-heading, " +
    ".photo-card, " +
    ".featured-video, " +
    ".closing > *"
);


    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // =====================================================
    // STAGGER PHOTO GRID
    // =====================================================

    document.querySelectorAll(".photo-grid").forEach((grid) => {

        const cards = grid.querySelectorAll(".photo-card");

        cards.forEach((card, index) => {

            card.style.transitionDelay = `${index * 100}ms`;

        });

    });


    // =====================================================
    // ACTIVE NAVIGATION
    // =====================================================

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const currentId = entry.target.id;

                navLinks.forEach((link) => {

                    const linkTarget = link.getAttribute("href");

                    link.classList.toggle(
                        "active",
                        linkTarget === `#${currentId}`
                    );

                });

            });

        },
        {
            threshold: 0.35
        }
    );


    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    // =====================================================
    // HERO PARALLAX
    // =====================================================

    if (heroPhoto && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

        window.addEventListener("scroll", () => {

            const scrollPosition = window.scrollY;

            if (scrollPosition > window.innerHeight) {
                return;
            }

            const movement = scrollPosition * 0.08;

            heroPhoto.style.transform =
                `translateY(${movement}px)`;

        }, {
            passive: true
        });

    }


    // =====================================================
    // SMOOTH NAVIGATION
    // =====================================================

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // =====================================================
    // PHOTO HOVER DEPTH
    // =====================================================

    const photoCards = document.querySelectorAll(".photo-card");

    photoCards.forEach((card) => {

        const image = card.querySelector("img");

        if (!image) {
            return;
        }

        card.addEventListener("mousemove", (event) => {

            if (window.innerWidth <= 800) {
                return;
            }

            const rect = card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;

            image.style.transform =
                `scale(1.045) translate(${x * 8}px, ${y * 8}px)`;

        });

        card.addEventListener("mouseleave", () => {

            image.style.transform = "";

        });

    });

});