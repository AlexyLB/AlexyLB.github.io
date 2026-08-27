/* =========================================================
   ⭐ CONTENU DE TON BOOK — ALEXY
   =========================================================

   IMPORTANT : 
   C'est principalement CE fichier que tu modifieras.

   Tu peux modifier :
   - les textes
   - les titres
   - les descriptions
   - les vidéos
   - les photos
   - les compétences
   - tes coordonnées

   ⚠️ Ne touche pas au reste du site si tu n'en as pas besoin.
========================================================= */


const portfolio = {

    /* =====================================================
       👤 INFORMATIONS PERSONNELLES
    ===================================================== */

    nom: "ALEXY",

    sousTitre: "Créateur audiovisuel",

    intro: "Je construis progressivement mon univers autour de l'image, de la vidéo, du cinéma et du montage.",

    descriptionAccueil:
        "Ce book rassemble mes projets, mes expérimentations et les compétences que je développe dans le domaine audiovisuel.",

    email: "Alexylebars62@gmail.com",

    instagram: "TON_INSTAGRAM_ICI",

    youtube: "TON_YOUTUBE_ICI",


    /* =====================================================
       📚 RUBRIQUES
       =====================================================

       Pour changer le nom d'une rubrique :
       modifie simplement "titre".

       Pour supprimer une rubrique :
       enabled: false

       Pour la remettre :
       enabled: true
    ===================================================== */

    rubriques: [

        {
            id: "cinema",
            numero: "01",
            titre: "Cinéma",
            description:
                "Réalisation, narration, mise en scène et projets cinématographiques.",
            enabled: true
        },

        {
            id: "video",
            numero: "02",
            titre: "Vidéo",
            description:
                "Plans, tournages, créations personnelles et expérimentations.",
            enabled: true
        },

        {
            id: "photo",
            numero: "03",
            titre: "Photographie",
            description:
                "Images, cadrage, lumière et recherche d'une esthétique personnelle.",
            enabled: true
        },

        {
            id: "montage",
            numero: "04",
            titre: "Montage",
            description:
                "Montage vidéo, rythme, effets, compositing et post-production.",
            enabled: true
        },

        {
            id: "projects",
            numero: "05",
            titre: "Projets",
            description:
                "Projets personnels, scolaires et expérimentations.",
            enabled: true
        },

        {
            id: "skills",
            numero: "06",
            titre: "Compétences",
            description:
                "Outils, logiciels, techniques et savoir-faire.",
            enabled: true
        },

        {
            id: "about",
            numero: "07",
            titre: "À propos",
            description:
                "Mon parcours, mes objectifs et mon univers créatif.",
            enabled: true
        }

    ],


    /* =====================================================
       🎥 VIDÉOS
       =====================================================

       ⭐ POUR AJOUTER UNE VIDÉO :

       Copie simplement un bloc existant.

       Exemple :

       {
           titre: "Ma nouvelle vidéo",
           annee: "2026",
           description: "Description de ma vidéo.",
           url: "LIEN_CLOUDINARY"
       },

    ===================================================== */

    videos: [

        {
            titre: "Réalisation vidéo",
            annee: "2026",
            description:
                "Une réalisation personnelle autour du mouvement, du cadrage et de l'image.",
            url:
                "https://res.cloudinary.com/lcamfn6z/video/upload/q_auto,f_auto/v1787789301/dji_export_20260704_192510_1783185910380_editor.mp4"
        }

        // ⭐ AJOUTE TES PROCHAINES VIDÉOS ICI

    ],


    /* =====================================================
       🎬 PROJETS CINÉMA
       ===================================================== */

    cinema: [

        {
            titre: "Projet cinéma 01",
            annee: "2026",
            description:
                "Présentation de mon premier projet cinématographique.",
            image: "",
            video: ""
        }

        // ⭐ AJOUTE TES PROCHAINS PROJETS CINÉMA ICI

    ],


    /* =====================================================
       📷 PHOTOGRAPHIES
       =====================================================

       ⭐ Pour ajouter une photo :

       {
           titre: "Nom de la photo",
           image: "LIEN_DE_TON_IMAGE",
           description: "Description"
       },

    ===================================================== */

    photos: [

        // ⭐ AJOUTE TES PHOTOS ICI

    ],


    /* =====================================================
       💡 PROJETS
       ===================================================== */

    projets: [

        {
            titre: "Récit photo",
            annee: "2025",
            description:
                "Ce Récit photo est mon premier projet",
            image: "documents/projet-1.png"
        },

        {
            titre: "Projet 02",
            annee: "2026",
            description:
                "Présentation détaillée du projet.",
            image: ""
        }

        // ⭐ AJOUTE TES PROCHAINS PROJETS ICI

    ],


    /* =====================================================
       🧠 COMPÉTENCES
       ===================================================== */

    competences: [

        {
            numero: "01",
            titre: "Montage vidéo",
            description:
                "Montage, rythme, transitions et construction narrative."
        },

        {
            numero: "02",
            titre: "Réalisation",
            description:
                "Cadrage, mouvements de caméra, mise en scène et direction visuelle."
        },

        {
            numero: "03",
            titre: "After Effects",
            description:
                "Motion design, effets visuels et compositing."
        },

        {
            numero: "04",
            titre: "Photographie",
            description:
                "Composition, lumière, exposition et recherche esthétique."
        }

        // ⭐ AJOUTE TES COMPÉTENCES ICI

    ],


    /* =====================================================
       👤 À PROPOS
       ===================================================== */

    aPropos: {

        phrase:
            "Passionné par l'image, le cinéma et la création audiovisuelle.",

        texte1:
            "Je construis progressivement mon parcours dans l'audiovisuel à travers différents projets, expériences et apprentissages.",

        texte2:
            "Ce portfolio a pour objectif de présenter mon évolution, mes créations et les compétences que je développe au fil du temps."

    }

};
