const products = [
    {code: 'toto', nom: 'Fondation foudroyée', prix: 10},
    {code: 'console', nom: 'PS3', prix: 200},
    {code: 'fleur', nom: 'Orchidée', prix: 20}
];

let productList = [];

/*
 * fonction pour ajouter un produit
 */
function add(type) {
    products.forEach(function (element) {
        element.code === type ? productList.push(element) : false;
    });
    // chercher tous les aliments qui conviennent et les afficher
    display();
}

/**
 * fonction pour supprimer un produit
 */
function del(type) {
    products.forEach(function (element) {
        //utilisation de splice (syntaxe : splice (index, nombreElementsAsupprimer)
        if (element.code === type) {
            //findIndex(fonction) où la fonction est la condition de détection
            let index = productList.findIndex(function (element) {
                return element.code === type;
            });
            //findIndex return -1 si elle ne trouve rien
            if (index >= 0) {
                productList.splice(index, 1);
            }
        }
    });

    display();
}

/**
 * fonction pour afficher la liste des produits
 */
function display() {
    list =[];
    products.forEach(function(element){
        list.push(0);
    });

    for(let i = 0; i < productList.length; i++){
        let indexToIncrement = -1;

        indexToIncrement = products.findIndex(
            function (element) {
            return productList[i].code === element.code}
            );

        if(indexToIncrement >= 0){
            list[indexToIncrement] += 1;
        }
    };

    let stringToReturn = (  list[0] + " " + products[0].code + ", " +
                            list[1] + " " + products[1].code + ", " +
                            list[2] + " " + products[2].code + ", " );
    document.getElementById("resultat").innerHTML = stringToReturn ;
}
