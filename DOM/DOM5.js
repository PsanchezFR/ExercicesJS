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

    //init spaceship variables
    spaceshipX = 0;
    spaceshipY = 0;
    spaceshipAngle = 0;

    // function tasked to catch arrows inputs
    catch_input = function inputCatcher(event) {
        switch (event.keyCode) {
            case 37 :
                spaceshipAngle = spaceship.style.transform.match(/-?\d+\.?\d*/); //value as int extrated from string
                spaceship.style.transform = 'rotate(' + (parseFloat(spaceshipAngle[0])  + spaceshipAngularVelocity) + 'deg)';
                break;
            case 38 :
                spaceshipAngle = spaceship.style.transform.match(/-?\d+\.?\d*/);
                spaceshipX += spaceshipVelocity * Math.cos(parseFloat(spaceshipAngle[0]) * Math.PI / 180);
                spaceshipY += spaceshipVelocity * Math.sin(parseFloat(spaceshipAngle[0]) * Math.PI / 180);
                spaceship.style.left = ( spaceshipX + "px");
                spaceship.style.top = (spaceshipY + "px");
                break;
            case 39 :
                spaceshipAngle = spaceship.style.transform.match(/-?\d+\.?\d*/);
                spaceship.style.transform = 'rotate(' + (parseFloat(parseFloat(spaceshipAngle[0]))  - spaceshipAngularVelocity) + 'deg)';
                break;
            case 40 :
                spaceshipAngle = spaceship.style.transform.match(/-?\d+\.?\d*/);
                spaceshipX -= spaceshipVelocity * Math.cos(parseFloat(spaceshipAngle[0]) * Math.PI / 180);
                spaceshipY -= spaceshipVelocity * Math.sin(parseFloat(spaceshipAngle[0]) * Math.PI / 180);
                spaceship.style.left = ( spaceshipX + "px");
                spaceship.style.top = ( spaceshipY + "px");
                break;
        }
    }
    document.addEventListener("keydown", catch_input);
});