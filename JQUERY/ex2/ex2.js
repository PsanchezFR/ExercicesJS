$(function(){

    // au survol des balises <a>, je veux qu'une infobulle soit créée
    // et affiche le contenu de l'attribut "title" du a en question
    $('a').on('mouseenter', function(e){
        $('body').children('div').remove();
        $('body').append('<div>' + $(this).attr('title') + '<div>');
    });
});
