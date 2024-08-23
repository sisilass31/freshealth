const recettes = [
    /* DEBUT SALEE */
    {
        titre: "Bagel Fraîcheur au Saumon",
        image: "../assets/images/bagel.png",
        description: "Parfait pour une pause gourmande et nutritive, ce bagel riche en saveurs vous offre un repas équilibré qui ravit les papilles et nourrit le corps.",
        like: 0,
        categorie: "salées",
        video: "../assets/videos/Recette-Bagel.mp4",
        motsCles: "salée, saumon, bagel",
      
    },
    {
        titre: "Riz au Poulet et ses Légumes arc en ciel",
        image: "../assets/images/riz-poulet.png",
        description: "Un plat équilibré, riche en saveurs, parfait pour nourrir le corps et ravir les papilles. Cliquez pour transformer votre repas en un voyage gustatif vibrant et énergisant!",
        like: 0,
        categorie: "salées",
        video: "../assets/videos/Riz-au-Poulet-et-ses-Légumes-arc-en-ciel.mp4",
        motsCles: "salée, riz, poulet, legumes",
       
    },
    {
        titre: "Poêlée Gourmande de Légumes Sautés",
        image: "../assets/images/salee/poele-de-legume.png",
        description: "Craquez pour notre Poêlée Gourmande de Légumes Sautés, un mélange coloré et savoureux de légumes frais, cuits à la perfection pour préserver leurs ...",
        like: 0,
        categorie: "salées",
        motsCles :"salée, poelee, legumes",
        video: "../assets/videos/légumes-poelee.mp4"
    },
    {
        titre: "L'Équilibre : Saumon, Riz et Salade Croquante",
        image: "../assets/images/salee/saumon-riz",
        description: "Ce plat équilibré et nutritif est parfait pour un repas sain, alliant saveur, légèreté et bien-être. Cliquez pour découvrir une option délicieuse qui nourrit ...",
        like: 0,
        categorie: "salées",
        motsCles :"salee, saumon, riz, salade",
        video: "../assets/videos/saumon-riz-salade.mp4"
    },
    {
        titre: "Bibimbap : Bœuf, Œuf et Salade de Carottes",
        image: "../assets/images/salee/oeuf-boeuf-saldade.png",
        description: "Ce plat équilibré et nutritif est parfait pour un repas sain et rassasiant, qui soutient votre vitalité tout en régalant vos papilles. Cliquez pour découvrir ...",
        like: 0,
        categorie: "salées",
        motsCles :"bibimbap, boeuf, oeuf, salade, carotte",
        video: "https://www.youtube.com/watch?v=6QQ67F8y2b8"
    },
    {
        titre: "Poke Bowl Tropical : Saumon, Mangue et Avocat",
        image: "../assets/images/salee/pokebowl.png",
        description: "Ce bol nutritif et équilibré est parfait pour un repas sain et coloré, riche en vitamines et en oméga-3",
        like: 0,
        categorie: "salées",
        motsCles :"poke, bowl, saumon, mangue, avocat",
        video: "https://www.youtube.com/watch?v=ez4zQr6CSnY"
    },
/* FIN SALEE */

/* DEBUT SUCRÉE*/

    {
        titre: "Crêpe",
        image: "../assets/images/Sucrée/crepe.png",
        description: "Ces crêpes légères et saines sont préparées avec de la farine complète et sans sucre raffiné. Elles sont parfaites brunch gourmand, un goûter, ou une envie de sucré.",
        like: 0,
        categorie: "sucrés" ,
        motsCles :"crêpe, sucré",
        video: "../assets/videos/sucrée/crepe.mp4",
        ingredients : [
            {nom : "Beurre", image: "../assets/images/Image-indrégients/crepe/beurre.jpeg" },
            {nom : "Farine", image:"../assets/images/Image-indrégients/crepe/farine.jpeg" }, 
            {nom : "Lait", image: "../assets/images/Image-indrégients/crepe/lait.jpeg" },
            {nom : "Oeuf", image :"../assets/images/Image-indrégients/crepe/oeufs.jpeg" } 
        ],
        Etapes : [
            "Mélangez la farine, les flocons d'avoine, et le sel dans un bol.",
            "Ajoutez les œufs, le lait, l'huile de coco, et le sirop d'érable. Mélangez jusqu'à obtenir une pâte lisse.",
            "Laissez reposer la pâte 10 minutes.",
            "Faites chauffer une poêle légèrement huilée, puis versez une louche de pâte pour former une crêpe fine.",
            "Faites cuire 1 à 2 minutes de chaque côté, jusqu'à ce qu'elle soit dorée.",
            "Dégustez avec des fruits frais ou un peu de miel !"
        ],    
    },
   
    {
        titre: "Tarte au citron ",
        image: "../assets/images/Sucrée/tarte-citron.png",
        description: "Cette tarte au citron healthy est légère et rafraîchissante, avec une base d'amandes et de flocons d'avoine, et une garniture au citron sans sucre raffiné. Parfaite pour se régaler sans culpabiliser !",
        like: 0,
        categorie: "sucrés",
        motsCles : "sucré, tarte, citron, tarte au citron",
        video: "../assets/videos/sucrée/tarte-citron.mp4",
        ingredients : [
            {nom : "Amande", image: "../assets/images/Image-indrégients/tarte-citron/amande-poudre.jpeg" },
            {nom : "Beurre", image: "../assets/images/Image-indrégients/tarte-citron/beurre.jpeg" }, 
            {nom : "Citron", image: "../assets/images/Image-indrégients/tarte-citron/citron.jpeg" },
            {nom : "Oeufs", image: "../assets/images/Image-indrégients/tarte-citron/oeufs.jpeg" }
        ],
        Etapes : [
            "Préchauffez le four à 180°C.",
            "Mélangez les ingrédients de la pâte, puis pressez-la au fond d'un moule à tarte. Faites cuire pendant 10 minutes.",
            "Mélangez le jus de citron, le zeste, les œufs, le miel et la fécule de maïs. Faites cuire à feu doux jusqu'à épaississement.",
            "Versez la garniture sur la pâte précuite, puis faites cuire au four pendant 15 minutes.",
            "Laissez refroidir et réfrigérez avant de servir !"
        ],  
    },


/* FIN SUCRE */

/* DEBUT SNACKS */
{
    titre: "Barre de céréales ",
    image: "../assets/images/snacks/barre-cereales.png",
    description: "Ces barres de céréales maison sont riches en fibres, sans sucre ajouté, et parfaites pour un encas énergisant. Elles combinent des flocons d’avoine, des noix et des fruits secs pour un snack sain et savoureux.",
    like: 0,
    categorie: "snacks",
    motsCles : "barre, céréales, barre de céréales, fruits secs, chocolat, snack",
    video: "../assets/videos/snacks/barre-cereales.mp4",
    ingredients : [
        {nom : "Datte", image: "../assets/images/Image-indrégients/barre-cereales/Dattes.jpeg" },
        {nom : "Flocon d'avoine", image: "../assets/images/Image-indrégients/barre-cereales/flocon-davoine.jpeg" }, 
        {nom : "Noix", image:"../assets/images/Image-indrégients/tarte-citron/citron.jpeg" },
        {nom : "Sirop d'érable", image: "../assets/images/Image-indrégients/barre-cereales/sirop.jpeg" }
    ],
    Etapes : [
        "Mixez les dattes jusqu'à obtenir une pâte.",
        "Dans un bol, mélangez les flocons d'avoine, les noix, les graines, la pâte de dattes, le beurre d'amande, le miel, la vanille et le sel..",
        "Pressez le mélange dans un moule recouvert de papier sulfurisé.",
        "Placez au réfrigérateur pendant 2 heures pour que les barres se raffermissent.",
        "Découpez en barres et dégustez.",
        "Parfaites pour un encas sur le pouce !"
    ],  
},

{
    titre: "Date bowls ",
    image: "../assets/images/snacks/date-bowls.png",
    description: "Ces energy balls aux dattes sont un encas sain et nourrissant, parfait pour une collation ou un boost d'énergie. Riches en fibres et sans sucre ajouté, elles se préparent en quelques minutes.",
    like: 0,
    categorie: "snacks",
    motsCles: "snack, date, bowls, collation",
    video: "../assets/videos/snacks/date-bowls.mp4",
    ingredients : [
        {nom : "Cacao", image: "../assets/images/Image-indrégients/date bowls/Cacao Sans Sucre en Poudre Bio 1kg.jpeg" },
        {nom : "Dattes", image: "../assets/images/Image-indrégients/date bowls/Dattes copie.jpeg" }, 
        {nom : "Huile de coco", image:"../assets/images/Image-indrégients/date bowls/huile-de-coco copie.jpeg" },
        {nom : "Noix", image: "../assets/images/Image-indrégients/date bowls/noix copie.jpeg" }
    ],
    Etapes : [
        "Mixez les dattes et les noix dans un robot jusqu'à obtenir une pâte collante.",
        "Ajoutez le cacao, les graines, la vanille, et le sel. Mixez jusqu'à homogénéité.",
        "Formez des boules avec la pâte.",
        "Réfrigérez pendant 30 minutes avant de déguster..",
        "Elles se conservent bien au frais pour plusieurs jours !"
    ],  
},

{
    titre: "Snickers ",
    image: "../assets/images/snacks/snickers.png",
    description: "Ces snickers faits maison sont une version saine de la célèbre barre chocolatée, sans sucre raffiné ni conservateurs. Ils combinent une base de dattes et d’amandes, un caramel de dattes crémeux, et une couverture de chocolat noir. Parfaits pour une collation gourmande et équilibrée !",
    like: 0,
    categorie: "snacks",
    motsCles :"snack, snickers, amandes, caramel, chocolat, collation",
    video: "../assets/videos/snacks/snickers.mp4",
    ingredients : [
        {nom : "Amande", image: "../assets/images/Image-indrégients/snickers/amande.jpeg" },
        {nom : "Beurre", image: "../assets/images/Image-indrégients/snickers/beurre-de-cachuete.jpeg" }, 
        {nom : "Chocolat noir", image:"../assets/images/Image-indrégients/snickers/chocolat-noir.jpeg" },
        {nom : "Huile de coco", image: "../assets/images/Image-indrégients/date bowls/huile-de-coco copie.jpeg" }
    ],
    Etapes : [
        "Mixez 100g de dattes avec les amandes jusqu'à obtenir une pâte. Pressez-la dans un moule..",
        "Mixez le reste des dattes avec le beurre de cacahuète et une pincée de sel pour faire le caramel. Étalez sur la base.",
        "Faites fondre le chocolat avec l'huile de coco, puis versez-le sur la couche de caramel.",
        "Réfrigérez 1 heure, puis coupez en barres.",
        "Savourez ces snickers sains à tout moment de la journée !",
    ], 
},

{
    titre: "Yogurt Bark ",
    image: "../assets/images/snacks/Yogurt-bark2.png",
    description: "Le yogurt bark est une collation glacée et saine, parfaite pour l'été. Réalisé à base de yaourt grec, de fruits frais et de noix, c'est un snack gourmand, riche en protéines et sans sucre ajouté.",
    like: 0,
    categorie: "snacks",
    motsCles : "yogurt, snack, yaourt, fruits, grec, noix",
    video: "../assets/videos/snacks/Yogurt-bark.mp4",
    ingredients : [
        {nom : "Yaourt Grec", image: "../assets/images/Image-indrégients/yogurt-bark/yogurt-bark.jpeg" },
        {nom : "Fruits rouges", image: "../assets/images/Image-indrégients/yogurt-bark/fruits-rouges.jpeg" }, 
        {nom : "Fruits secs", image:"../assets/images/Image-indrégients/yogurt-bark/fruits-secs.jpeg/" },
        {nom : "Sirop d'érable", image: "../assets/images/Image-indrégients/yogurt-bark/sirop.jpeg" }
    ],
    Etapes : [
        "Mélangez le yaourt avec le miel et l'extrait de vanille.",
        "Étalez le mélange uniformément sur une plaque recouverte de papier sulfurisé.",
        "Parsemez de fruits, de noix et de graines.",
        "Placez la plaque au congélateur pendant 2 à 4 heures, jusqu'à ce que le yaourt soit complètement figé.",
        "Cassez en morceaux et dégustez.",
        "Conservez au congélateur jusqu'à 2 semaines.!"
    ], 
},

  /* FIN SNACKS */ 
];
