const recettes = [
    /******************** salées ********************/

    //bagel
    {
        titre: "Bagel Fraîcheur au Saumon",
        image: "../assets/images/salee/bagel.png",
        description:
            "Parfait pour une pause gourmande et nutritive, ce bagel riche en saveurs vous offre un repas équilibré qui ravit les papilles et nourrit le corps.",
        categorie: "salées",
        video: "../assets/videos/Recette-Bagel.mp4",
        motsCles: "salée, saumon, bagel",
        ingredients: [
            {
                nom: "Pain Bagel",
                image: "../assets/images/Image-Indrégients/Bagel/pain-bagel.png",
            },
            {
                nom: "Fromage frais",
                image: "../assets/images/Image-Indrégients/Bagel/fromage-frais.png",
            },
            {
                nom: "Mâche",
                image: "../assets/images/Image-Indrégients/Bagel/mache.png",
            },
            {
                nom: "Saumon fumé",
                image: "../assets/images/Image-Indrégients/Bagel/saumon-fumé.jpeg",
            },
        ],
        etapes: [
            "Couper les bagels en 2 et les placer dans le grille-pain (ou les toaster au four).",
            "Étalez généreusement le fromage frais sur la moitié inférieure de chaque bagel.",
            "Disposez ensuite les tranches de saumon fumé par-dessus le fromage frais.",
            "Ajoutez quelques feuilles de mâche sur le saumon.",
            "Recouvrez avec la moitié supérieure des bagels.",
            "Servez immédiatement pour profiter du croquant des bagels grillés et de la fraîcheur des ingrédients",
        ],
    },
    //riz au poulet et légumes
    {
        titre: "Riz au Poulet et ses Légumes arc en ciel",
        image: "../assets/images/salee/riz-poulet.png",
        description:
            "Un plat équilibré, riche en saveurs, parfait pour nourrir le corps et ravir les papilles. Cliquez pour transformer votre repas en un voyage gustatif vibrant et énergisant!",
 
        categorie: "salées",
        video: "../assets/videos/Riz-au-Poulet-et-ses-Légumes-arc-en-ciel.mp4",
        motsCles: "salée, riz, poulet, legumes",
        ingredients: [
            { nom: "Riz", image: "../assets/images/Image-Indrégients/riz-blanc.png" },
            {
                nom: "Poulet",
                image: "../assets/images/Image-Indrégients/blanc-poulet.png",
            },
            {
                nom: "Carottes",
                image: "../assets/images/Image-Indrégients/carottes.jpeg",
            },
            {
                nom: "Brocolis",
                image: "../assets/images/Image-Indrégients/brocolis.jpeg",
            },
            {
                nom: "Poivrons",
                image: "../assets/images/Image-Indrégients/poivrons.jpeg",
            },
        ],
        etapes: [
            "Cuire le riz selon les instructions sur l'emballage.",
            "Couper le poulet en morceaux et le faire revenir dans une poêle avec un peu d'huile jusqu'à ce qu'il soit bien doré.",
            "Ajouter les légumes (carottes, brocolis, poivrons) coupés en petits morceaux et cuire jusqu'à ce qu'ils soient tendres.",
            "Mélanger le tout avec le riz cuit et assaisonner selon vos goûts.",
            "Servir chaud, décoré avec quelques herbes fraîches.",
        ],
    },
    //poêlée de légumes sautés
    {
        titre: "Poêlée Gourmande de Légumes Sautés",
        image: "../assets/images/salee/poele-de-legume.png",
        description:
            "Craquez pour notre Poêlée Gourmande de Légumes Sautés, un mélange coloré et savoureux de légumes frais, cuits à la perfection pour préserver leurs ...",
 
        categorie: "salées",
        motsCles: "salée, poelee, legumes",
        video: "../assets/videos/légumes-poelee.mp4",
        ingredients: [
            { nom: "Riz", image: "../assets/images/Image-Indrégients/riz-blanc.png" },
            {
                nom: "Poulet",
                image: "../assets/images/Image-Indrégients/blanc-poulet.png",
            },
            {
                nom: "Carottes",
                image: "../assets/images/Image-Indrégients/carottes.jpeg",
            },
            {
                nom: "Brocolis",
                image: "../assets/images/Image-Indrégients/brocolis.jpeg",
            },
            {
                nom: "Poivrons",
                image: "../assets/images/Image-Indrégients/poivrons.jpeg",
            },
        ],
        etapes: [
            "Cuire le riz selon les instructions sur l'emballage.",
            "Couper le poulet en morceaux et le faire revenir dans une poêle avec un peu d'huile jusqu'à ce qu'il soit bien doré.",
            "Ajouter les légumes (carottes, brocolis, poivrons) coupés en petits morceaux et cuire jusqu'à ce qu'ils soient tendres.",
            "Mélanger le tout avec le riz cuit et assaisonner selon vos goûts.",
            "Servir chaud, décoré avec quelques herbes fraîches.",
        ],
    },
    // saumon, riz et salade
    {
        titre: "L'Équilibre : Saumon, Riz et Salade Croquante",
        image: "../assets/images/salee/saumon-riz.png",
        description:
            "Ce plat équilibré et nutritif est parfait pour un repas sain. Cliquez pour découvrir une option délicieuse qui nourrit votre corps et vos papilles.",
 
        categorie: "salées",
        motsCles: "salée, saumon, riz, salade, équilibré, nutritif",
        video: "../assets/videos/saumon-riz-salade.mp4",
        ingredients: [
            {
                nom: "Saumon",
                image: "../assets/images/Image-ingredients/saumon-riz/saumon.jpeg",
            },
            {
                nom: "Riz complet",
                image: "../assets/images/Image-ingredients/saumon-riz/riz.jpeg",
            },
            {
                nom: "Salade verte",
                image: "../assets/images/Image-ingredients/saumon-riz/salade.jpeg",
            },
            {
                nom: "Tomates cerises",
                image: "../assets/images/Image-ingredients/saumon-riz/tomates.jpeg",
            },
            {
                nom: "Vinaigrette maison",
                image: "../assets/images/Image-ingredients/saumon-riz/vinaigrette.jpeg",
            },
        ],
        etapes: [
            "Faites cuire le riz complet selon les instructions du paquet.",
            "Assaisonnez le saumon avec du sel, du poivre, et faites-le griller jusqu'à ce qu'il soit bien cuit.",
            "Préparez une salade en mélangeant la salade verte et les tomates cerises coupées en deux.",
            "Servez le saumon grillé avec le riz complet et la salade.",
            "Ajoutez un filet de vinaigrette maison sur la salade pour plus de saveur.",
        ],
    },
    // bibimbap
    {
        titre: "Bibimbap : Bœuf, Œuf et Salade de Carottes",
        image: "../assets/images/salee/oeuf-boeuf-salade.png",
        description:
            "Ce plat équilibré et nutritif est parfait pour un repas sain et rassasiant, qui soutient votre vitalité tout en régalant vos papilles. Cliquez pour découvrir ...",
 
        categorie: "salées",
        motsCles: "bibimbap, boeuf, oeuf, salade, carotte",
        video: "https://www.youtube.com/watch?v=6QQ67F8y2b8",
        ingredients: [
            { nom: "Riz", image: "../assets/images/Image-Indrégients/riz-blanc.png" },
            {
                nom: "Poulet",
                image: "../assets/images/Image-Indrégients/blanc-poulet.png",
            },
            {
                nom: "Carottes",
                image: "../assets/images/Image-Indrégients/carottes.jpeg",
            },
            {
                nom: "Brocolis",
                image: "../assets/images/Image-Indrégients/brocolis.jpeg",
            },
            {
                nom: "Poivrons",
                image: "../assets/images/Image-Indrégients/poivrons.jpeg",
            },
        ],
        etapes: [
            "Cuire le riz selon les instructions sur l'emballage.",
            "Couper le poulet en morceaux et le faire revenir dans une poêle avec un peu d'huile jusqu'à ce qu'il soit bien doré.",
            "Ajouter les légumes (carottes, brocolis, poivrons) coupés en petits morceaux et cuire jusqu'à ce qu'ils soient tendres.",
            "Mélanger le tout avec le riz cuit et assaisonner selon vos goûts.",
            "Servir chaud, décoré avec quelques herbes fraîches.",
        ],
    },
    // poke bowl
    {
        titre: "Poke Bowl Tropical : Saumon, Mangue et Avocat",
        image: "../assets/images/salee/pokebowl.png",
        description:
            "Ce bol nutritif et équilibré est parfait pour un repas sain et coloré, riche en vitamines et en oméga-3",
 
        categorie: "salées",
        motsCles: "poke, bowl, saumon, mangue, avocat",
        video: "https://www.youtube.com/watch?v=ez4zQr6CSnY",
        ingredients: [
            { nom: "Riz", image: "../assets/images/Image-Indrégients/riz-blanc.png" },
            {
                nom: "Poulet",
                image: "../assets/images/Image-Indrégients/blanc-poulet.png",
            },
            {
                nom: "Carottes",
                image: "../assets/images/Image-Indrégients/carottes.jpeg",
            },
            {
                nom: "Brocolis",
                image: "../assets/images/Image-Indrégients/brocolis.jpeg",
            },
            {
                nom: "Poivrons",
                image: "../assets/images/Image-Indrégients/poivrons.jpeg",
            },
        ],
        etapes: [
            "Cuire le riz selon les instructions sur l'emballage.",
            "Couper le poulet en morceaux et le faire revenir dans une poêle avec un peu d'huile jusqu'à ce qu'il soit bien doré.",
            "Ajouter les légumes (carottes, brocolis, poivrons) coupés en petits morceaux et cuire jusqu'à ce qu'ils soient tendres.",
            "Mélanger le tout avec le riz cuit et assaisonner selon vos goûts.",
            "Servir chaud, décoré avec quelques herbes fraîches.",
        ],
    },

    /******************** salées ********************/

    /******************** sucrés ********************/

    // crêpe
    {
        titre: "Crêpe",
        image: "../assets/images/Sucrée/crepe.png",
        description:
            "Ces crêpes légères et saines sont préparées avec de la farine complète et sans sucre raffiné. Elles sont parfaites brunch gourmand, un goûter, ou une envie de sucré.",
 
        categorie: "sucrés",
        motsCles: "crêpe, sucré",
        video: "../assets/videos/sucrée/crepe.mp4",
        ingredients: [
            {
                nom: "Beurre",
                image: "../assets/images/Image-indrégients/crepe/beurre.jpeg",
            },
            {
                nom: "Farine",
                image: "../assets/images/Image-indrégients/crepe/farine.jpeg",
            },
            {
                nom: "Lait",
                image: "../assets/images/Image-indrégients/crepe/lait.jpeg",
            },
            {
                nom: "Oeuf",
                image: "../assets/images/Image-indrégients/crepe/oeufs.jpeg",
            },
        ],
        etapes: [
            "Mélangez la farine, les flocons d'avoine, et le sel dans un bol.",
            "Ajoutez les œufs, le lait, l'huile de coco, et le sirop d'érable. Mélangez jusqu'à obtenir une pâte lisse.",
            "Laissez reposer la pâte 10 minutes.",
            "Faites chauffer une poêle légèrement huilée, puis versez une louche de pâte pour former une crêpe fine.",
            "Faites cuire 1 à 2 minutes de chaque côté, jusqu'à ce qu'elle soit dorée.",
            "Dégustez avec des fruits frais ou un peu de miel !",
        ],
    },

    // tarte au citron
    {
        titre: "Tarte au citron",
        image: "../assets/images/Sucrée/tarte-citron.png",
        description:
            "Cette tarte au citron healthy est légère et rafraîchissante, avec une base d'amandes et de flocons d'avoine, et une garniture au citron sans sucre raffiné.",
 
        categorie: "sucrés",
        motsCles: "sucré, tarte, citron, tarte au citron",
        video: "../assets/videos/sucrée/tarte-citron.mp4",
        ingredients: [
            {
                nom: "Amande",
                image:
                    "../assets/images/Image-indrégients/tarte-citron/amande-poudre.jpeg",
            },
            {
                nom: "Beurre",
                image: "../assets/images/Image-indrégients/tarte-citron/beurre.jpeg",
            },
            {
                nom: "Citron",
                image: "../assets/images/Image-indrégients/tarte-citron/citron.jpeg",
            },
            {
                nom: "Oeufs",
                image: "../assets/images/Image-indrégients/tarte-citron/oeufs.jpeg",
            },
        ],
        etapes: [
            "Préchauffez le four à 180°C.",
            "Mélangez les ingrédients de la pâte, puis pressez-la au fond d'un moule à tarte. Faites cuire pendant 10 minutes.",
            "Mélangez le jus de citron, le zeste, les œufs, le miel et la fécule de maïs. Faites cuire à feu doux jusqu'à épaississement.",
            "Versez la garniture sur la pâte précuite, puis faites cuire au four pendant 15 minutes.",
            "Laissez refroidir et réfrigérez avant de servir !",
        ],
    },

    //
    {
        titre: "Salade de Fruits Sucrée",
        image: "../assets/images/Sucrée/salade-de-fruits-dhier.png",
        description: "Une salade de fruits frais et sucrés, idéale pour un dessert léger et rafraîchissant ou une collation saine.",
 
        categorie: "sucrés",
        motsCles: "salade de fruits, sucré, dessert, frais, sain",
        video: "https://www.youtube.com/embed/somevideoid",  // Remplacez 'somevideoid' par l'identifiant de votre vidéo si disponible.
        ingredients: [
            { nom: "Fraises", image: "../assets/images/Image-Indrégients/fraises.png" },
            { nom: "Kiwi", image: "../assets/images/Image-Indrégients/kiwi.png" },
            { nom: "Mangue", image: "../assets/images/Image-Indrégients/mangue.png" },
            { nom: "Pomme", image: "../assets/images/Image-Indrégients/pomme.png" },
            { nom: "Raisins", image: "../assets/images/Image-Indrégients/raisins.png" },
            { nom: "Oranges", image: "../assets/images/Image-Indrégients/oranges.png" },
            { nom: "Menthe fraîche (optionnel)", image: "../assets/images/Image-Indrégients/menthe.png" },
            { nom: "Jus de citron", image: "../assets/images/Image-Indrégients/citron.png" },
            { nom: "Miel ou sirop d'agave (optionnel)", image: "../assets/images/Image-Indrégients/miel.png" }
        ],
        etapes: [
            "Laver soigneusement tous les fruits.",
            "Couper les fraises en morceaux, peler et couper le kiwi, la mangue et la pomme en dés.",
            "Couper les raisins en deux si ils sont gros.",
            "Peler et découper les oranges en segments ou en morceaux.",
            "Dans un grand saladier, mélanger tous les fruits coupés.",
            "Ajouter quelques feuilles de menthe fraîche si désiré pour une touche aromatique.",
            "Presser un peu de jus de citron sur la salade de fruits pour éviter l'oxydation et ajouter une touche de fraîcheur.",
            "Si vous souhaitez un peu plus de douceur, ajouter un filet de miel ou de sirop d'agave.",
            "Mélanger délicatement pour bien enrober les fruits de citron et de miel.",
            "Réfrigérer pendant environ 30 minutes avant de servir pour permettre aux saveurs de se mélanger.",
            "Servir frais et déguster immédiatement pour profiter de la fraîcheur des fruits."
        ]
    },    
    /******************** sucrés ********************/

    /******************** petit dej ********************/

    // bowlcake
    {
        titre: "BowlCake chocolat Noisette",
        image: "../assets/images/petitDej/bowlCakeChocoNoisette.png",
        description: "Savourez un délicieux bowlcake au chocolat et noisette, parfait pour un petit déjeuner gourmand.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, bowlcake, chocolat, noisette",
        video: "https://www.youtube.com/embed/-rVUjWhMFas",
        ingredients: [
            { nom: "Farine", image: "../assets/images/Image-Indrégients/farine.png" },
            { nom: "Poudre de noisettes", image: "../assets/images/Image-Indrégients/poudre-noisettes.png" },
            { nom: "Cacao en poudre", image: "../assets/images/Image-Indrégients/cacao.png" },
            { nom: "Œuf", image: "../assets/images/Image-Indrégients/oeuf.png" },
            { nom: "Lait", image: "../assets/images/Image-Indrégients/lait.png" },
            { nom: "Levure chimique", image: "../assets/images/Image-Indrégients/levure.png" },
            { nom: "Sucre", image: "../assets/images/Image-Indrégients/sucre.png" }
        ],
        etapes: [
            "Dans un bol, mélanger la farine, la poudre de noisettes, le cacao en poudre, et la levure chimique.",
            "Ajouter l'œuf et le lait, puis mélanger jusqu'à obtenir une pâte homogène.",
            "Incorporer le sucre selon vos goûts.",
            "Verser la préparation dans un bol allant au micro-ondes.",
            "Cuire au micro-ondes pendant environ 2 à 3 minutes, jusqu'à ce que le bowlcake soit cuit mais encore moelleux à l'intérieur.",
            "Laisser refroidir légèrement avant de déguster."
        ]
    },

    // smoothie bowl acai
    {
        titre: "Smoothie Bowl acai, fruits rouges et Granola",
        image: "../assets/images/petitDej/smoothieBowlBerry.png",
        description: "Un smoothie bowl aux fruits rouges et granola, à base d’açaï pour un petit déjeuner frais et vitaminé.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, smoothie bowl, acai, fruits rouges, granola",
        video: "https://www.youtube.com/embed/P_npUrYPAx8?si=4B31RAY6FHygR83f",
        ingredients: [
            { nom: "Açaï en poudre", image: "../assets/images/Image-Indrégients/acai.png" },
            { nom: "Fruits rouges (frais ou surgelés)", image: "../assets/images/Image-Indrégients/fruits-rouges.png" },
            { nom: "Banane", image: "../assets/images/Image-Indrégients/banane.png" },
            { nom: "Lait ou lait d’amande", image: "../assets/images/Image-Indrégients/lait.png" },
            { nom: "Granola", image: "../assets/images/Image-Indrégients/granola.png" },
            { nom: "Miel (optionnel)", image: "../assets/images/Image-Indrégients/miel.png" }
        ],
        etapes: [
            "Dans un blender, mixer les fruits rouges, la banane, l'açaï en poudre, et le lait jusqu'à obtenir une consistance lisse.",
            "Verser le mélange dans un bol.",
            "Ajouter le granola par-dessus, et décorer avec des fruits frais supplémentaires si désiré.",
            "Ajouter un filet de miel si vous souhaitez plus de douceur.",
            "Servir immédiatement pour profiter de la fraîcheur."
        ]
    },

    // overnight oat chocolat
    {
        titre: "Overnight Oat Chocolat",
        image: "../assets/images/petitDej/overnightOatChocolat.png",
        description: "Un petit déjeuner préparé la veille, ces overnight oats au chocolat sont rapides, faciles et délicieux.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, overnight oats, chocolat, avoine",
        video: "https://www.youtube.com/embed/NsAz5TpGeeg?si=wz7qlnCr443gNyC3",
        ingredients: [
            { nom: "Flocons d'avoine", image: "../assets/images/Image-Indrégients/flocons-avoine.png" },
            { nom: "Lait (ou lait végétal)", image: "../assets/images/Image-Indrégients/lait.png" },
            { nom: "Cacao en poudre", image: "../assets/images/Image-Indrégients/cacao.png" },
            { nom: "Sirop d'érable (ou miel)", image: "../assets/images/Image-Indrégients/sirop-erable.png" },
            { nom: "Graines de chia", image: "../assets/images/Image-Indrégients/graines-chia.png" },
            { nom: "Pépites de chocolat", image: "../assets/images/Image-Indrégients/pepites-chocolat.png" }
        ],
        etapes: [
            "Dans un bol ou un bocal, mélanger les flocons d'avoine, le cacao en poudre et les graines de chia.",
            "Ajouter le lait et le sirop d'érable, puis bien mélanger jusqu'à ce que tous les ingrédients soient incorporés.",
            "Couvrir et réfrigérer pendant la nuit (au moins 6 heures).",
            "Le lendemain matin, sortir du réfrigérateur et ajouter des pépites de chocolat ou d'autres garnitures de votre choix.",
            "Déguster froid ou légèrement réchauffé, selon vos préférences."
        ]
    },

    //avocat toast
    {
        titre: "Avocado toast",
        image: "../assets/images/petitDej/avocadoToast.png",
        description: "Un toast à l’avocat, simple et sain, pour un petit déjeuner rapide et nutritif.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, avocado toast, avocat, sain",
        video: "https://www.youtube.com/embed/44FR8r8Kw2s?si=fIZsHyO5wdGaqwek",
        ingredients: [
            { nom: "Pain complet", image: "../assets/images/Image-Indrégients/pain-complet.png" },
            { nom: "Avocat", image: "../assets/images/Image-Indrégients/avocat.png" },
            { nom: "Citron", image: "../assets/images/Image-Indrégients/citron.png" },
            { nom: "Sel", image: "../assets/images/Image-Indrégients/sel.png" },
            { nom: "Poivre", image: "../assets/images/Image-Indrégients/poivre.png" },
            { nom: "Piment en flocons (optionnel)", image: "../assets/images/Image-Indrégients/piment-flocons.png" }
        ],
        etapes: [
            "Faire griller une tranche de pain complet jusqu'à ce qu'elle soit bien croustillante.",
            "Pendant ce temps, écraser l'avocat dans un bol à l'aide d'une fourchette.",
            "Ajouter un filet de jus de citron dans l'avocat écrasé pour éviter qu'il ne noircisse et pour rehausser la saveur.",
            "Assaisonner l'avocat avec du sel et du poivre selon vos goûts.",
            "Étaler généreusement l'avocat assaisonné sur le pain grillé.",
            "Ajouter des flocons de piment si vous aimez une touche de piquant.",
            "Servir immédiatement pour un petit déjeuner frais et savoureux."
        ]
    },  
    
    // yogurt bowl
    {
        titre: "Yogurt bowl",
        image: "../assets/images/petitDej/yogurtBowl.png",
        description: "Un bol de yaourt garni de fruits et de granola pour un petit déjeuner équilibré.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, yaourt, fruits, granola, équilibré",
        video: "https://www.youtube.com/embed/7TiqxOozqgQ?si=MsgZd8OKMibmzdUR",
        ingredients: [
            { nom: "Yaourt nature", image: "../assets/images/Image-Indrégients/yaourt-nature.png" },
            { nom: "Fruits frais (fraises, bananes, myrtilles)", image: "../assets/images/Image-Indrégients/fruits-frais.png" },
            { nom: "Graines (chia, lin, etc.)", image: "../assets/images/Image-Indrégients/graines.png" }
        ],
        etapes: [
            "Verser le yaourt nature dans un bol.",
            "Ajouter par-dessus les fruits frais coupés en morceaux.",
            "Parsemer de granola pour apporter du croquant.",
            "Ajouter des graines pour un supplément de nutriments et de texture.",
            "Arroser d'un filet de miel ou de sirop d'érable si vous souhaitez plus de douceur.",
            "Déguster immédiatement pour un petit déjeuner frais et équilibré."
        ]
    },   
    
    // pancake banane
    {
        titre: "Pancake banane pecan",
        image: "../assets/images/petitDej/pancakeBananePecan.png",
        description: "Des pancakes moelleux à la banane et aux noix de pécan, parfaits pour un petit déjeuner gourmand et nutritif.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, pancake, banane, pecan",
        video: "https://www.youtube.com/embed/vidéoPancakeBananePecan",
        ingredients: [
            { nom: "Farine", image: "../assets/images/Image-Indrégients/farine.png" },
            { nom: "Banane", image: "../assets/images/Image-Indrégients/banane.png" },
            { nom: "Lait", image: "../assets/images/Image-Indrégients/lait.png" },
            { nom: "Œuf", image: "../assets/images/Image-Indrégients/oeuf.png" },
            { nom: "Levure chimique", image: "../assets/images/Image-Indrégients/levure.png" },
            { nom: "Noix de pécan", image: "../assets/images/Image-Indrégients/noix-pecan.png" },
            { nom: "Sirop d'érable (optionnel)", image: "../assets/images/Image-Indrégients/sirop-erable.png" }
        ],
        etapes: [
            "Dans un grand bol, mélanger la farine et la levure chimique.",
            "Écraser les bananes dans un autre bol, puis ajouter l'œuf et le lait. Bien mélanger.",
            "Incorporer les ingrédients secs dans le mélange de bananes jusqu'à obtenir une pâte homogène.",
            "Ajouter les noix de pécan concassées à la pâte.",
            "Chauffer une poêle à feu moyen et verser une petite louche de pâte pour former un pancake.",
            "Cuire chaque pancake jusqu'à ce que des bulles apparaissent à la surface, puis retourner et cuire l'autre côté jusqu'à ce qu'il soit doré.",
            "Servir chaud avec un filet de sirop d'érable si désiré."
        ]
    },
    
    // pudding chia mangue
    {
        titre: "Pudding Chia Mangue",
        image: "../assets/images/petitDej/puddingMangue.png",
        description: "Un pudding léger et rafraîchissant à base de graines de chia et de mangue, parfait pour un petit déjeuner ou un dessert sain.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, pudding chia, mangue, sain",
        video: "https://www.youtube.com/embed/vidéoPuddingChiaMangue",
        ingredients: [
            { nom: "Graines de chia", image: "../assets/images/Image-Indrégients/graines-chia.png" },
            { nom: "Lait de coco", image: "../assets/images/Image-Indrégients/lait-coco.png" },
            { nom: "Mangue (fraîche ou surgelée)", image: "../assets/images/Image-Indrégients/mangue.png" },
            { nom: "Miel ou sirop d'érable (optionnel)", image: "../assets/images/Image-Indrégients/miel.png" },
            { nom: "Extrait de vanille (optionnel)", image: "../assets/images/Image-Indrégients/vanille.png" }
        ],
        etapes: [
            "Dans un bol, mélanger les graines de chia avec le lait de coco. Ajouter un peu de miel ou de sirop d'érable et de l'extrait de vanille si vous le souhaitez.",
            "Mélanger soigneusement et laisser reposer au réfrigérateur pendant au moins 4 heures ou toute la nuit pour permettre aux graines de chia d'absorber le liquide et de gonfler.",
            "Pendant ce temps, préparer la mangue en la coupant en petits morceaux.",
            "Au moment de servir, remuer le pudding pour vérifier la consistance. Ajouter des morceaux de mangue par-dessus.",
            "Décorer avec des feuilles de menthe ou des graines supplémentaires si désiré.",
            "Déguster frais pour un petit déjeuner ou un dessert délicieux."
        ]
    },    
    
    // pain perdu
    {
        titre: "Pain Perdu Healthy",
        image: "../assets/images/petitDej/painPerdu.png",
        description: "Une version saine du classique pain perdu, parfait pour un petit déjeuner ou un brunch équilibré, avec des ingrédients nutritifs.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, pain perdu, healthy, équilibré",
        video: "https://www.youtube.com/embed/vidéoPainPerduHealthy",
        ingredients: [
            { nom: "Pain complet ou pain de seigle", image: "../assets/images/Image-Indrégients/pain-complet.png" },
            { nom: "Œufs", image: "../assets/images/Image-Indrégients/oeuf.png" },
            { nom: "Lait d'amande ou lait écrémé", image: "../assets/images/Image-Indrégients/lait-amande.png" },
            { nom: "Banane (pour remplacer le sucre)", image: "../assets/images/Image-Indrégients/banane.png" },
            { nom: "Cannelle en poudre", image: "../assets/images/Image-Indrégients/cannelle.png" },
            { nom: "Fruits frais (fraises, myrtilles, etc.)", image: "../assets/images/Image-Indrégients/fruits-frais.png" },
            { nom: "Sirop d'érable (optionnel)", image: "../assets/images/Image-Indrégients/sirop-erable.png" }
        ],
        etapes: [
            "Dans un bol, battre les œufs avec le lait d'amande et la cannelle en poudre.",
            "Écraser une banane et l'ajouter au mélange pour sucrer naturellement.",
            "Tremper les tranches de pain complet dans le mélange d'œufs, en les laissant s'imprégner des deux côtés.",
            "Chauffer une poêle antiadhésive à feu moyen et cuire les tranches de pain jusqu'à ce qu'elles soient dorées et croustillantes des deux côtés.",
            "Servir chaud avec des fruits frais et un filet de sirop d'érable si désiré."
        ]
    },  

    // porridge pomme cannelle
    {
        titre: "Porridge Pomme Cannelle",
        image: "../assets/images/petitDej/porridgeAppleCinnamon.png",
        description: "Un porridge réconfortant à la pomme et à la cannelle, idéal pour un petit déjeuner chaud et nutritif.",
 
        categorie: "petit-dej",
        motsCles: "petit dej, porridge, pomme, cannelle, réconfortant",
        video: "https://www.youtube.com/embed/vidéoPorridgeCannelle",
        ingredients: [
            { nom: "Flocons d'avoine", image: "../assets/images/Image-Indrégients/flocons-avoine.png" },
            { nom: "Lait (ou lait d'amande)", image: "../assets/images/Image-Indrégients/lait.png" },
            { nom: "Pomme", image: "../assets/images/Image-Indrégients/pomme.png" },
            { nom: "Cannelle en poudre", image: "../assets/images/Image-Indrégients/cannelle.png" },
            { nom: "Miel ou sirop d'érable (optionnel)", image: "../assets/images/Image-Indrégients/miel.png" },
            { nom: "Noix ou graines (optionnel)", image: "../assets/images/Image-Indrégients/noix.png" }
        ],
        etapes: [
            "Dans une casserole, combiner les flocons d'avoine avec le lait et porter à ébullition à feu moyen.",
            "Réduire le feu et laisser mijoter en remuant régulièrement jusqu'à ce que les flocons d'avoine absorbent le liquide et deviennent tendres, environ 5-10 minutes.",
            "Pendant ce temps, éplucher et couper la pomme en petits morceaux.",
            "Ajouter les morceaux de pomme au porridge et continuer à cuire jusqu'à ce qu'ils soient tendres, environ 2-3 minutes.",
            "Incorporer la cannelle en poudre et mélanger bien.",
            "Servir chaud avec un filet de miel ou de sirop d'érable si vous le souhaitez, et garnir de noix ou de graines si désiré."
        ]
    },

    /******************** petit dej ********************/

    /******************** veggy ********************/

    // curry de lentilles corail
    {
        titre: "Curry de Lentilles Corail",
        image: "../assets/images/veggy/curryLentillesCorail.png",
        description: "Un curry savoureux et épicé à base de lentilles corail, parfait pour un repas réconfortant.",
 
        categorie: "veggy",
        motsCles: "veggy, curry, lentilles corail, épicé, réconfortant",
        video: "https://www.youtube.com/embed/0LrXnxhH5I0?si=mce7QUq7r2eShCsL",
        ingredients: [
            { nom: "Lentilles corail", image: "../assets/images/Image-Indrégients/lentilles-corail.png" },
            { nom: "Oignon", image: "../assets/images/Image-Indrégients/oignon.png" },
            { nom: "Ail", image: "../assets/images/Image-Indrégients/ail.png" },
            { nom: "Tomates en dés", image: "../assets/images/Image-Indrégients/tomates.png" },
            { nom: "Lait de coco", image: "../assets/images/Image-Indrégients/lait-coco.png" },
            { nom: "Pâte de curry", image: "../assets/images/Image-Indrégients/pate-curry.png" },
            { nom: "Épinards (optionnel)", image: "../assets/images/Image-Indrégients/epinards.png" },
            { nom: "Huile d'olive ou huile de coco", image: "../assets/images/Image-Indrégients/huile.png" }
        ],
        etapes: [
            "Dans une grande casserole, chauffer l'huile d'olive ou l'huile de coco à feu moyen.",
            "Ajouter l'oignon finement haché et faire revenir jusqu'à ce qu'il soit translucide.",
            "Incorporer l'ail émincé et la pâte de curry, et faire sauter pendant 1-2 minutes jusqu'à ce que les arômes se dégagent.",
            "Ajouter les tomates en dés et cuire jusqu'à ce qu'elles soient bien intégrées dans la base du curry.",
            "Ajouter les lentilles corail et bien mélanger.",
            "Verser le lait de coco et ajouter de l'eau si nécessaire pour couvrir les lentilles.",
            "Porter à ébullition, puis réduire le feu et laisser mijoter jusqu'à ce que les lentilles soient tendres et le curry épaissi, environ 20-25 minutes.",
            "Incorporer les épinards si vous en utilisez, et cuire jusqu'à ce qu'ils soient flétris.",
            "Rectifier l'assaisonnement avec du sel et du poivre selon vos préférences.",
            "Servir chaud avec du riz basmati ou du pain naan."
        ]
    },    

    // mediterranean bowl
    {
        titre: "Mediterranean Bowl",
        image: "../assets/images/veggy/mediterraneanBowl.png",
        description: "Un bol méditerranéen frais et coloré, rempli de saveurs et d'ingrédients sains.",
 
        categorie: "veggy",
        motsCles: "veggy, méditerranéen, bol, sain, frais",
        video: "https://www.youtube.com/embed/MRxoI5x5mdc?si=21itjrzLeL-HWuR0",
        ingredients: [
            { nom: "Quinoa", image: "../assets/images/Image-Indrégients/quinoa.png" },
            { nom: "Pois chiches", image: "../assets/images/Image-Indrégients/pois-chiches.png" },
            { nom: "Concombre", image: "../assets/images/Image-Indrégients/concombre.png" },
            { nom: "Tomates cerises", image: "../assets/images/Image-Indrégients/tomates-cerises.png" },
            { nom: "Olives noires", image: "../assets/images/Image-Indrégients/olives-noires.png" },
            { nom: "Feta", image: "../assets/images/Image-Indrégients/feta.png" },
            { nom: "Avocat", image: "../assets/images/Image-Indrégients/avocat.png" },
            { nom: "Citron (pour la vinaigrette)", image: "../assets/images/Image-Indrégients/citron.png" },
            { nom: "Huile d'olive", image: "../assets/images/Image-Indrégients/huile-olive.png" },
            { nom: "Herbes fraîches (menthe, basilic)", image: "../assets/images/Image-Indrégients/herbes.png" }
        ],
        etapes: [
            "Cuire le quinoa selon les instructions sur l'emballage, puis laisser refroidir.",
            "Rincer et égoutter les pois chiches.",
            "Couper le concombre, les tomates cerises et l'avocat en morceaux.",
            "Dans un grand bol, combiner le quinoa, les pois chiches, le concombre, les tomates cerises, les olives noires et la feta émiettée.",
            "Ajouter les morceaux d'avocat.",
            "Préparer la vinaigrette en mélangeant le jus de citron avec de l'huile d'olive, puis assaisonner avec du sel et du poivre.",
            "Verser la vinaigrette sur le bol et mélanger délicatement.",
            "Garnir avec des herbes fraîches comme la menthe ou le basilic.",
            "Servir immédiatement pour un repas frais et équilibré."
        ]
    },    /******************** veggy ********************/

    // soupe tomate rôties basilic
    {
        titre: "Soupe Tomate Rôties Basilic",
        image: "../assets/images/veggy/soupeTomateBasilic.png",
        description: "Une soupe réconfortante à base de tomates rôties et de basilic frais, idéale pour les soirées fraîches.",
 
        categorie: "veggy",
        motsCles: "veggy, soupe, tomate, basilic, réconfortant",
        video: "https://www.youtube.com/embed/qK15KwDBNBU?si=4BkjTrrSDcBIoTbV",
        ingredients: [
            { nom: "Tomates", image: "../assets/images/Image-Indrégients/tomates.png" },
            { nom: "Oignon", image: "../assets/images/Image-Indrégients/oignon.png" },
            { nom: "Ail", image: "../assets/images/Image-Indrégients/ail.png" },
            { nom: "Bouillon de légumes", image: "../assets/images/Image-Indrégients/bouillon-legumes.png" },
            { nom: "Huile d'olive", image: "../assets/images/Image-Indrégients/huile-olive.png" },
            { nom: "Basilic frais", image: "../assets/images/Image-Indrégients/basilic.png" },
            { nom: "Sel et poivre", image: "../assets/images/Image-Indrégients/sel-poivre.png" }
        ],
        etapes: [
            "Préchauffer le four à 200°C (400°F).",
            "Couper les tomates en deux et les disposer sur une plaque de cuisson. Ajouter l'oignon et l'ail en quartiers.",
            "Arroser d'huile d'olive et assaisonner avec du sel et du poivre.",
            "Rôtir au four pendant environ 30-35 minutes, jusqu'à ce que les tomates soient bien caramélisées.",
            "Transférer les tomates, l'oignon et l'ail dans une grande casserole. Ajouter le bouillon de légumes.",
            "Porter à ébullition, puis réduire le feu et laisser mijoter pendant 10 minutes.",
            "Utiliser un mixeur plongeant pour réduire la soupe en purée lisse. Vous pouvez aussi utiliser un mixeur traditionnel en procédant par lots.",
            "Incorporer des feuilles de basilic frais dans la soupe et mélanger.",
            "Rectifier l'assaisonnement avec du sel et du poivre selon vos préférences.",
            "Servir chaud, garni de feuilles de basilic frais si désiré."
        ]
    },

    // risotto aux champignons
    {
        titre: "Risotto aux Champignons",
        image: "../assets/images/veggy/RisottoChampignons.png",
        description: "Un risotto crémeux et savoureux aux champignons, parfait pour un dîner végétarien gourmand.",
        categorie: "veggy",
        motsCles: "veggy, risotto, champignons, crémeux, végétarien",
        video: "https://www.youtube.com/embed/O_efDm0-f7Q?si=yW6-VBDRZJ7_3oOx",
        ingredients: [
            { nom: "Riz arborio", image: "../assets/images/Image-Indrégients/riz-arborio.png" },
            { nom: "Champignons (de votre choix, ex: champignons de Paris, shiitake)", image: "../assets/images/Image-Indrégients/champignons.png" },
            { nom: "Oignon", image: "../assets/images/Image-Indrégients/oignon.png" },
            { nom: "Ail", image: "../assets/images/Image-Indrégients/ail.png" },
            { nom: "Bouillon de légumes", image: "../assets/images/Image-Indrégients/bouillon-legumes.png" },
            { nom: "Parmesan râpé", image: "../assets/images/Image-Indrégients/parmesan.png" },
            { nom: "Vin blanc (optionnel)", image: "../assets/images/Image-Indrégients/vin-blanc.png" },
            { nom: "Huile d'olive ou beurre", image: "../assets/images/Image-Indrégients/huile-beurre.png" },
            { nom: "Persil frais (pour garnir)", image: "../assets/images/Image-Indrégients/persil.png" }
        ],
        etapes: [
            "Chauffer le bouillon de légumes dans une casserole à feu doux pour qu'il reste chaud.",
            "Dans une grande poêle ou une casserole, chauffer l'huile d'olive ou le beurre à feu moyen.",
            "Ajouter l'oignon finement haché et faire revenir jusqu'à ce qu'il soit translucide.",
            "Incorporer l'ail émincé et cuire pendant 1 minute.",
            "Ajouter les champignons tranchés et cuire jusqu'à ce qu'ils soient dorés et tendres.",
            "Ajouter le riz arborio et cuire en remuant pendant environ 2 minutes, jusqu'à ce qu'il devienne translucide.",
            "Si vous utilisez du vin blanc, ajoutez-le maintenant et laissez-le réduire presque entièrement.",
            "Commencer à ajouter le bouillon chaud, une louche à la fois, en remuant constamment. Attendre que le liquide soit presque complètement absorbé avant d'ajouter la louche suivante.",
            "Continuer à ajouter le bouillon et à remuer pendant environ 18-20 minutes, jusqu'à ce que le riz soit crémeux et al dente.",
            "Incorporer le parmesan râpé et ajuster l'assaisonnement avec du sel et du poivre selon vos goûts.",
            "Garnir de persil frais haché avant de servir.",
            "Servir immédiatement pour profiter de la texture crémeuse du risotto."
        ]
    },    

    // pizza aux courgettes
    {
        titre: "Pizza aux Courgettes",
        image: "../assets/images/veggy/PizzaCourgette.png",
        description: "Une pizza légère et délicieuse garnie de courgettes fraîches, idéale pour un repas estival.",
 
        categorie: "veggy",
        motsCles: "veggy, pizza, courgettes, légère, estivale",
        video: "https://www.youtube.com/embed/hMNTffSZgdY?si=x7TE83evQXmjTXCY&start=5",
        ingredients: [
            { nom: "Pâte à pizza (maison ou prête à l'emploi)", image: "../assets/images/Image-Indrégients/pate-pizza.png" },
            { nom: "Courgettes", image: "../assets/images/Image-Indrégients/courgette.png" },
            { nom: "Sauce tomate", image: "../assets/images/Image-Indrégients/sauce-tomate.png" },
            { nom: "Mozzarella", image: "../assets/images/Image-Indrégients/mozzarella.png" },
            { nom: "Parmesan râpé", image: "../assets/images/Image-Indrégients/parmesan.png" },
            { nom: "Origan séché", image: "../assets/images/Image-Indrégients/origan.png" },
            { nom: "Huile d'olive", image: "../assets/images/Image-Indrégients/huile-olive.png" },
            { nom: "Sel et poivre", image: "../assets/images/Image-Indrégients/sel-poivre.png" }
        ],
        etapes: [
            "Préchauffer le four à 220°C (425°F).",
            "Étaler la pâte à pizza sur une plaque de cuisson recouverte de papier sulfurisé.",
            "Étaler une couche uniforme de sauce tomate sur la pâte.",
            "Trancher les courgettes en fines rondelles. Les disposer sur une assiette, saler légèrement, et les laisser reposer pendant 10 minutes pour éliminer l'excès d'eau.",
            "Essuyer les courgettes avec du papier absorbant pour enlever l'excès d'eau.",
            "Disposer les rondelles de courgettes sur la sauce tomate.",
            "Ajouter la mozzarella en tranches ou râpée sur les courgettes.",
            "Saupoudrer de parmesan râpé et d'origan séché.",
            "Arroser d'un filet d'huile d'olive et assaisonner avec du sel et du poivre.",
            "Cuire au four pendant 15-20 minutes, ou jusqu'à ce que la pâte soit dorée et que le fromage soit fondu et légèrement doré.",
            "Laisser refroidir légèrement avant de découper et de servir.",
            "Servir chaud pour profiter de la pizza légère et savoureuse."
        ]
    },
    
    // wrap épinard
    {
        titre: "Wrap Épinards",
        image: "../assets/images/veggy/wrapEpinards.png",
        description: "Un wrap frais et savoureux, rempli d'épinards et d'autres ingrédients sains, parfait pour un déjeuner léger ou un en-cas.",
        categorie: "veggy",
        motsCles: "veggy, wrap, épinards, frais, léger",
        video: "https://www.youtube.com/embed/5Z-tW4eZJ24?si=CT3uQ_fyPT6Z2gCs",
        ingredients: [
            { nom: "Tortilla ou wrap (de votre choix)", image: "../assets/images/Image-Indrégients/tortilla.png" },
            { nom: "Épinards frais", image: "../assets/images/Image-Indrégients/epinards.png" },
            { nom: "Avocat", image: "../assets/images/Image-Indrégients/avocat.png" },
            { nom: "Poivron rouge", image: "../assets/images/Image-Indrégients/poivron-rouge.png" },
            { nom: "Carottes", image: "../assets/images/Image-Indrégients/carottes.jpeg" },
            { nom: "Houmous", image: "../assets/images/Image-Indrégients/houmous.png" },
            { nom: "Fromage de chèvre ou feta (optionnel)", image: "../assets/images/Image-Indrégients/feta.png" },
            { nom: "Sel et poivre", image: "../assets/images/Image-Indrégients/sel-poivre.png" }
        ],
        etapes: [
            "Étaler le houmous sur toute la surface de la tortilla ou du wrap.",
            "Laver et sécher les épinards frais, puis les répartir uniformément sur le houmous.",
            "Couper l'avocat en tranches et les disposer sur les épinards.",
            "Couper le poivron rouge en fines lanières et les ajouter au wrap.",
            "Râper ou couper les carottes en julienne, puis les ajouter au wrap.",
            "Si vous utilisez du fromage de chèvre ou de la feta, émietter ou trancher et ajouter au wrap.",
            "Assaisonner avec du sel et du poivre selon vos préférences.",
            "Rouler le wrap en serrant bien pour enfermer tous les ingrédients.",
            "Couper le wrap en deux pour une présentation plus élégante ou le servir entier.",
            "Servir immédiatement ou emballer pour emporter."
        ]
    }, 
    
    // toast avocat
    {
        titre: "Toast Avocat, Tomate et Grenade",
        image: "../assets/images/veggy/toastAvocatTomateGrenade.png",
        description: "Un toast frais et coloré, garni d'avocat crémeux, de tomates juteuses et de grenade pour un mélange de saveurs savoureux et croquant.",
        categorie: "veggy",
        motsCles: "veggy, toast, avocat, tomate, grenade, frais",
        video: "https://www.youtube.com/embed/5Z-tW4eZJ24?si=CT3uQ_fyPT6Z2gCs",
        ingredients: [
            { nom: "Pain complet ou pain de votre choix", image: "../assets/images/Image-Indrégients/pain-complet.png" },
            { nom: "Avocat", image: "../assets/images/Image-Indrégients/avocat.png" },
            { nom: "Tomates cerises", image: "../assets/images/Image-Indrégients/tomates-cerises.png" },
            { nom: "Graines de grenade", image: "../assets/images/Image-Indrégients/grenade.png" },
            { nom: "Herbes fraîches (basilic, persil, etc.)", image: "../assets/images/Image-Indrégients/herbes.png" },
            { nom: "Sel et poivre", image: "../assets/images/Image-Indrégients/sel-poivre.png" }
        ],
        etapes: [
            "Faire griller les tranches de pain complet dans un grille-pain ou au four jusqu'à ce qu'elles soient dorées et croustillantes.",
            "Pendant que le pain grille, couper l'avocat en deux, retirer le noyau, et le couper en tranches. Vous pouvez également écraser l'avocat avec une fourchette pour en faire une purée, si vous préférez.",
            "Laver et couper les tomates cerises en deux.",
            "Retirer les graines de grenade de leur écorce. Pour ce faire, couper la grenade en deux et taper légèrement sur le dos avec une cuillère pour libérer les graines.",
            "Étaler l'avocat sur les tranches de pain grillé.",
            "Disposer les tomates cerises coupées et les graines de grenade sur l'avocat.",
            "Assaisonner avec du sel, du poivre et des herbes fraîches de votre choix.",
            "Servir immédiatement pour profiter du toast frais et croquant."
        ]
    },    
    /******************** snacks ********************/

    // barre de céréales
    {
        titre: "Barre de céréales",
        image: "../assets/images/snacks/barre-cereales.png",
        description:
            "Barres de céréales maison sans sucre ajouté. Elles combinent des flocons d’avoine, des noix et des fruits secs pour un snack sain et savoureux.",
 
        categorie: "snacks",
        motsCles:
            "barre, céréales, barre de céréales, fruits secs, chocolat, snack",
        video: "../assets/videos/snacks/barre-cereales.mp4",
        ingredients: [
            {
                nom: "Datte",
                image: "../assets/images/Image-indrégients/barre-cereales/Dattes.jpeg",
            },
            {
                nom: "Flocon d'avoine",
                image:
                    "../assets/images/Image-indrégients/barre-cereales/flocon-davoine.jpeg",
            },
            {
                nom: "Noix",
                image: "../assets/images/Image-indrégients/tarte-citron/citron.jpeg",
            },
            {
                nom: "Sirop d'érable",
                image: "../assets/images/Image-indrégients/barre-cereales/sirop.jpeg",
            },
        ],
        etapes: [
            "Mixez les dattes jusqu'à obtenir une pâte.",
            "Dans un bol, mélangez les flocons d'avoine, les noix, les graines, la pâte de dattes, le beurre d'amande, le miel, la vanille et le sel..",
            "Pressez le mélange dans un moule recouvert de papier sulfurisé.",
            "Placez au réfrigérateur pendant 2 heures pour que les barres se raffermissent.",
            "Découpez en barres et dégustez.",
            "Parfaites pour un encas sur le pouce !",
        ],
    },
    // date bowls
    {
        titre: "Date bowls",
        image: "../assets/images/snacks/date-bowls.png",
        description:
            "Ces energy balls aux dattes sont un encas sain et nourrissant, parfait pour une collation. Riches en fibres et sans sucre ajouté, elles se préparent en quelques minutes.",
 
        categorie: "snacks",
        motsCles: "snack, date, bowls, collation",
        video: "../assets/videos/snacks/date-bowls.mp4",
        ingredients: [
            {
                nom: "Cacao",
                image:
                    "../assets/images/Image-indrégients/date bowls/Cacao Sans Sucre en Poudre Bio 1kg.jpeg",
            },
            {
                nom: "Dattes",
                image:
                    "../assets/images/Image-indrégients/date bowls/Dattes copie.jpeg",
            },
            {
                nom: "Huile de coco",
                image:
                    "../assets/images/Image-indrégients/date bowls/huile-de-coco copie.jpeg",
            },
            {
                nom: "Noix",
                image: "../assets/images/Image-indrégients/date bowls/noix copie.jpeg",
            },
        ],
        etapes: [
            "Mixez les dattes et les noix dans un robot jusqu'à obtenir une pâte collante.",
            "Ajoutez le cacao, les graines, la vanille, et le sel. Mixez jusqu'à homogénéité.",
            "Formez des boules avec la pâte.",
            "Réfrigérez pendant 30 minutes avant de déguster..",
            "Elles se conservent bien au frais pour plusieurs jours !",
        ],
    },
    // snickers
    {
        titre: "Snickers",
        image: "../assets/images/snacks/snickers.png",
        description:
            "Ces snickers maison, sans sucre raffiné ni conservateurs, offrent une version saine de la célèbre barre chocolatée.",
 
        categorie: "snacks",
        motsCles: "snack, snickers, amandes, caramel, chocolat, collation",
        video: "../assets/videos/snacks/snickers.mp4",
        ingredients: [
            {
                nom: "Amande",
                image: "../assets/images/Image-indrégients/snickers/amande.jpeg",
            },
            {
                nom: "Beurre",
                image:
                    "../assets/images/Image-indrégients/snickers/beurre-de-cachuete.jpeg",
            },
            {
                nom: "Chocolat noir",
                image: "../assets/images/Image-indrégients/snickers/chocolat-noir.jpeg",
            },
            {
                nom: "Huile de coco",
                image:
                    "../assets/images/Image-indrégients/date bowls/huile-de-coco copie.jpeg",
            },
        ],
        etapes: [
            "Mixez 100g de dattes avec les amandes jusqu'à obtenir une pâte. Pressez-la dans un moule..",
            "Mixez le reste des dattes avec le beurre de cacahuète et une pincée de sel pour faire le caramel. Étalez sur la base.",
            "Faites fondre le chocolat avec l'huile de coco, puis versez-le sur la couche de caramel.",
            "Réfrigérez 1 heure, puis coupez en barres.",
            "Savourez ces snickers sains à tout moment de la journée !",
        ],
    },
    // yogurt bark
    {
        titre: "Yogurt Bark",
        image: "../assets/images/snacks/Yogurt-bark2.png",
        description:
            "Le yogurt bark est une collation glacée et saine, parfaite pour l'été. Réalisé à base de yaourt grec, de fruits frais et de noix, c'est un snack gourmand, riche en protéines et sans sucre ajouté.",
 
        categorie: "snacks",
        motsCles: "yogurt, snack, yaourt, fruits, grec, noix",
        video: "../assets/videos/snacks/Yogurt-bark.mp4",
        ingredients: [
            {
                nom: "Yaourt Grec",
                image:
                    "../assets/images/Image-indrégients/yogurt-bark/yogurt-bark.jpeg",
            },
            {
                nom: "Fruits rouges",
                image:
                    "../assets/images/Image-indrégients/yogurt-bark/fruits-rouges.jpeg",
            },
            {
                nom: "Fruits secs",
                image:
                    "../assets/images/Image-indrégients/yogurt-bark/fruits-secs.jpeg/",
            },
            {
                nom: "Sirop d'érable",
                image: "../assets/images/Image-indrégients/yogurt-bark/sirop.jpeg",
            },
        ],
        etapes: [
            "Mélangez le yaourt avec le miel et l'extrait de vanille.",
            "Étalez le mélange uniformément sur une plaque recouverte de papier sulfurisé.",
            "Parsemez de fruits, de noix et de graines.",
            "Placez la plaque au congélateur pendant 2 à 4 heures, jusqu'à ce que le yaourt soit complètement figé.",
            "Cassez en morceaux et dégustez.",
            "Conservez au congélateur jusqu'à 2 semaines.!",
        ],
    },

    /******************** snacks ********************/

    /******************** boissons ********************/

    // élixir détox
    {
        titre: "Élixir Détox: Fraîcheur et Pureté",
        image: "../assets/images/boissons/elixirdetox.png",
        description:
            "Revitalisez-vous avec notre Élixir Détox : Fraîcheur et Pureté, une boisson détoxifiante composée d’ingrédients naturels.",
 
        categorie: "boissons",
        motsCles: "détox, boisson, fraîcheur, purifiant, naturel",
        video: "../assets/videos/boisson/elixirdetox.mp4",
        ingredients: [
            {
                nom: "Concombre",
                image: "../assets/images/Image-ingredients/elixirdetox/concombre.jpeg",
            },
            {
                nom: "Citron",
                image: "../assets/images/Image-ingredients/elixirdetox/citron.jpeg",
            },
            {
                nom: "Menthe fraîche",
                image: "../assets/images/Image-ingredients/elixirdetox/menthe.jpeg",
            },
            {
                nom: "Eau",
                image: "../assets/images/Image-ingredients/elixirdetox/eau.jpeg",
            },
        ],
        etapes: [
            "Coupez le concombre et le citron en fines tranches.",
            "Ajoutez les tranches de concombre, de citron et les feuilles de menthe dans une grande carafe.",
            "Remplissez la carafe d'eau fraîche.",
            "Laissez infuser au réfrigérateur pendant au moins 2 heures avant de servir.",
            "Servez avec des glaçons pour une fraîcheur maximale.",
        ],
    },

    //smoothie fruit rouge
    {
        titre: "Smoothie aux Fruits Rouges",
        image: "../assets/images/boissons/smoothie-rose.png",
        description: "Un smoothie rafraîchissant et vitaminé, composé de fruits rouges mélangés pour une explosion de saveurs et de nutriments.",
 
        categorie: "boissons",
        motsCles: "smoothie, fruits rouges, vitaminé, rafraîchissant, santé",
        video: "https://www.youtube.com/embed/somevideoid",  // Remplacez 'somevideoid' par l'identifiant de votre vidéo si disponible.
        ingredients: [
            { nom: "Fruits rouges mélangés (fraises, framboises, myrtilles, etc.)", image: "../assets/images/Image-Indrégients/fruits-rouges.png" },
            { nom: "Banane", image: "../assets/images/Image-Indrégients/banane.png" },
            { nom: "Yaourt nature ou yaourt à base de plantes", image: "../assets/images/Image-Indrégients/yaourt.png" },
            { nom: "Lait (ou lait d'amande, soja, etc.)", image: "../assets/images/Image-Indrégients/lait.png" },
            { nom: "Miel ou sirop d'agave (optionnel)", image: "../assets/images/Image-Indrégients/miel.png" },
            { nom: "Glace (optionnel, pour une texture plus onctueuse)", image: "../assets/images/Image-Indrégients/glace.png" }
        ],
        etapes: [
            "Laver soigneusement les fruits rouges si vous utilisez des fruits frais.",
            "Peler la banane et la couper en morceaux.",
            "Dans un mixeur, ajouter les fruits rouges, les morceaux de banane, et le yaourt.",
            "Ajouter le lait jusqu'à obtenir la consistance désirée.",
            "Si vous préférez un smoothie plus sucré, ajouter du miel ou du sirop d'agave selon vos goûts.",
            "Pour une texture plus onctueuse, ajouter de la glace.",
            "Mixer jusqu'à obtenir une texture lisse et homogène.",
            "Verser dans un verre et servir immédiatement pour profiter de toute la fraîcheur et des nutriments des fruits."
        ]
    },      
    /******************** boissons ********************/
];

// permet l'importation dans d'autres fichiers.
export default recettes;
