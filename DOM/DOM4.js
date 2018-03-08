/**
 créer un paint qui permet en utilisant uniquement les listes déroulantes et des classes,
 - Au clic de la souris, créer :
 => une forme ( rond, carré, losange )
 => de la couleur sélectionnée ( bleu, jaune , rouge, vert ),
 => et du rayon sélectionné ( 10, 50, 100, 200 ) .
 - Bonus:
 1) rajouter des triangles,
 2) faire en sorte de voir la forme se déplacer sous la souris avant de cliquer,
 3) faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe .
 4) correction des coordonnées pour que le milieu de la forme soit à la position du clic
 **/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // récupération des éléments
    board = document.getElementById("board");
    select_shape = document.getElementById("select_shape");
    select_color = document.getElementById("select_color");
    select_size = document.getElementById("select_size");
    let currentShape;

    // fonction de création d'un élément
    shape_creation = function(event){
        console.log("Shape creation");
        //ajout du nouvel élément dans le tableau
        divToAdd = prepareShape(event);
        board.appendChild(divToAdd);
    };

    shapePrevisualisation = function onMouseMove(event){
        console.log("Shape previsualisation");
        //suppression des anciennes formes
        if(currentShape != null){
            board.removeChild(currentShape);
        }
        //stockage dans une variable globale
        currentShape = prepareShape(event);
        currentShape.classList.add("transparent");
        board.appendChild(currentShape);
    }

    function prepareShape(event) {
        currentMousePosition = [];

        // récupération des valeurs des selects
        currentTool = [];
        currentTool[0] = select_shape.value;
        currentTool[1] = select_color.value;
        currentTool[2] = select_size.value;

        // récupération de la position du clic
        currentMousePosition[0] = event.offsetX;
        currentMousePosition[1] = event.offsetY;

        // création d'un nouvel élément
        newDiv = document.createElement("div");

        // ajout des classes correspondantes
        newDiv.classList.add(currentTool[0]);
        newDiv.classList.add(currentTool[1]);
        newDiv.classList.add(currentTool[2]);

        // ajout de la position de l'élément
        newDiv.style.left = currentMousePosition[0] - parseInt(getComputedStyle(newDiv).width)/2 + "px";
        newDiv.style.top =  currentMousePosition[1] - parseInt(getComputedStyle(newDiv).height)/2 + "px";
        return newDiv;
    }


    // ajout des listeners
    board.addEventListener("mousemove", shapePrevisualisation);
    board.addEventListener("click", shape_creation);

});