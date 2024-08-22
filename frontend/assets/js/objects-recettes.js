/* recettes */
const recettes = [
    {
        titre: "Bagel Fraîcheur au Saumon",
        image: "../assets/images/bagel.png",
        description: "Parfait pour une pause gourmande et nutritive, ce bagel riche en saveurs vous offre un repas équilibré qui ravit les papilles et nourrit le corps.",
        categorie: "recettes salées",
        video: "../assets/videos/Recette-Bagel.mp4",
        motsCles: "salée, saumon, bagel",
        ingredients: [
            { nom: "Pain Bagel", image: "../assets/images/Image Indrégients/pain bagel.jpeg" },
            { nom: "Fromage frais", image: "../assets/images/Image Indrégients/fromage frais.jpeg" },
            { nom: "Mâche", image: "../assets/images/Image Indrégients/mache.jpeg" },
            { nom: "Saumon fumé", image: "../assets/images/Image Indrégients/saumon fumé.jpeg" }
        ],
        etapes: [
            "Couper les bagels en 2 et les placer dans le grille-pain (ou les toaster au four).",
            "Étalez généreusement le fromage frais sur la moitié inférieure de chaque bagel.",
            "Disposez ensuite les tranches de saumon fumé par-dessus le fromage frais.",
            "Ajoutez quelques feuilles de mâche sur le saumon.",
            "Recouvrez avec la moitié supérieure des bagels.",
            "Servez immédiatement pour profiter du croquant des bagels grillés et de la fraîcheur des ingrédients !"
        ]
    },
    {
        titre: "Riz au Poulet et ses Légumes arc en ciel",
        image: "../assets/images/riz-poulet.png",
        description: "Un plat équilibré, riche en saveurs, parfait pour nourrir le corps et ravir les papilles. Cliquez pour transformer votre repas en un voyage gustatif vibrant et énergisant!",
        categorie: "recettes salées",
        video: "../assets/videos/Riz-au-Poulet-et-ses-Légumes-arc-en-ciel.mp4",
        motsCles: "salée, riz, poulet, legumes",
        ingredients: [
            { nom: "Riz", image: "../assets/images/Image Indrégients/riz.jpeg" },
            { nom: "Poulet", image: "../assets/images/Image Indrégients/poulet.jpeg" },
            { nom: "Carottes", image: "../assets/images/Image Indrégients/carottes.jpeg" },
            { nom: "Brocolis", image: "../assets/images/Image Indrégients/brocolis.jpeg" },
            { nom: "Poivrons", image: "../assets/images/Image Indrégients/poivrons.jpeg" }
        ],
        etapes: [
            "Cuire le riz selon les instructions sur l'emballage.",
            "Couper le poulet en morceaux et le faire revenir dans une poêle avec un peu d'huile jusqu'à ce qu'il soit bien doré.",
            "Ajouter les légumes (carottes, brocolis, poivrons) coupés en petits morceaux et cuire jusqu'à ce qu'ils soient tendres.",
            "Mélanger le tout avec le riz cuit et assaisonner selon vos goûts.",
            "Servir chaud, décoré avec quelques herbes fraîches."
        ]
    },
    {
        titre: "Poêlée Gourmande de Légumes Sautés",
        image: "../assets/images/poele-de-legume.png",
        description: "Craquez pour notre Poêlée Gourmande de Légumes Sautés, un mélange coloré et savoureux de légumes frais, cuits à la perfection pour préserver leurs ...",
        categorie: "recettes salées",
        video: "../assets/videos/légumes-poelee.mp4",
        motsCles: "salée, poelee, legumes",
        ingredients: [
            { nom: "Courgettes", image: "../assets/images/Image Indrégients/courgettes.jpeg" },
            { nom: "Poivrons", image: "../assets/images/Image Indrégients/poivrons.jpeg" },
            { nom: "Champignons", image: "../assets/images/Image Indrégients/champignons.jpeg" },
            { nom: "Oignons", image: "../assets/images/Image Indrégients/oignons.jpeg" }
        ],
        etapes: [
            "Couper tous les légumes en morceaux de taille moyenne.",
            "Faire chauffer un peu d'huile dans une grande poêle.",
            "Ajouter les oignons et les faire revenir jusqu'à ce qu'ils soient translucides.",
            "Ajouter ensuite les courgettes, poivrons et champignons, et cuire jusqu'à ce qu'ils soient dorés.",
            "Assaisonner avec du sel, du poivre, et des herbes de Provence.",
            "Servir chaud avec une tranche de pain grillé."
        ]
    },
    {
        titre: "L'Équilibre : Saumon, Riz et Salade Croquante",
        image: "../assets/images/salee/saumon-riz",
        description: "Ce plat équilibré et nutritif est parfait pour un repas sain, alliant saveur, légèreté et bien-être. Cliquez pour découvrir une option délicieuse qui nourrit ...",
        categorie: "recettes salées",
        video: "../assets/videos/saumon-riz-salade.mp4",
        motsCles: "saumon, riz, salade",
        ingredients: [
            { nom: "Saumon", image: "../assets/images/Image Indrégients/saumon.jpeg" },
            { nom: "Riz", image: "../assets/images/Image Indrégients/riz.jpeg" },
            { nom: "Laitue", image: "../assets/images/Image Indrégients/laitue.jpeg" },
            { nom: "Concombres", image: "../assets/images/Image Indrégients/concombres.jpeg" }
        ],
        etapes: [
            "Cuire le riz selon les instructions sur l'emballage.",
            "Griller ou poêler le saumon jusqu'à ce qu'il soit bien cuit.",
            "Préparer une salade avec de la laitue et des concombres coupés en rondelles.",
            "Dresser les assiettes avec le riz, le saumon et la salade.",
            "Ajouter une vinaigrette légère sur la salade et servir."
        ]
    },
    {
        titre: "Bibimbap : Bœuf, Œuf et Salade de Carottes",
        image: "../assets/images/salee/oeuf-boeuf-saldade.png",
        description: "Ce plat équilibré et nutritif est parfait pour un repas sain et rassasiant, qui soutient votre vitalité tout en régalant vos papilles. Cliquez pour découvrir ...",
        categorie: "recettes salées",
        video: "https://www.youtube.com/watch?v=6QQ67F8y2b8",
        motsCles: "bibimbap, boeuf, oeuf, salade, carotte",
        ingredients: [
            { nom: "Bœuf émincé", image: "../assets/images/Image Indrégients/boeuf_emince.jpeg" },
            { nom: "Carottes", image: "../assets/images/Image Indrégients/carottes.jpeg" },
            { nom: "Œufs", image: "../assets/images/Image Indrégients/oeufs.jpeg" },
            { nom: "Riz", image: "../assets/images/Image Indrégients/riz.jpeg" }
        ],
        etapes: [
            "Cuire le riz selon les instructions sur l'emballage.",
            "Faire revenir le bœuf émincé dans une poêle avec un peu d'huile jusqu'à ce qu'il soit bien cuit.",
            "Râper les carottes et les assaisonner avec un peu de vinaigre et de sel.",
            "Dans une autre poêle, cuire les œufs au plat.",
            "Servir le riz dans un bol, ajouter le bœuf, les carottes et poser l'œuf au plat par-dessus."
        ]
    },
    {
        titre: "Poke Bowl Tropical : Saumon, Mangue et Avocat",
        image: "../assets/images/salee/pokebowl.png",
        description: "Ce bol nutritif et équilibré est parfait pour un repas sain et coloré, riche en vitamines et en oméga-3",
        categorie: "recettes salées",
        video: "https://www.youtube.com/watch?v=ez4zQr6CSnY",
        motsCles: "poke, bowl, saumon, mangue, avocat",
        ingredients: [
            { nom: "Saumon frais", image: "../assets/images/Image Indrégients/saumon_frais.jpeg" },
            { nom: "Mangue", image: "../assets/images/Image Indrégients/mangue.jpeg" },
            { nom: "Avocat", image: "../assets/images/Image Indrégients/avocat.jpeg" },
            { nom: "Riz vinaigré", image: "../assets/images/Image Indrégients/riz_vinaigre.jpeg" }
        ],
        etapes: [
            "Cuire le riz vinaigré selon les instructions.",
            "Couper le saumon, la mangue et l'avocat en dés.",
            "Disposer le riz dans un bol, ajouter le saumon, la mangue et l'avocat.",
            "Assaisonner avec de la sauce soja et du sésame.",
            "Servir frais avec des herbes fraîches comme de la coriandre."
        ]
    },
    {
        titre: "Spaghetti Carbonara",
        image: "../assets/images/carbonara.jpg",
        description: "Une délicieuse recette italienne de spaghetti à la carbonara.",
        categorie: "recettes salées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "pâtes, carbonara, italien",
        ingredients: [
            { nom: "Spaghetti", image: "../assets/images/Image Indrégients/spaghetti.jpeg" },
            { nom: "Lardons", image: "../assets/images/Image Indrégients/lardons.jpeg" },
            { nom: "Œufs", image: "../assets/images/Image Indrégients/oeufs.jpeg" },
            { nom: "Parmesan", image: "../assets/images/Image Indrégients/parmesan.jpeg" }
        ],
        etapes: [
            "Cuire les spaghetti dans de l'eau bouillante salée selon les instructions sur l'emballage.",
            "Faire revenir les lardons dans une poêle jusqu'à ce qu'ils soient croustillants.",
            "Dans un bol, mélanger les œufs et le parmesan râpé.",
            "Égoutter les pâtes et les mélanger immédiatement avec les lardons et le mélange d'œufs.",
            "Servir chaud, saupoudré de parmesan supplémentaire."
        ]
    },
    {
        titre: "Tarte Tatin",
        image: "../assets/images/tarte_tatin.jpg",
        description: "Découvrez la célèbre tarte renversée aux pommes caramélisées.",
        categorie: "recettes sucrées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "tarte, pommes, dessert",
        ingredients: [
            { nom: "Pommes", image: "../assets/images/Image Indrégients/pommes.jpeg" },
            { nom: "Sucre", image: "../assets/images/Image Indrégients/sucre.jpeg" },
            { nom: "Beurre", image: "../assets/images/Image Indrégients/beurre.jpeg" },
            { nom: "Pâte feuilletée", image: "../assets/images/Image Indrégients/pate_feuilletee.jpeg" }
        ],
        etapes: [
            "Préchauffer le four à 180°C.",
            "Éplucher et couper les pommes en quartiers.",
            "Faire fondre le sucre et le beurre dans une poêle jusqu'à obtenir un caramel.",
            "Ajouter les pommes dans le caramel et les cuire jusqu'à ce qu'elles soient tendres.",
            "Disposer les pommes dans un moule et recouvrir avec la pâte feuilletée.",
            "Cuire au four pendant 25 minutes, puis démouler et servir tiède."
        ]
    },
    {
        titre: "Poulet Tikka Masala",
        image: "../assets/images/tikka_masala.jpg",
        description: "Un plat épicé et savoureux venu d'Inde.",
        categorie: "recettes salées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "poulet, curry, indien",
        ingredients: [
            { nom: "Poulet", image: "../assets/images/Image Indrégients/poulet.jpeg" },
            { nom: "Yaourt nature", image: "../assets/images/Image Indrégients/yaourt.jpeg" },
            { nom: "Tomates", image: "../assets/images/Image Indrégients/tomates.jpeg" },
            { nom: "Épices Tikka Masala", image: "../assets/images/Image Indrégients/epices_tikka_masala.jpeg" }
        ],
        etapes: [
            "Mariner le poulet dans le yaourt et les épices pendant au moins 1 heure.",
            "Faire revenir le poulet mariné dans une poêle jusqu'à ce qu'il soit doré.",
            "Ajouter les tomates et laisser mijoter jusqu'à ce que la sauce épaississe.",
            "Servir avec du riz basmati ou du naan."
        ]
    },
    {
        titre: "Smoothie aux Fruits Rouges",
        image: "../assets/images/smoothie_fruits_rouges.jpg",
        description: "Un smoothie rafraîchissant et plein de vitamines.",
        categorie: "recettes boissons",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "smoothie, fruits, boisson",
        ingredients: [
            { nom: "Fruits rouges", image: "../assets/images/Image Indrégients/fruits_rouges.jpeg" },
            { nom: "Banane", image: "../assets/images/Image Indrégients/banane.jpeg" },
            { nom: "Lait d'amande", image: "../assets/images/Image Indrégients/lait_amande.jpeg" },
            { nom: "Miel", image: "../assets/images/Image Indrégients/miel.jpeg" }
        ],
        etapes: [
            "Dans un blender, mixer les fruits rouges, la banane, le lait d'amande et le miel.",
            "Mixer jusqu'à obtenir une consistance lisse.",
            "Servir immédiatement dans un verre frais."
        ]
    },
    {
        titre: "Pancakes à la Banane",
        image: "../assets/images/pancakes_banane.jpg",
        description: "De moelleux pancakes à la banane, parfaits pour le petit déjeuner.",
        categorie: "recettes petit dej",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "pancakes, banane, petit déjeuner",
        ingredients: [
            { nom: "Bananes", image: "../assets/images/Image Indrégients/banane.jpeg" },
            { nom: "Farine", image: "../assets/images/Image Indrégients/farine.jpeg" },
            { nom: "Lait", image: "../assets/images/Image Indrégients/lait.jpeg" },
            { nom: "Œufs", image: "../assets/images/Image Indrégients/oeufs.jpeg" }
        ],
        etapes: [
            "Dans un bol, écraser les bananes.",
            "Ajouter la farine, le lait et les œufs, puis mélanger jusqu'à obtenir une pâte lisse.",
            "Faire chauffer une poêle et y verser une louche de pâte pour former un pancake.",
            "Cuire chaque côté jusqu'à ce qu'il soit doré.",
            "Servir chaud avec du sirop d'érable ou des fruits frais."
        ]
    },
    {
        titre: "Salade César",
        image: "../assets/images/salade_cesar.jpg",
        description: "Une salade classique avec poulet grillé, parmesan et croutons.",
        categorie: "recettes salées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "salade, poulet, parmesan",
        ingredients: [
            { nom: "Poulet grillé", image: "../assets/images/Image Indrégients/poulet_grille.jpeg" },
            { nom: "Laitue romaine", image: "../assets/images/Image Indrégients/laitue_romaine.jpeg" },
            { nom: "Croutons", image: "../assets/images/Image Indrégients/croutons.jpeg" },
            { nom: "Parmesan", image: "../assets/images/Image Indrégients/parmesan.jpeg" }
        ],
        etapes: [
            "Couper la laitue romaine et la disposer dans un saladier.",
            "Ajouter le poulet grillé coupé en morceaux.",
            "Parsemer de croutons et de parmesan râpé.",
            "Assaisonner avec une vinaigrette César et mélanger avant de servir."
        ]
    },
    {
        titre: "Brownie au Chocolat",
        image: "../assets/images/brownie_chocolat.jpg",
        description: "Un dessert fondant au chocolat pour les gourmands.",
        categorie: "recettes sucrées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "brownie, chocolat, dessert",
        ingredients: [
            { nom: "Chocolat noir", image: "../assets/images/Image Indrégients/chocolat_noir.jpeg" },
            { nom: "Beurre", image: "../assets/images/Image Indrégients/beurre.jpeg" },
            { nom: "Farine", image: "../assets/images/Image Indrégients/farine.jpeg" },
            { nom: "Sucre", image: "../assets/images/Image Indrégients/sucre.jpeg" }
        ],
        etapes: [
            "Préchauffer le four à 180°C.",
            "Faire fondre le chocolat et le beurre ensemble.",
            "Ajouter le sucre et mélanger.",
            "Incorporer la farine et mélanger jusqu'à obtenir une pâte homogène.",
            "Verser la pâte dans un moule et cuire pendant 20 minutes.",
            "Laisser refroidir avant de découper en carrés."
        ]
    },
    {
        titre: "Falafels",
        image: "../assets/images/falafels.jpg",
        description: "De délicieux falafels végétariens, croustillants à l'extérieur et tendres à l'intérieur.",
        categorie: "recettes végétariennes",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "falafel, pois chiches, végétarien",
        ingredients: [
            { nom: "Pois chiches", image: "../assets/images/Image Indrégients/pois_chiches.jpeg" },
            { nom: "Coriandre", image: "../assets/images/Image Indrégients/coriandre.jpeg" },
            { nom: "Ail", image: "../assets/images/Image Indrégients/ail.jpeg" },
            { nom: "Cumin", image: "../assets/images/Image Indrégients/cumin.jpeg" }
        ],
        etapes: [
            "Mixer les pois chiches, la coriandre, l'ail et le cumin jusqu'à obtenir une pâte.",
            "Former des boulettes avec la pâte obtenue.",
            "Faire chauffer de l'huile dans une poêle et y frire les boulettes jusqu'à ce qu'elles soient dorées.",
            "Servir chaud avec une sauce au yaourt ou du houmous."
        ]
    },
    {
        titre: "Houmous",
        image: "../assets/images/houmous.jpg",
        description: "Un dip crémeux à base de pois chiches, parfait pour accompagner vos snacks.",
        categorie: "recettes snacks",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "houmous, pois chiches, dip",
        ingredients: [
            { nom: "Pois chiches", image: "../assets/images/Image Indrégients/pois_chiches.jpeg" },
            { nom: "Tahini", image: "../assets/images/Image Indrégients/tahini.jpeg" },
            { nom: "Citron", image: "../assets/images/Image Indrégients/citron.jpeg" },
            { nom: "Ail", image: "../assets/images/Image Indrégients/ail.jpeg" }
        ],
        etapes: [
            "Mixer les pois chiches, le tahini, le jus de citron et l'ail jusqu'à obtenir une texture crémeuse.",
            "Ajouter de l'eau ou de l'huile d'olive pour ajuster la consistance.",
            "Servir avec un filet d'huile d'olive et des épices comme le paprika."
        ]
    },
    {
        titre: "Matcha Latte",
        image: "../assets/images/matcha_latte.jpg",
        description: "Une boisson chaude à base de thé vert matcha, idéal pour une pause gourmande.",
        categorie: "recettes boissons",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "matcha, boisson, thé vert",
        ingredients: [
            { nom: "Poudre de matcha", image: "../assets/images/Image Indrégients/matcha.jpeg" },
            { nom: "Lait d'amande", image: "../assets/images/Image Indrégients/lait_amande.jpeg" },
            { nom: "Miel", image: "../assets/images/Image Indrégients/miel.jpeg" }
        ],
        etapes: [
            "Faire chauffer le lait d'amande.",
            "Dans une tasse, mélanger la poudre de matcha avec un peu d'eau chaude pour former une pâte.",
            "Ajouter le lait chaud au mélange de matcha.",
            "Sucrer avec du miel selon votre goût.",
            "Déguster chaud."
        ]
    },
    {
        titre: "Crêpes Suzette",
        image: "../assets/images/crepes_suzette.jpg",
        description: "Des crêpes fines servies avec une sauce à l'orange flambée au Grand Marnier.",
        categorie: "recettes sucrées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "crêpes, orange, dessert",
        ingredients: [
            { nom: "Farine", image: "../assets/images/Image Indrégients/farine.jpeg" },
            { nom: "Œufs", image: "../assets/images/Image Indrégients/oeufs.jpeg" },
            { nom: "Beurre", image: "../assets/images/Image Indrégients/beurre.jpeg" },
            { nom: "Oranges", image: "../assets/images/Image Indrégients/oranges.jpeg" }
        ],
        etapes: [
            "Préparer la pâte à crêpes en mélangeant la farine, les œufs et le lait.",
            "Faire cuire les crêpes dans une poêle beurrée.",
            "Préparer la sauce à l'orange en faisant réduire le jus d'orange avec du sucre.",
            "Ajouter le beurre et le Grand Marnier à la sauce, puis flamber.",
            "Servir les crêpes nappées de sauce à l'orange."
        ]
    },
    {
        titre: "Quiche Lorraine",
        image: "../assets/images/quiche_lorraine.jpg",
        description: "Une quiche classique française avec lardons et fromage.",
        categorie: "recettes salées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "quiche, lardons, fromage",
        ingredients: [
            { nom: "Pâte brisée", image: "../assets/images/Image Indrégients/pate_brisee.jpeg" },
            { nom: "Lardons", image: "../assets/images/Image Indrégients/lardons.jpeg" },
            { nom: "Crème fraîche", image: "../assets/images/Image Indrégients/creme_fraiche.jpeg" },
            { nom: "Fromage râpé", image: "../assets/images/Image Indrégients/fromage_rape.jpeg" }
        ],
        etapes: [
            "Préchauffer le four à 180°C.",
            "Étaler la pâte brisée dans un moule à tarte.",
            "Faire revenir les lardons dans une poêle jusqu'à ce qu'ils soient dorés.",
            "Dans un bol, mélanger la crème fraîche et les œufs, puis ajouter le fromage râpé.",
            "Répartir les lardons sur la pâte, puis verser le mélange crème-œufs-fromage par-dessus.",
            "Cuire au four pendant 30 à 35 minutes, jusqu'à ce que la quiche soit dorée."
        ]
    },
    {
        titre: "Soupe de Tomates",
        image: "../assets/images/soupe_tomates.jpg",
        description: "Une soupe légère et rafraîchissante à base de tomates fraîches.",
        categorie: "recettes salées",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "soupe, tomates, entrée",
        ingredients: [
            { nom: "Tomates", image: "../assets/images/Image Indrégients/tomates.jpeg" },
            { nom: "Oignon", image: "../assets/images/Image Indrégients/oignon.jpeg" },
            { nom: "Basilic", image: "../assets/images/Image Indrégients/basilic.jpeg" },
            { nom: "Ail", image: "../assets/images/Image Indrégients/ail.jpeg" }
        ],
        etapes: [
            "Faire revenir l'oignon et l'ail dans une casserole.",
            "Ajouter les tomates coupées en morceaux et laisser mijoter.",
            "Mixer la soupe jusqu'à obtenir une consistance lisse.",
            "Servir chaud, garni de basilic frais."
        ]
    },
    {
        titre: "Avocado Toast",
        image: "../assets/images/avocado_toast.jpg",
        description: "Un toast à l'avocat frais, parfait pour un petit déjeuner sain.",
        categorie: "recettes petit dej",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "toast, avocat, petit déjeuner",
        ingredients: [
            { nom: "Pain complet", image: "../assets/images/Image Indrégients/pain_complet.jpeg" },
            { nom: "Avocat", image: "../assets/images/Image Indrégients/avocat.jpeg" },
            { nom: "Citron", image: "../assets/images/Image Indrégients/citron.jpeg" },
            { nom: "Œufs pochés", image: "../assets/images/Image Indrégients/oeufs_poches.jpeg" }
        ],
        etapes: [
            "Faire griller les tranches de pain complet.",
            "Écraser l'avocat avec du jus de citron, du sel et du poivre.",
            "Tartiner le mélange d'avocat sur le pain grillé.",
            "Ajouter un œuf poché sur chaque toast.",
            "Servir immédiatement avec des herbes fraîches."
        ]
    },
    {
        titre: "Granola Maison",
        image: "../assets/images/granola_maison.jpg",
        description: "Un granola croustillant fait maison, parfait pour accompagner votre yaourt.",
        categorie: "recettes petit dej",
        video: "https://www.youtube.com/watch?v=exemple1",
        motsCles: "granola, petit déjeuner, fait maison",
        ingredients: [
            { nom: "Flocons d'avoine", image: "../assets/images/Image Indrégients/flocons_avoine.jpeg" },
            { nom: "Noix", image: "../assets/images/Image Indrégients/noix.jpeg" },
            { nom: "Miel", image: "../assets/images/Image Indrégients/miel.jpeg" },
            { nom: "Fruits secs", image: "../assets/images/Image Indrégients/fruits_secs.jpeg" }
        ],
        etapes: [
            "Préchauffer le four à 160°C.",
            "Mélanger les flocons d'avoine, les noix et les fruits secs dans un bol.",
            "Ajouter le miel et mélanger jusqu'à ce que tout soit bien enrobé.",
            "Étaler le mélange sur une plaque de cuisson et cuire pendant 20 minutes, en remuant à mi-cuisson.",
            "Laisser refroidir avant de conserver dans un bocal hermétique."
        ]
    }
];

export default recettes;