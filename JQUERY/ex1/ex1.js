/**
 * Gestion des onglets
 * Lorsque l'on clique sur un lien, il faut ajouter la classe active au <li> parent de ce lien et afficher l'article correspondant.
 */

$(function(){
    $("a").on("click",function(e){
        const clickedHref = $(e.target).attr('href');
        $(e.target).parent().addClass('active').siblings().removeClass('active');;
        $(clickedHref).show().siblings().hide();
    });
});