// accordéon
// Quand je clique sur le titre d'un article, je veux afficher le paragraphe correspondant
$(function(){
    $('h3').on("click", function(){
        $('p').hide();
        $(this).siblings('p').show();
    });
});