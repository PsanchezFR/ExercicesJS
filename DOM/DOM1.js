/**
 * Gestion avancée :
 * selecteur : document.querySelector(cssRule) et document.querySelectorAll(cssRule)
 * gestion classes :
 element.classList.add(className);
 element.classList.remove(className);
 element.classList.contains(className);
 element.classList.toggle(className)
 * gestion select : element.selectedIndex; element.options;
 */

// inputsText = document.querySelectorAll("form input[type='text']");

document.addEventListener("DOMContentLoaded", function(){

    // evenement keyup pour tous les input text
    // => si saisie entre 4 et 8 caractères, ajouter la class "success" sur le input, sinon ajouter la classe "error" sur le input

    // évènement à la soumission du formulaire
    // => supprimer toutes les div>div dans le formulaire
    // => vérifier que tous les champs sont renseignés
    // => vérifier que le login est différent du mot de passe
    // => vérifier que les mots de passe sont identiques
    // => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"
    // => créer une div juste avant contenant le message d'erreur pour chaque erreur
    //_________________________________________________________________________________
    //
    // GLOBAL VARIABLES     -------------------------------
    //
    let loginArray = [];
    loginArray.push("admin","administrator","superadmin","chuck","root","postmaster");
    let errorDiv;
    let parentDiv;
    const parentsForInsert = document.getElementsByClassName("form_group");

    // DO ON SUBMIT         -------------------------------
    //
    document.addEventListener("submit", function(event){
        event.preventDefault();
        deleteDiv();

        if(!hasEachInputAValue()){
            parentDiv = document.getElementById("subscription_login");
            errorDiv = document.createElement("div");
            parentsForInsert[0].appendChild(errorDiv);
            errorDiv.innerHTML = "EACH FIELD AND BUTTON NEED A CORRECT ANSWER.";
        }

        if(!isLoginDifferentFromPassword()){
            errorDiv = document.createElement("div");
            parentsForInsert[1].appendChild(errorDiv);
            errorDiv.innerHTML = "YOU MUST HAVE DIFFERENT LOGIN AND PASSWORD.";
        }

        if(arePasswordsDifferent()){
            errorDiv = document.createElement("div");
            parentsForInsert[1].appendChild(errorDiv);
            errorDiv.innerHTML = "PASSWORDS MUST BE THE SAME.";
        }

        if(!areLoginsCorrect(loginArray)){
            errorDiv = document.createElement("div");
            parentsForInsert[0].appendChild(errorDiv);
            errorDiv.innerHTML = "UNAUTHORIZED LOGIN. PLEASE FIND ANOTHER.";
        }
    });

    // FUNCTION TO TEST IF LOGIN AND PASSWORDS      -------------------------------
    //
    function isLoginDifferentFromPassword(){
        const login = document.getElementById("subscription_login");
        const password = document.getElementById("subscription_password");

        if(login.value != "" && password.value != "" && login.value === password.value){
            return false;
        }
        return true;
    }

    function arePasswordsDifferent(){
        const password = document.getElementById("subscription_password");
        const password2 = document.getElementById("subscription_password2");

        if(password.value === password2.value){
            return false;
        }
        return true;
    }

    function areLoginsCorrect(array){
        const login = document.getElementById("subscription_login");
        for(e in array){
            if(login.value === array[e]){
                return false;
            }
        }
        return true;
    }

    // TEST FUNCTIONS TO AVOID EMPTY INPUTS     -------------------------------
    //

//Main function ; each test is enclosed in its own function.
    function hasEachInputAValue(){
        return haveTextInputsAvalue() && isOptionSelected() && isCheckboxChecked();
    }

    function haveTextInputsAvalue(){
        const inputArray = document.getElementsByTagName("input");
        for (let i = 0; i < inputArray.length; i++){
            if( inputArray[i].type !== "checkbox" && inputArray[i].value === ""){
                return false;
            }
        }
        return true;
    }

    function isOptionSelected(){
        const select = document.getElementsByTagName("select")[0];
        if(select.selectedIndex === 0){
            return false;
        }
        return true;
    }

    function isCheckboxChecked(){
        const checkbox = document.getElementById("subscription_cgu");
        if(checkbox.checked === false){
            return false;
        }
        return true;
    }

    // FUNCTION TO DELETE DIVS IN THE FORM      -------------------------------
    //

    function deleteDiv(){
        const divArray = document.querySelectorAll("div>div");
        for(i=0; i < divArray.length; i++){
            console.log(divArray.item(i));
            divArray.item(i).parentNode.removeChild(divArray.item(i));
            }
        }


});

// FUNCTION TO TEST IF TEXT INPUT VALUE IS LONGER THAN THE MINIMUM (8)      -------------------------------
//

function errorTextTest(){
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++)
    {
        if(inputs.item(i).type == "text"){
            if(inputs.item(i).value.length >= 4 && inputs.item(i).value.length <=8){
                inputs.item(i).classList.remove("error");
                inputs.item(i).classList.add("success");
            }
            else{
                inputs.item(i).classList.add("error");
                inputs.item(i).classList.remove("success");
            }
        }
    }
}



