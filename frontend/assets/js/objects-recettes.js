const recettes = [
    /* DEBUT SALEE */
    {
        titre: "Bagel Fraîcheur au Saumon",
        image: "../assets/images/bagel.png",
        description: "Parfait pour une pause gourmande et nutritive, ce bagel riche en saveurs vous offre un repas équilibré qui ravit les papilles et nourrit le corps.",
        like: 0,
        categorie: "recettes salées",
        video: "../assets/videos/Recette-Bagel.mp4",
        motsCles: "salée, saumon, bagel",
        /*  ingredients: "dffghkjlk,rsdtfygukh",
        preparation: "vbghjkljhgfdfghyjuikuyhgfdsfghjukilkujhgfdsfghjukilomlikujyhgfdsfghtyuio", */
    },
    {
        titre: "Riz au Poulet et ses Légumes arc en ciel",
        image: "../assets/images/riz-poulet.png",
        description: "Un plat équilibré, riche en saveurs, parfait pour nourrir le corps et ravir les papilles. Cliquez pour transformer votre repas en un voyage gustatif vibrant et énergisant!",
        like: 0,
        categorie: "recettes salées",
        video: "../assets/videos/Riz-au-Poulet-et-ses-Légumes-arc-en-ciel.mp4",
        motsCles: "salée, riz, poulet, legumes",
        /* ingredients: "dffghkjlk,rsdtfygukh",
        preparation: "vbghjkljhgfdfghyjuikuyhgfdsfghjukilkujhgfdsfghjukilomlikujyhgfdsfghtyuio", */
    },
    {
        titre: "Poêlée Gourmande de Légumes Sautés",
        image: "../assets/images/salee/poele-de-legume.png",
        description: "Craquez pour notre Poêlée Gourmande de Légumes Sautés, un mélange coloré et savoureux de légumes frais, cuits à la perfection pour préserver leurs ...",
        like: 0,
        categorie: "salée, poelee, legumes",
        video: "../assets/videos/légumes-poelee.mp4"
    },
    {
        titre: "L'Équilibre : Saumon, Riz et Salade Croquante",
        image: "../assets/images/salee/saumon-riz",
        description: "Ce plat équilibré et nutritif est parfait pour un repas sain, alliant saveur, légèreté et bien-être. Cliquez pour découvrir une option délicieuse qui nourrit ...",
        like: 0,
        categorie: "salee, saumon, riz, salade",
        video: "../assets/videos/saumon-riz-salade.mp4"
    },
    {
        titre: "Bibimbap : Bœuf, Œuf et Salade de Carottes",
        image: "../assets/images/salee/oeuf-boeuf-saldade.png",
        description: "Ce plat équilibré et nutritif est parfait pour un repas sain et rassasiant, qui soutient votre vitalité tout en régalant vos papilles. Cliquez pour découvrir ...",
        like: 0,
        categorie: "bibimbap, boeuf, oeuf, salade, carotte",
        video: "https://www.youtube.com/watch?v=6QQ67F8y2b8"
    },
    {
        titre: "Poke Bowl Tropical : Saumon, Mangue et Avocat",
        image: "../assets/images/salee/pokebowl.png",
        description: "Ce bol nutritif et équilibré est parfait pour un repas sain et coloré, riche en vitamines et en oméga-3",
        like: 0,
        categorie: "poke, bowl, saumon, mangue, avocat",
        video: "https://www.youtube.com/watch?v=ez4zQr6CSnY"
    },
/* FIN SALEE */

    {
        titre: "Spaghetti Carbonara",
        image: "../assets/images/sucrés.png",
        description: "Une délicieuse recette italienne de spaghetti à la carbonara.",
        like: 0,
        categorie: "recettes salés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Spaghetti Carbonara",
        image: "../assets/images/carbonara.jpg",
        description: "Une délicieuse recette italienne de spaghetti à la carbonara.",
        like: 0,
        categorie: "recettes salés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Spaghetti Carbonara",
        image: "../assets/images/carbonara.jpg",
        description: "Une délicieuse recette italienne de spaghetti à la carbonara.",
        like: 0,
        categorie: "recettes salés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Tarte Tatin",
        image: "../assets/images/tarte_tatin.jpg",
        description: "Découvrez la célèbre tarte renversée aux pommes caramélisées.",
        like: 0,
        categorie: "recettes sucrés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Poulet Tikka Masala",
        image: "../assets/images/tikka_masala.jpg",
        description: "Un plat épicé et savoureux venu d'Inde.",
        like: 0,
        categorie: "recettes salés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Smoothie aux Fruits Rouges",
        image: "../assets/images/smoothie_fruits_rouges.jpg",
        description: "Un smoothie rafraîchissant et plein de vitamines.",
        like: 0,
        categorie: "recettes boissons",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Pancakes à la Banane",
        image: "../assets/images/pancakes_banane.jpg",
        description: "De moelleux pancakes à la banane, parfaits pour le petit déjeuner.",
        like: 0,
        categorie: "recettes petit dej",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Salade César",
        image: "../assets/images/salade_cesar.jpg",
        description: "Une salade classique avec poulet grillé, parmesan et croutons.",
        like: 0,
        categorie: "recettes salés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Brownie au Chocolat",
        image: "../assets/images/brownie_chocolat.jpg",
        description: "Un dessert fondant au chocolat pour les gourmands.",
        like: 0,
        categorie: "recettes sucrés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Falafels",
        image: "../assets/images/falafels.jpg",
        description: "De délicieux falafels végétariens, croustillants à l'extérieur et tendres à l'intérieur.",
        like: 0,
        categorie: "recettes veggy",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Houmous",
        image: "../assets/images/houmous.jpg",
        description: "Un dip crémeux à base de pois chiches, parfait pour accompagner vos snacks.",
        like: 0,
        categorie: "recettes snacks",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Matcha Latte",
        image: "../assets/images/matcha_latte.jpg",
        description: "Une boisson chaude à base de thé vert matcha, idéal pour une pause gourmande.",
        like: 0,
        categorie: "recettes boissons",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Crêpes Suzette",
        image: "../assets/images/crepes_suzette.jpg",
        description: "Des crêpes fines servies avec une sauce à l'orange flambée au Grand Marnier.",
        like: 0,
        categorie: "recettes sucrés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Quiche Lorraine",
        image: "../assets/images/quiche_lorraine.jpg",
        description: "Une quiche classique française avec lardons et fromage.",
        like: 0,
        categorie: "recettes salés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Soupe de Tomates",
        image: "../assets/images/soupe_tomates.jpg",
        description: "Une soupe légère et rafraîchissante à base de tomates fraîches.",
        like: 0,
        categorie: "recettes salés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Avocado Toast",
        image: "../assets/images/avocado_toast.jpg",
        description: "Un toast à l'avocat frais, parfait pour un petit déjeuner sain.",
        like: 0,
        categorie: "recettes petit dej",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Granola Maison",
        image: "../assets/images/granola_maison.jpg",
        description: "Un mélange croustillant de noix, graines et flocons d'avoine pour un petit-déjeuner équilibré.",
        like: 0,
        categorie: "recettes petit dej",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Sablés au Beurre",
        image: "../assets/images/sables_beurre.jpg",
        description: "De délicieux petits sablés au beurre, parfaits pour accompagner le thé.",
        like: 0,
        categorie: "recettes sucrés",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Wraps Veggie",
        image: "../assets/images/wraps_veggie.jpg",
        description: "Des wraps garnis de légumes frais et d'une sauce crémeuse.",
        like: 0,
        categorie: "recettes veggy",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Guacamole",
        image: "../assets/images/guacamole.jpg",
        description: "Une purée d'avocats crémeuse, idéale pour tremper vos nachos ou tartiner sur du pain.",
        like: 0,
        categorie: "recettes snacks",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Thé Glacé au Citron",
        image: "../assets/images/the_glace_citron.jpg",
        description: "Un thé glacé rafraîchissant avec une touche de citron.",
        like: 0,
        categorie: "recettes boissons",
        video: "https://www.youtube.com/watch?v=exemple1"
    },
    {
        titre: "Gâteau au Yaourt",
        image: "../assets/images/gateau_yaourt.jpg",
        description: "Un gâteau moelleux et léger, parfait pour le goûter.",
        like: 0,
        categorie: "recettes sucrés",
        video: "https://www.youtube.com/watch?v=exemple1"
    }
];
