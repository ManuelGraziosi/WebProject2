/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
var C_dettagli_prodotto=function(){
    
};

C_dettagli_prodotto.prototype.dettaglio=function(){
    var U = new U_operazioni();
    U.richiestaHtmlServer("C_visualizzazione","dettagliprodotto","mainright");
    
    
    var dati = new Object();
        dati = {
            "NOME_PRODOTTO": $('#nome').val()
        };
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=dettagliprodotto",
            type:'GET',
            dataType:"html",
            data:dati,
            success:function(carrello) {
                /**
                $('#nascosto').html(carrello).toggleClass("nacondino");
                V = new V_dettagli_prodotto();
                $(document).ready($('#accordion').accordion());
                /**
            }
        });
};
/**/