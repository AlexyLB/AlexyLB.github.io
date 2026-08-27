/* =========================================================
   ⚙️ FONCTIONNEMENT DU BOOK
   =========================================================

   ⚠️ En principe, tu n'as pas besoin de modifier ce fichier.
   Le contenu reste dans contenu.js.
========================================================= */

const pages = [
    "cinema",
    "video",
    "photo",
    "montage",
    "projects",
    "skills",
    "about"
];


/* =========================================================
   AFFICHER UNE PAGE
========================================================= */

function openPage(page) {

    document.getElementById("home").style.display = "none";

    pages.forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            element.classList.remove("active");
        }
    });

    const selected = document.getElementById(page);

    if (selected) {
        selected.classList.add("active");
        window.location.hash = page;
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   RETOUR ACCUEIL
========================================================= */

function showHome() {

    pages.forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            element.classList.remove("active");
        }
    });

    document.getElementById("home").style.display = "block";

    history.replaceState(
        null,
        "",
        window.location.pathname
    );

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   HEADER AU SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   CHARGEMENT D'UNE PAGE VIA URL
========================================================= */

function checkHash() {

    const hash = window.location.hash.replace("#", "");

    if (pages.includes(hash)) {
        openPage(hash);
    }

}


/* =========================================================
   GÉNÉRATION / MISE À JOUR DES RUBRIQUES
   =========================================================

   Les cartes existent déjà dans index.html afin d'être
   visibles immédiatement.

   Cette fonction :
   - met à jour les titres ;
   - met à jour les descriptions ;
   - masque les rubriques désactivées ;
   - ajoute automatiquement les nouvelles rubriques ;
   - ne supprime plus les cartes existantes.
========================================================= */

function generateCategories() {

    const container = document.getElementById("categories");

    if (!container || !portfolio || !Array.isArray(portfolio.rubriques)) {
        return;
    }

    const existing = new Map();

    container.querySelectorAll("[data-category-id]").forEach(card => {
        existing.set(card.dataset.categoryId, card);
    });

    portfolio.rubriques.forEach(rubrique => {

        let category = existing.get(rubrique.id);

        /* Nouvelle rubrique ajoutée dans contenu.js */
        if (!category) {

            category = document.createElement("div");

            category.className = "category";
            category.dataset.categoryId = rubrique.id;

            category.innerHTML = `
                <div class="category-number"></div>

                <h2></h2>

                <div class="category-bottom">

                    <p class="category-description"></p>

                    <div class="arrow">
                        →
                    </div>

                </div>
            `;

            container.appendChild(category);

        }

        category.style.display =
            rubrique.enabled === false ? "none" : "";

        category.onclick = () => {
            openPage(rubrique.id);
        };

        const number =
            category.querySelector(".category-number");

        const title =
            category.querySelector("h2");

        const description =
            category.querySelector(".category-description");

        if (number) {
            number.textContent = rubrique.numero || "";
        }

        if (title) {
            title.textContent = rubrique.titre || "";
        }

        if (description) {
            description.textContent =
                rubrique.description || "";
        }

    });

}


/* =========================================================
   GÉNÉRATION DES VIDÉOS
========================================================= */

function generateVideos() {

    const container =
        document.getElementById("video-list");

    if (!container) return;

    container.innerHTML = "";

    portfolio.videos.forEach((video, index) => {

        const article =
            document.createElement("article");

        article.className =
            "video-project";

        article.innerHTML = `

            <div class="video-container">

                <video
                    controls
                    playsinline
                    preload="metadata">

                    <source
                        src="${video.url}"
                        type="video/mp4">

                    Votre navigateur ne supporte pas la vidéo.

                </video>

            </div>

            <div class="video-info">

                <div>

                    <div class="page-number">
                        PROJET ${String(index + 1).padStart(2, "0")}
                    </div>

                    <h2>
                        ${video.titre}
                    </h2>

                    <div class="page-number">
                        ${video.annee}
                    </div>

                </div>

                <p>
                    ${video.description}
                </p>

            </div>

        `;

        container.appendChild(article);

    });

}


/* =========================================================
   GÉNÉRATION DES PHOTOS
========================================================= */

function generatePhotos() {

    const container =
        document.getElementById("photo-list");

    if (!container) return;

    container.innerHTML = "";

    portfolio.photos.forEach(photo => {

        if (!photo.image) return;

        const item =
            document.createElement("div");

        item.className =
            "photo-item";

        item.innerHTML = `

            <img
                src="${photo.image}"
                alt="${photo.titre || "Photographie"}"
                loading="lazy">

        `;

        container.appendChild(item);

    });

    if (portfolio.photos.length === 0) {

        container.innerHTML = `

            <div class="photo-placeholder">

                AJOUTE TES PHOTOS DANS contenu.js

            </div>

        `;

    }

}


/* =========================================================
   GÉNÉRATION DES PROJETS
========================================================= */

