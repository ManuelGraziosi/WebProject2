var visualizzazione=function(){
    
}

visualizzazione.prototype.home=function(){
    $('title').html('home');

    $('#vetrina').removeClass('active');
    $(this).addClass('active');
    $('#carrello').removeClass('active');
    $('#registrazione').removeClass('active');
    $('#newsletter').removeClass('active');

    $.ajax({
        url:"index.php?controllore=C_visualizzazione&metodo=home",
        type:'GET',
        dataType:"html",
        success:function(home) {
            $('#mainright').html(home);
        }
    });
};

var start=function(){
    $('#home').click(visualizzazione.home());
}