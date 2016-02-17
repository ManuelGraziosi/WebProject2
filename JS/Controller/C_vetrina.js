var C,V;
var U = new U_operazioni();

var C_vetrina=function(){
    
};

C_vetrina.prototype={
    dettaglio : function(){
        var nome=$(this).attr('title');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=dettagliprodotto",
            type:'GET',
            dataType:"html",
            data:{NOME_PRODOTTO:nome},
            success:function(carrello){
            V = new V_commento();
            $('#notifica').html(carrello);
            V.dialogomanuel();
            
            $('#accordion').accordion();
            }
        }).done(function() {
            $.getScript("JS/Prova.js");
        });
    },
    
    ricerca : function(stringa){
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=ricerca",
            type:'GET',
            data:stringa,
            dataType:"html",
            success:function(lista) {
                var V = new V_vetrina();
                V.mostraRisultatiRicerca(lista);
                $.ajax({
                        url:"JS/Event/E_Vetrina.js",
                        dataType:'script',
                        async:false
                    });
            }
        });
    }
};
