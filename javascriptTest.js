function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

trouve_chiffre = function(min,max){
    let isPlaying = true;
    // 1) générer un chiffre entre min et max
    const resultToFind = getRandomInt(min,max);
    while(isPlaying){    //Boucle tant que l'on joue
        isPlaying = false;
        // 2) demander un chiffre à l'internaute
        // lui redemander si ce n'est pas un chiffre !
        let guessMadeByPlayer;
        do {
            guessMadeByPlayer = prompt("Take a guess !");
        }while(isNaN(guessMadeByPlayer));
        console.log(guessMadeByPlayer);
        // 3) si la saisie est juste, finir la partie
        if (guessMadeByPlayer == resultToFind) {
            console.log("Correct ! You've won !");
            return;
        }
        if (guessMadeByPlayer < resultToFind) {
            console.log("It's larger ! Guess again !");
            isPlaying = true;
        }
        else {
            console.log("It's smaller ! Guess again !");
            isPlaying = true;
        }
    }
    // aide : pour convertir une chaine de caractère en nombre
    // 			=> parseInt(string)
};


function stringLargerThan7(str){
    const characterArray = str.split("");
    return characterArray.length > 7 ? true : false;
}

function factorial7(){
    let product = 1;
    for(let i=1; i <= 7; i++){
        product *= i;
    }
    return product;
}


function factorialX(x){
    let product = 1;
    for(let i=1; i <= x; i++){
        product *= i;
    }
    return product;
}

function extensibleSum(){
    let sum = 0;
    for(let i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