function generateProjects() {

    const container =
        document.getElementById("project-list");

    if (!container) return;

    container.innerHTML = "";

    portfolio.projets.forEach(projet => {

        const article =
            document.createElement("article");

        article.className =
            "project-card";

        let media = "";

        if (projet.image) {

            media = `

                <img
                    src="${projet.image}"
                    alt="${projet.titre}"
                    loading="lazy">

            `;

        } else {

            media = `

                <div style="
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#444;
                    letter-spacing:3px;
                    font-size:11px;
                ">

                    PROJET

                </div>

            `;

        }

        article.innerHTML = `

            <div class="project-media">

                ${media}

            </div>

            <h3>
                ${projet.titre}
            </h3>

            <p>
                ${projet.annee} — ${projet.description}
            </p>

        `;

        container.appendChild(article);

    });

}


/* =========================================================
   GÉNÉRATION DES COMPÉTENCES
========================================================= */

function generateSkills() {

    const container =
        document.getElementById("skills-list");

    if (!container) return;

    container.innerHTML = "";

    portfolio.competences.forEach(skill => {

        const item =
            document.createElement("div");

        item.className =
            "skill";

        item.innerHTML = `

            <div class="skill-number">
                ${skill.numero}
            </div>

            <h3>
                ${skill.titre}
            </h3>

            <p>
                ${skill.description}
            </p>

        `;

        container.appendChild(item);

    });

}


/* =========================================================
   REMPLISSAGE DES TEXTES
========================================================= */

function generateContent() {

    const logo =
        document.getElementById("logo");

    const heroName =
        document.getElementById("hero-name");

    const heroDescription =
        document.getElementById("hero-description");

    const heroSubdescription =
        document.getElementById("hero-subdescription");


    if (logo) {
        logo.textContent = portfolio.nom;
    }


    if (heroName) {
        heroName.innerHTML =
            `${portfolio.nom}<br><span>Créateur.</span>`;
    }


    if (heroDescription) {
        heroDescription.textContent =
            portfolio.intro;
    }


    if (heroSubdescription) {
        heroSubdescription.textContent =
            portfolio.descriptionAccueil;
    }


    document.getElementById("about-lead").textContent =
        portfolio.aPropos.phrase;

    document.getElementById("about-text-1").textContent =
        portfolio.aPropos.texte1;

    document.getElementById("about-text-2").textContent =
        portfolio.aPropos.texte2;


    const email =
        document.getElementById("email-link");

    if (portfolio.email !== "TON_EMAIL_ICI") {

        email.href =
            `mailto:${portfolio.email}`;

        email.textContent =
            portfolio.email;

    }


    const instagram =
        document.getElementById("instagram-link");

    if (portfolio.instagram !== "TON_INSTAGRAM_ICI") {

        instagram.href =
            portfolio.instagram;

        instagram.textContent =
            "Instagram";

    }


    const youtube =
        document.getElementById("youtube-link");

    if (portfolio.youtube !== "TON_YOUTUBE_ICI") {

        youtube.href =
            portfolio.youtube;

        youtube.textContent =
            "YouTube";

    }

}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * Les rubriques sont déjà présentes dans index.html.
         * Ces fonctions personnalisent ensuite le contenu.
         */

        generateCategories();

        generateVideos();

        generatePhotos();

        generateProjects();

        generateSkills();

        generateContent();

        checkHash();

    }
);/* =========================================================
   ⚙️ FONCTIONNEMENT DU BOOK
   =========================================================

   ⚠️ En principe, tu n'as pas besoin de modifier ce fichier.

========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

const pages = [
    "cinema",
    "video",
    "photo",
    "montage",
    "projects",
    "skills",
    "about"
];


/* =========================================================
   AFFICHER UNE PAGE
========================================================= */

