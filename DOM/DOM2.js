/*
* Gestion produit
*/

selected = {};

products = [
    {code:'livre', name:'Fondation foudroyée', price:10 },
    {code:'console', name:'PS3', price:200 },
    {code:'fleur', name:'Orchidée', price:20 }
];

productList = document.getElementById("productList");

// créer les produits
for(i=0;i<products.length;i++){

    // créer h3 contenant le nom du produit
    productName = document.createElement("h3");
    productName.innerHTML = products[i].name;
    console.log(productList);
    productList.appendChild(productName);

    // Ajout d'un bouton avec le texte "ajouter" et la class "add"
    button_add = document.createElement("button");
    // et ajout du listener sur le bouton
    addProductOnClick(button_add, products[i].code );

    // Meme principe pour bouton supprimer
    // button_del = .....

    // creation article
    article = document.createElement("article");

    // ajout dans article h3 + button_add + button_del

    // ajout article a productList
    productList.appendChild(article);

}

// créér un eventlistener qui permet d'ajouter un produit , sur l'élément en paramètre
function addProductOnClick(element, code_product){
    element.addEventListener("click", function(){
        addProduct( code_product );
    });
}

// créér un eventlistener qui permet de supprimer un produit , sur l'élément en paramètre
function removeProductOnClick(element, code_product){
    element.addEventListener("click", function(){
        removeProduct( code_product );
    });
}

// ajoute un code produit dans l'objet selected
function addProduct(code_product){
    if( !selected[code_product] ){
        selected[code_product] = 0;
    }
    selected[code_product]++;

    // recalcul de l'affichage du panier
    displayCaddie();
}

// supprime un code produit dans l'objet selected
function removeProduct(code_product){
    if( selected[code_product] && selected[code_product]>0){
        selected[code_product]--;
    }
    // recalcul de l'affichage du panier
    displayCaddie();
}

// affichage du panier
function displayCaddie(){
    // afficher dans #selection tous les articles du panier sous la forme :
    // "5 x PS3 : 1000€" pour chaque produit
    // afficher le total du panier en bas du panier
    // bonus: afficher un tableau HTML avec quatre colonnes :
    // nombre, nom produit, prix unitaire, total
    // bonus: permettre de modifier les éléments dans le panier directement.
}