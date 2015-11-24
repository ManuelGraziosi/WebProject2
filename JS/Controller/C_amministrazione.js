var U = new U_operazioni();

var C_amministrazione = function(){
    /**/$('title').html('Sammartino | Amministrazione');
    $('.menu').removeClass('active');
    $('#amministrazione').addClass('active');/**/
    U.richiestaHtmlServer('C_visualizzazione','amministrazione','body');
};

C_amministrazione.prototype = {
    inviaProdotto : function(){
        V = new V_amministrazione();
        var datiProdotto = V.recuperaDatiProdotto();
        $.ajax({
            url:"index.php?controllore=C_amministratore&metodo=inserisciProdotto",
            type:'GET',
            dataType:"json",
            data:datiProdotto,
            success:function(successo) {
                if(!successo){
                    alert("prodotto inserito con successo");
                }
                else{
                    alert("errore di inserimento");
                }
            }
        });
    },
    
    eliminaProdotto : function(){
        var dati = new Object();
        dati = {
            "NOME_PRODOTTO": $('#nome').val()
        };
        $.ajax({
            url:"index.php?controllore=C_amministratore&metodo=eliminaProdotto",
            type:'GET',
            dataType:"html",
            data:dati,
            success:function(carrello) {
                $('#mainright').html(carrello);
            }
        });
    }
}