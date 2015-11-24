var E_amministrazione = function(){
    //$('#amministra').tabs();
    //$('button').button();
};

E_amministrazione.prototype = {
    inserisciEventi: function(){
        $('#InserisciProdotto').click(function(){
            $('#tabellaForm').fadeIn();
            var V =new V_amministrazione();
            V.dialogo();
        });
        $('.AggiornaProdotto').click(function(event,ui){
            $('#tabellaForm').fadeIn();
            var V =new V_amministrazione();
            V.dialogo();
            var dati = V.recuperaDatiProdotto(ui);
            V.visualizzaDatiProdotto(dati);
        });
        $('#EliminaProdotto').click();
        $('#AggiornaProdottoSelezionato').click();
    }
};