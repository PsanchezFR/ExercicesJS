/*
* Gestion produit
*/

tableHeadsNames = ["nombre", "nom produit", "prix unitaire", "total"]; // titles of each <th></th>
tableArray = []; // see initializeTable; will be an array of array.
selected = {};

const products = [
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


    // Ajout d'un bouton avec le texte "ajouter" et la class "add"
    button_add = document.createElement("button");
    button_add.innerText = "ajouter";
    button_add.classList.add("add");

    // et ajout du listener sur le bouton
    addProductOnClick(button_add, products[i].code );

    // Meme principe pour bouton supprimer
    button_del = document.createElement("button");
    button_del.innerText = "supprimer";
    button_del.classList.add("delete");

    removeProductOnClick(button_del, products[i].code );

    // creation article
    article = document.createElement("article");

    // ajout dans article h3 + button_add + button_del
    article.appendChild(productName);
    article.appendChild(button_add);
    article.appendChild(button_del);

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

    //Create the table if it's not already there
    if(document.getElementsByTagName("table").length === 0){
        initializeTable();
    }
    clearTable();
    fillTable();

}

//Create a table with a first row of TH. See "tableHeadsNames" global variable to change the titles.
function initializeTable(){
    //Creation of a table and injecting correct th/td/tr
    productsTable = document.createElement("table");
    tableRow = document.createElement("tr");
    //Generation of first row
    for(element in tableHeadsNames){
        tableHead = document.createElement("th");
        tableHead.innerText = tableHeadsNames[element];
        tableRow.appendChild(tableHead);
    }
    //Create first row
    productsTable.appendChild(tableRow);
    //Create X other rows
    for(element in products) {
        tableRow = document.createElement("tr");
        tableRow.classList.add("tableValues");
        tableArray[element] = []; // create an array of array
        tableArray[element][0] = tableRow; // first value should be a reference to the row
    }
    //Add everything to the table
    productsTable.appendChild(tableRow);
    document.body.appendChild(productsTable);

}

//Function to delete all the <td>
function clearTable(){
    tableCell = document.getElementsByTagName("td");
    if(tableCell.length > 0){
        for (let i = 0; i < tableCell.length; i++) {
            tableCell[i].parentNode.removeChild(tableCell[i]);
        }
    }
}

function fillTable(){
    const keysArray = Object.keys(selected);
    //add the number of each element
    for (let i = 0; i < keysArray.length; i++) {
        tableArray[i][1] = document.createElement("td");
        tableArray[i][1].innerHTML = selected[keysArray[i]];
        tableArray[i][0].appendChild(tableArray[i][1]);
    }

    //add the name of each element
    for (let i = 0; i < keysArray.length; i++) {
        tableArray[i][2] = document.createElement("td");
        tableArray[i][2].innerHTML = keysArray[i];
        tableArray[i][0].appendChild(tableArray[i][2]);
    }

    for(let i = 0; i < keysArray.length; i++) {
        productsTable.appendChild(tableArray[i][0]);
    }
}