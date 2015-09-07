var E_amministrazione = function(){
    $('#amministra').tabs();
    $('button').button();
};

E_amministrazione.prototype = {
    inserisciEventi: function(){
        $('#InserisciProdotto').click(function(){
            $('#tabellaForm').fadeIn();
        });
        $('#AggiornaProdotto').click();
        $('#EliminaProdotto').click();
        $('#AggiornaProdottoSelezionato').click();
    }
};