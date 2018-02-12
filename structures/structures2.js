recettes = [
    {name:'ratatouille', ingredients: [
            {name: "tomate", count: 4},
            {name: "poivron", count: 4},
            {name: "aubergine", count: 4},
            {name: "oignon", count: 4},
            {name: "courgette", count: 4}
        ]},
    {name:'velouté de tomate', ingredients: [
            {name: "tomate", count: 10},
            {name: "poivron", count: 0},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 2},
            {name: "courgette", count: 0}
        ]},
    {name:'légume farci', ingredients: [
            {name: "tomate", count: 6},
            {name: "poivron", count: 6},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 0},
            {name: "courgette", count: 6}
        ]}
];

selected=[];

function add( recipe ){
    selected=[];
    // chercher la recette
    for(i=0;i<recettes.length;i++){
        if( recettes[i].name == recipe ){

            // ajouter les ingrédients de la recette dans le tableau selected
            // parcourir tous les ingrédients de la recette e
            // les ajouter dans le tableau selected
            for( j=0;j<recettes[i].ingredients.length;j++){
                selected.push( recettes[i].ingredients[j] );
            }
        }
    }

    display();
}

function display(){

    liste_ingredient = {};
    // calculer la liste des ingrédients nécessaires pour toutes les recettes rajoutées
    for(i=0;i<selected.length;i++){
        // récupération du nom de l'aliment
        var aliment = selected[i].name;
        // récupération du count
        var count = selected[i].count;
        if( !liste_ingredient[aliment] ){
            liste_ingredient[aliment] = 0;
        }
        liste_ingredient[aliment] += count;
    }
    let list="";
    console.log(liste_ingredient);
    for (let property in liste_ingredient){
        list += liste_ingredient[property]; // C'EST ICI QU'IL FAUT TROUVER COMMENT ACCEDER AUX VALEURS.
        list += " ";
        list += property;
        list += " ,";
    }
    console.log(list);
    document.getElementById("resultat").innerHTML = list;
}


