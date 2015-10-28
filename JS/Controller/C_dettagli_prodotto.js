/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var visualizzazione=function(){
    
};

visualizzazione.prototype.home=function(){
    $('title').html('home');

    $('#dettagli_prodotto').removeClass('active');
    $(this).addClass('active');

    $.ajax({
        url:"index.php?controllore=C_visualizzazione&metodo=dettagliprodotto",
        type:'GET',
        dataType:"html",
        success:function(home) {
            $('#mainright').html(home);
        }
    });
};

var start=function(){
    $('#home').click(visualizzazione.home());
};
