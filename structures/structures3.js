aliments = [
    {type:'fruit',name:'fraise'},
    {type:'fruit',name:'pomme'},
    {type:'viande',name:'canard'},
    {type:'legume',name:'panais'},
    {type:'fruit',name:'poire'},
    {type:'fruit',name:'mangue'},
    {type:'fruit',name:'kiwi'},
    {type:'legume',name:'carotte'},
    {type:'viande',name:'boeuf'},
    {type:'legume',name:'poireau'},
    {type:'legume',name:'courgette'},
    {type:'fruit',name:'banane'},
    {type:'legume',name:'butternut'},
    {type:'legume',name:'aubergine'},
    {type:'legume',name:'poivron'},
    {type:'viande',name:'poulet'},
    {type:'viande',name:'porc'},
    {type:'fruit',name:'orange'},
    {type:'viande',name:'kangourou'}
];

function select(type){
    // chercher tous les aliments qui conviennent et les afficher
    // parcourir tous les aliments et voir si le type convient
    selected=[];
    for(i=0; i<aliments.length; i++){
        if( aliments[i].type == type ){
            selected.push( aliments[i].name );
        }
    }

    list = selected.join(", "); // le nom des aliments
    document.getElementById("resultat").innerHTML = list;
}