function openPage(page) {

    document.getElementById("home").style.display = "none";

    pages.forEach(id => {

        const element = document.getElementById(id);

        if (element) {
            element.classList.remove("active");
        }

    });


    const selected = document.getElementById(page);

    if (selected) {

        selected.classList.add("active");

        window.location.hash = page;

    }


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================================
   RETOUR ACCUEIL
========================================================= */

function showHome() {

    pages.forEach(id => {

        const element = document.getElementById(id);

        if (element) {
            element.classList.remove("active");
        }

    });


    document.getElementById("home").style.display = "block";


    history.replaceState(
        null,
        "",
        window.location.pathname
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================================
   HEADER AU SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    const header =
        document.getElementById("header");

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   CHARGEMENT D'UNE PAGE VIA URL
========================================================= */

function checkHash() {

    const hash =
        window.location.hash.replace("#", "");

    if (pages.includes(hash)) {

        openPage(hash);

    }

}


window.addEventListener(
    "hashchange",
    checkHash
);


/* =========================================================
   GÉNÉRATION DES RUBRIQUES
========================================================= */

function generateCategories() {

    const container =
        document.getElementById("categories");

    if (!container) return;


    container.innerHTML = "";


    portfolio.rubriques.forEach(rubrique => {

        if (!rubrique.enabled) return;


        const category =
            document.createElement("div");

        category.className = "category";


        category.onclick = () => {

            openPage(rubrique.id);

        };


        category.innerHTML = `

            <div class="category-number">
                ${rubrique.numero}
            </div>

            <h2>
                ${rubrique.titre}
            </h2>

            <div class="category-bottom">

                <p class="category-description">
                    ${rubrique.description}
                </p>

                <div class="arrow">
                    →
                </div>

            </div>

        `;


        container.appendChild(category);

    });

}


/* =========================================================
   GÉNÉRATION DES VIDÉOS
========================================================= */

function generateVideos() {

    const container =
        document.getElementById("video-list");

    if (!container) return;


    container.innerHTML = "";


    portfolio.videos.forEach((video, index) => {

        const article =
            document.createElement("article");

        article.className =
            "video-project";


        article.innerHTML = `

            <div class="video-container">

                <video
                    controls
                    playsinline
                    preload="metadata">

                    <source
                        src="${video.url}"
                        type="video/mp4">

                    Votre navigateur ne supporte pas la vidéo.

                </video>

            </div>

            <div class="video-info">

                <div>

                    <div class="page-number">
                        PROJET ${String(index + 1).padStart(2, "0")}
                    </div>

                    <h2>
                        ${video.titre}
                    </h2>

                    <div class="page-number">
                        ${video.annee}
                    </div>

                </div>

                <p>
                    ${video.description}
                </p>

            </div>

        `;


        container.appendChild(article);

    });

}


/* =========================================================
   GÉNÉRATION DES PHOTOS
========================================================= */

function generatePhotos() {

    const container =
        document.getElementById("photo-list");

    if (!container) return;


    container.innerHTML = "";


    portfolio.photos.forEach(photo => {

        if (!photo.image) return;


        const item =
            document.createElement("div");

        item.className =
            "photo-item";


        item.innerHTML = `

            <img
                src="${photo.image}"
                alt="${photo.titre || "Photographie"}"
                loading="lazy">

        `;


        container.appendChild(item);

    });


    if (portfolio.photos.length === 0) {

        container.innerHTML = `

            <div class="photo-placeholder">

                AJOUTE TES PHOTOS DANS contenu.js

            </div>

        `;

    }

}


/* =========================================================
   GÉNÉRATION DES PROJETS
========================================================= */

function generateProjects() {

    const container =
        document.getElementById("project-list");

    if (!container) return;


    container.innerHTML = "";


    portfolio.projets.forEach(projet => {

        const article =
            document.createElement("article");

        article.className =
            "project-card";


        let media = "";


        if (projet.image) {

            media = `

                <img
                    src="${projet.image}"
                    alt="${projet.titre}"
                    loading="lazy">

            `;

        } else {

            media = `

                <div style="
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#444;
                    letter-spacing:3px;
                    font-size:11px;
                ">

                    PROJET

                </div>

            `;

        }


        article.innerHTML = `

            <div class="project-media">

                ${media}

            </div>

            <h3>
                ${projet.titre}
            </h3>

            <p>
                ${projet.annee} — ${projet.description}
            </p>

        `;


        container.appendChild(article);

    });

}


/* =========================================================
   GÉNÉRATION DES COMPÉTENCES
========================================================= */

function generateSkills() {

    const container =
        document.getElementById("skills-list");

    if (!container) return;


    container.innerHTML = "";


    portfolio.competences.forEach(skill => {

        const item =
            document.createElement("div");

        item.className =
            "skill";


        item.innerHTML = `

            <div class="skill-number">
                ${skill.numero}
            </div>

            <h3>
                ${skill.titre}
            </h3>

            <p>
                ${skill.description}
            </p>

        `;


        container.appendChild(item);

    });

}


/* =========================================================
   REMPLISSAGE DES TEXTES
========================================================= */

function generateContent() {

    document.getElementById("logo").textContent =
        portfolio.nom;


    document.getElementById("hero-name").innerHTML =
        `${portfolio.nom}<br><span>Créateur.</span>`;


    document.getElementById("hero-description").textContent =
        portfolio.intro;


    document.getElementById("hero-subdescription").textContent =
        portfolio.descriptionAccueil;


    document.getElementById("about-lead").textContent =
        portfolio.aPropos.phrase;


    document.getElementById("about-text-1").textContent =
        portfolio.aPropos.texte1;


    document.getElementById("about-text-2").textContent =
        portfolio.aPropos.texte2;


    const email =
        document.getElementById("email-link");

    if (portfolio.email !== "TON_EMAIL_ICI") {

        email.href =
            `mailto:${portfolio.email}`;

        email.textContent =
            portfolio.email;

    }


    const instagram =
        document.getElementById("instagram-link");

    if (portfolio.instagram !== "TON_INSTAGRAM_ICI") {

        instagram.href =
            portfolio.instagram;

        instagram.textContent =
            "Instagram";

    }


    const youtube =
        document.getElementById("youtube-link");

    if (portfolio.youtube !== "TON_YOUTUBE_ICI") {

        youtube.href =
            portfolio.youtube;

        youtube.textContent =
            "YouTube";

    }

}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        generateCategories();

        generateVideos();

        generatePhotos();

        generateProjects();

        generateSkills();

        generateContent();

        checkHash();

    }
);
