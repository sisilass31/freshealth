const recettes = [
    /* DEBUT SALEE */
    {
        titre: "Bagel Fraîcheur au Saumon",
        image: "../assets/images/salee/bagel.png",
        description: "Parfait pour une pause gourmande et nutritive, ce bagel riche en saveurs vous offre un repas équilibré qui ravit les papilles et nourrit le corps.",
        categorie: "salées",
        video: "../assets/videos/Recette-Bagel.mp4",
        motsCles: "salée, saumon, bagel",
        ingredients: [
            { nom: "Pain Bagel", image: "../assets/images/Image-Indrégients/pain-bagel.png" },
            { nom: "Fromage frais", image: "../assets/images/Image-Indrégients/fromage-frais.png" },
            { nom: "Mâche", image: "../assets/images/Image-Indrégients/mache.png" },
            { nom: "Saumon fumé", image: "../assets/images/Image-Indrégients/saumon-fumé.jpeg" }
        ],
        etapes: [
            "Couper les bagels en 2 et les placer dans le grille-pain (ou les toaster au four).",
            "Étalez généreusement le fromage frais sur la moitié inférieure de chaque bagel.",
            "Disposez ensuite les tranches de saumon fumé par-dessus le fromage frais.",
            "Ajoutez quelques feuilles de mâche sur le saumon.",
            "Recouvrez avec la moitié supérieure des bagels.",
            "Servez immédiatement pour profiter du croquant des bagels grillés et de la fraîcheur des ingrédients"
        ]
    },
    {
        titre: "Riz au Poulet et ses Légumes",
        image: "../assets/images/salee/riz-poulet.png",
        description: "Un plat équilibré, riche en saveurs, parfait pour nourrir le corps et ravir les papilles. Cliquez pour transformer votre repas en un voyage gustatif vibrant et énergisant.",
        categorie: "salées",
        video: "../assets/videos/Riz-au-Poulet-et-ses-Légumes-arc-en-ciel.mp4",
        motsCles: "salée, riz, poulet, legumes",
        ingredients: [
            { nom: "Riz basmati", image: "../assets/images/Image-Indrégients/riz-basmati.jpeg" },
            { nom: "Poulet", image: "../assets/images/Image-Indrégients/blanc-poulet.png" },
            { nom: "Poivrons", image: "../assets/images/Image-Indrégients/poivrons.jpeg" },
            { nom: "Carottes", image: "../assets/images/Image-Indrégients/carottes.jpeg" },
            { nom: "Courgettes", image: "../assets/images/Image-Indrégients/courgettes.jpeg" },
            { nom: "Oignon", image: "../assets/images/Image-Indrégients/oignon.jpeg" },
            { nom: "Huile d'olive", image: "../assets/images/Image-Indrégients/huile-olive.jpeg" },
            { nom: "Épices (cumin, paprika)", image: "../assets/images/Image-Indrégients/epices.jpeg" }
        ],
        etapes: [
            "Cuire le riz basmati selon les instructions du paquet.",
            "Dans une poêle, chauffer l'huile d'olive et faire revenir l'oignon jusqu'à ce qu'il soit translucide.",
            "Ajouter le blanc de poulet coupé en morceaux et faire dorer.",
            "Incorporer les poivrons, les carottes et les courgettes coupés en dés.",
            "Ajouter les épices et cuire jusqu'à ce que les légumes soient tendres.",
            "Mélanger le riz cuit avec le poulet et les légumes.",
            "Servir chaud, garni d'herbes fraîches si désiré."
        ]
    },
    {
        titre: "Poêlée Gourmande de Légumes Sautés",
        image: "../assets/images/salee/poele-de-legume.png",
        description: "Craquez pour notre Poêlée Gourmande de Légumes Sautés, un mélange coloré et savoureux de légumes frais, cuits à la perfection pour préserver leurs saveurs naturelles.",
        categorie: "salées",
        video: "../assets/videos/légumes-poelee.mp4",
        motsCles: "salée, légumes, poêlée",
        ingredients: [
            { nom: "Poivrons rouges", image: "../assets/images/Image-Indrégients/poivrons-rouges.jpeg" },
            { nom: "Brocoli", image: "../assets/images/Image-Indrégients/brocoli.jpeg" },
            { nom: "Carottes", image: "../assets/images/Image-Indrégients/carottes.jpeg" },
            { nom: "Haricots verts", image: "../assets/images/Image-Indrégients/haricots-verts.jpeg" },
            { nom: "Oignons", image: "../assets/images/Image-Indrégients/oignons.jpeg" },
            { nom: "Huile d'olive", image: "../assets/images/Image-Indrégients/huile-olive.jpeg" },
            { nom: "Ail", image: "../assets/images/Image-Indrégients/ail.jpeg" },
            { nom: "Sauce soja", image: "../assets/images/Image-Indrégients/sauce-soja.jpeg" }
        ],
        etapes: [
            "Chauffer l'huile d'olive dans une grande poêle.",
            "Ajouter les oignons et l'ail, puis faire revenir jusqu'à ce qu'ils soient dorés.",
            "Ajouter les poivrons, le brocoli, les carottes et les haricots verts.",
            "Faire sauter les légumes jusqu'à ce qu'ils soient tendres mais encore croquants.",
            "Ajouter la sauce soja et mélanger bien.",
            "Servir chaud, comme plat principal ou en accompagnement."
        ]
    },
    {
        titre: "L'Équilibre : Saumon, Riz et Salade Croquante",
        image: "../assets/images/salee/saumon-riz.png",
        description: "Ce plat équilibré et nutritif est parfait pour un repas sain, alliant saveur, légèreté et bien-être. Cliquez pour découvrir une option délicieuse qui nourrit le corps et ravit les papilles.",
        categorie: "salées",
        video: "../assets/videos/saumon-riz-salade.mp4",
        motsCles: "saumon, riz, salade",
        ingredients: [
            { nom: "Filets de saumon", image: "../assets/images/filets-saumon.jpeg" },
            { nom: "Riz complet", image: "../assets/images/riz-complet.jpeg" },
            { nom: "Épinards", image: "../assets/images/epinards.jpeg" },
            { nom: "Tomates cerises", image: "../assets/images/tomates-cerises.jpeg" },
            { nom: "Concombre", image: "../assets/images/concombre.jpeg" },
            { nom: "Avocat", image: "../assets/images/avocat.png" },
            { nom: "Vinaigrette légère", image: "../assets/images/vinaigrette.jpeg" }
        ],
        etapes: [
            "Cuire le riz complet selon les instructions du paquet.",
            "Griller les filets de saumon jusqu'à ce qu'ils soient bien cuits.",
            "Préparer une salade avec les épinards, les tomates cerises, le concombre et l'avocat.",
            "Assaisonner la salade avec une vinaigrette légère.",
            "Servir le saumon sur un lit de riz, accompagné de la salade croquante."
        ]
    },
    {
        titre: "Bibimbap : Bœuf, Œuf et Salade de Carottes",
        image: "../assets/images/salee/oeuf-boeuf-salade.png",
        description: "Un plat sain et rassasiant, idéal pour soutenir votre vitalité tout en régalant vos papilles. Découvrez une recette coréenne pleine de saveurs.",
        categorie: "salées",
        video: "https://www.youtube.com/watch?v=6QQ67F8y2b8",
        motsCles: "bibimbap, boeuf, oeuf, salade, carotte",
        ingredients: [
            { nom: "Riz blanc", image: "../assets/images/Image-Indrégients/riz-blanc.png" },
            { nom: "Bœuf émincé", image: "../assets/images/Image-Indrégients/boeuf-eminçe.png" },
            { nom: "Œuf", image: "../assets/images/Image-Indrégients/oeuf.jpeg" },
            { nom: "Carottes", image: "../assets/images/Image-Indrégients/carottes.jpeg" },
            { nom: "Épinards", image: "../assets/images/Image-Indrégients/epinards.jpeg" },
            { nom: "Germes de soja", image: "../assets/images/Image-Indrégients/germes-soja.jpeg" },
            { nom: "Sauce gochujang (pâte de piment coréenne)", image: "../assets/images/Image-Indrégients/gochujang.jpeg" },
            { nom: "Ail", image: "../assets/images/Image-Indrégients/ail.jpeg" }
        ],
        etapes: [
            "Cuire le riz blanc selon les instructions du paquet.",
            "Faire sauter le bœuf émincé avec de l'ail et un peu de sauce soja jusqu'à ce qu'il soit bien doré.",
            "Blanchir les épinards et les carottes en fines juliennes dans de l'eau bouillante, puis les refroidir rapidement.",
            "Faire frémir les germes de soja dans de l'eau bouillante pendant quelques minutes.",
            "Faire cuire un œuf au plat.",
            "Dans un bol, disposer le riz en base, puis ajouter le bœuf sauté, les légumes préparés et l'œuf sur le dessus.",
            "Servir avec de la sauce gochujang à côté."
        ]
    },
    {
        titre: "Poke Bowl Tropical : Saumon, Mangue et Avocat",
        image: "../assets/images/salee/pokebowl.png",
        description: "Ce bol nutritif et équilibré est parfait pour un repas sain et coloré, riche en vitamines et en oméga-3.",
        categorie: "salées",
        video: "https://www.youtube.com/watch?v=ez4zQr6CSnY",
        motsCles: "poke, saumon, mangue, avocat",
        ingredients: [
            { nom: "Saumon frais", image: "../assets/images/Image-Indrégients/saumon-frais.jpeg" },
            { nom: "Riz à sushi", image: "../assets/images/Image-Indrégients/riz-sushi.jpeg" },
            { nom: "Mangue", image: "../assets/images/Image-Indrégients/mangue.jpeg" },
            { nom: "Avocat", image: "../assets/images/Image-Indrégients/avocat.png" },
            { nom: "Concombre", image: "../assets/images/Image-Indrégients/concombre.jpeg" },
            { nom: "Radis", image: "../assets/images/Image-Indrégients/radis.jpeg" },
            { nom: "Sauce soja", image: "../assets/images/Image-Indrégients/sauce-soja.jpeg" },
            { nom: "Graines de sésame", image: "../assets/images/Image-Indrégients/graines-sesame.jpeg" }
        ],
        etapes: [
            "Cuire le riz à sushi selon les instructions du paquet et laisser refroidir.",
            "Découper le saumon frais en dés.",
            "Couper la mangue, l'avocat et le concombre en dés ou en fines tranches.",
            "Couper les radis en fines rondelles.",
            "Dans un bol, disposer une portion de riz à sushi en base.",
            "Ajouter les dés de saumon, les morceaux de mangue, les tranches d'avocat, le concombre et les radis.",
            "Assaisonner avec de la sauce soja et parsemer de graines de sésame.",
            "Servir immédiatement pour profiter de la fraîcheur des ingrédients."
        ]
    }
    /* FIN SALEE */

];

export default recettes;