/* ==================================================
   SCRIPT.JS - Portfolio Marlin Evrard Yapele
   Gestion des animations et interactions
================================================== */

/* ==========================================
   BOUTON FLOTTANT "RETOUR EN HAUT"
========================================== */

// Récupération du bouton
const backToTop = document.getElementById("backToTop");

// Afficher ou masquer le bouton selon le scroll
window.addEventListener("scroll", () => {

    // Si l'utilisateur a défilé de plus de 300 pixels
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

// Retour fluide vers le haut
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   NAVIGATION FLUIDE
========================================== */

// Sélection de tous les liens internes
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(
            this.getAttribute("href")
        );

        // Vérifie si la section existe
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* ==========================================
   ANIMATION D'APPARITION AU SCROLL
========================================== */

// Création de l'observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

// Sélection de toutes les sections
document.querySelectorAll("section").forEach(section => {

    // Ajout de la classe cachée
    section.classList.add("hidden-section");

    // Observation
    observer.observe(section);

});


/* ==========================================
   EFFET HEADER AU SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }
});


/* ==========================================
   ANIMATION DES CARTES PROJETS
========================================== */
const cards = document.querySelectorAll(".project-card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });
});


/* ==========================================
   ANIMATION DU BOUTON RETOUR HAUT
========================================== */
setInterval(() => {
    if (backToTop.style.display === "flex") {
        backToTop.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-5px)" },
                { transform: "translateY(0px)" }
            ],
            {
                duration: 1000,
                iterations: 1
            }
        );
    }
}, 3000);


/* ==========================================
   MENU MOBILE (si présent)
========================================== */
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


/* ==========================================
   MESSAGE DE CHARGEMENT
========================================== */
window.addEventListener("load", () => {
    console.log(
        "Portfolio Marlin Evrard Yapele chargé avec succès."
    );
});


/* ======================================
   ANIMATION SECTION A PROPOS
====================================== */
// Sélection des paragraphes
const paragraphs = document.querySelectorAll(".about-content p");

// Observer
const aboutObserver =
new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold:0.2
    }
);

// Observation des paragraphes
paragraphs.forEach(p => {
    aboutObserver.observe(p);
});


/* ======================================
   ANIMATION DES PROJETS
====================================== */
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold:0.2
    }
);
// Observer toutes les cartes
projectCards.forEach(card => {
    projectObserver.observe(card);
});
/* ======================================
   EFFET HOVER SUPPLÉMENTAIRE
====================================== */
projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transition =
        "all .4s ease";
    });
});


/* ======================================
   ANIMATION TIMELINE (Parcours Pro)
====================================== */
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold:0.2
    }
);

// Observer chaque expérience
timelineItems.forEach(item => {
    timelineObserver.observe(item);
});


/* ======================================
   ANIMATION CERTIFICATIONS
====================================== */
const certificationCards = document.querySelectorAll(".certification-card");

const certificationObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add(
                    "show"
                );
            }
        });
    },
    {
        threshold:0.2
    }
);

// Observer les cartes
certificationCards.forEach(card => {
    certificationObserver.observe(card);
});


/* ======================================
   ANIMATION FORMULAIRE
====================================== */
const contactForm = document.querySelector(".contact-form");

const contactObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add(
                    "show"
                );
            }
        });
    },
    {
        threshold:0.2
    }
);

// Observer le formulaire
contactObserver.observe(contactForm);
/* ======================================
   VALIDATION SIMPLE
====================================== */
contactForm.addEventListener(
    "submit",

    function(e){
        e.preventDefault();

        alert(
            "Votre message a été envoyé."
        );

        this.reset();
    }
);


/* ======================================
   ANIMATION FOOTER
====================================== */
const footer = document.querySelector(".footer");

const footerObserver =new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                footer.animate(
                    [
                        {
                            opacity:0,
                            transform:
                            "translateY(30px)"
                        },
                        {
                            opacity:1,
                            transform:
                            "translateY(0)"
                        }
                    ],
                    {
                        duration:800,
                        fill:"forwards"
                    }
                );
            }
        });
    },
    {
        threshold:0.2
    }
);

// Observer le footer
footerObserver.observe(footer);
