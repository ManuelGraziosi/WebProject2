var E_amministrazione = function(){
    
    $('#amministra').tabs();

    $('button').button();
    
    $('#InserisciProdotto').click();
    $('#AggiornaProdotto').click();
    $('#EliminaProdotto').click();

    $('#AggiornaProdottoSelezionato').unbind().click();
    /**
    function(){
        V = new V_amministrazione();
        var dati = V.recuperaDatiProdotto('A');
        $.ajax({
            url:"index.php?controllore=C_amministratore&metodo=aggiornaProdotto",
            type:'GET',
            dataType:"html",
            data:dati,
            success:function(carrello) {
                $('#mainright').html(carrello);
            }
        });
    }
    /**/
};