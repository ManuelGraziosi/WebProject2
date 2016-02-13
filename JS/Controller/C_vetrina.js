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
            success:function(carrello) {
            V=new V_dettagli_prodotto();
            $('#notifica').html(carrello);
            V.dialogomanuel();
            $('#accordion').accordion();
            }
        });
    },
    
    
    ordinareprodotto : function(){
        /**/
        U = new U_operazioni();
        C = new C_fareOrdine();
        V = new V_fareOrdine();/**/
        var nome = $(this).attr("title");
        //$("body").html(nome);
        /**/
        var dati = V.datiProdottoOrdinato(/**/nome/**/);
        C.inserisciProdottoOrdinato(dati);
        /**/
    },
    
    eliminareprodotto : function(){
        C = new C_fareOrdine();
        V = new V_fareOrdine();/**/
        var nome = $(this).attr("title");
        C.rimuoviProdottoOrdinato(nome);
        $(this).parent().parent().fadeOut({duration:1500,animated:'slow'});
        
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
            }
        });
    }
};
