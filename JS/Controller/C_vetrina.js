var C,V;
var U = new U_operazioni();

var C_vetrina=function(){
    U.aggiorna_grafica();
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
            $('#nascosto').html(carrello);
            V.dialogomanuel();
            }
        });
    }
};