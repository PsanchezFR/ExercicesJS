$(function(){

    // au survol des balises <a>, je veux qu'une infobulle soit créée
    // et affiche le contenu de l'attribut "title" du a en question
    $('a').on('mouseenter', function(e){
        $(this).append('<div>' + $(this).attr('title') + '</div>');
    });

    $('a').on('mouseleave', function(e){
        $(this).children('div').remove();
    })
});
