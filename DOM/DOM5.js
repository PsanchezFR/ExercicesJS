/*
 * vaisseau spatial de la terre à mars :
    - en cliquant sur les flêches du clavier, on déplace le vaisseau
    - quand il arrive sur la planète mars le jeu est gagné
     ( faire une vérification sur la position du vaisseau )
 *
 */

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //setting constants
    const spaceshipVelocity = 10;
    const spaceshipAngularVelocity = 4;

    //get HTML elements
    spaceship = document.getElementById("spaceship");

    //get CSS stylesheets
    spaceshipStyle = window.getComputedStyle(spaceship);

    //init the styles
    spaceship.style.transform = 'rotate(0deg)';
    spaceship.style.top = spaceshipStyle.top;
    spaceship.style.left = spaceshipStyle.left;


    // function tasked to catch arrows inputs
    catch_input = function inputCatcher(event) {
        switch (event.keyCode) {
            case 37 :
                initialAngle = spaceship.style.transform.match(/-?\d+\.?\d*/); //value as int extrated from string
                spaceship.style.transform = 'rotate(' + (parseFloat(initialAngle[0])  + spaceshipAngularVelocity) + 'deg)';
                console.log("left");
                break;
            case 38 :
                initialAngle = spaceship.style.transform.match(/-?\d+\.?\d*/);
                spaceship.style.left = ((parseInt(spaceship.style.left) - spaceshipVelocity) * Math.cos(initialAngle * Math.PI / 180) + "px");
                spaceship.style.top = ((parseInt(spaceship.style.top) - spaceshipVelocity) * Math.sin(initialAngle * Math.PI / 180) + "px");
                console.log("top");
                break;
            case 39 :
                initialAngle = spaceship.style.transform.match(/-?\d+\.?\d*/);
                spaceship.style.transform = 'rotate(' + (parseFloat(initialAngle[0])  - spaceshipAngularVelocity) + 'deg)';
                console.log("right");
                break;
            case 40 :
                initialAngle = spaceship.style.transform.match(/-?\d+\.?\d*/);
                spaceship.style.left = ((parseInt(spaceship.style.left) + spaceshipVelocity) * Math.cos(initialAngle * Math.PI / 180)  + "px");
                spaceship.style.top = ((parseInt(spaceship.style.top) + spaceshipVelocity) * Math.sin(initialAngle * Math.PI / 180)  + "px");
                console.log("bot");
                break;
        }
    }
    document.addEventListener("keydown", catch_input);
});