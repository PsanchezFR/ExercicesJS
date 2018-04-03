/**
 * afficher une seule image à la fois, et qui change toutes les 4 secondes
 */

function carousel(){
    $('img').each((index, element) => {
        setTimeout( () => {
            $(element).fadeIn().show(300).delay(3800).fadeOut().hide(300).delay(200);
        }, index * 4000
        );
    });
}

$(function(){
        carousel();
        window.setInterval(() => {
            carousel();
        },16000);
});