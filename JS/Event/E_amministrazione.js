var E_amministrazione = function(){
    //$('#amministra').tabs();
    //$('button').button();
};

E_amministrazione.prototype = {
    inserisciEventi: function(){
        var V =new V_amministrazione();
        var C = new C_amministrazione();
        var U = new U_operazioni();
        $('#InserisciProdotto').click(function(){
            $('#tabellaForm').fadeIn();
            U.dialogoModaleConferma('#tabellaForm',function(){
                var datiProdotto = V.recuperaDatiProdotto();
                C.inserisciProdotto(datiProdotto);
            });
            //V.dialogo();
        });
        $('.AggiornaProdotto').click(function(event,ui){
            $('#tabellaForm').fadeIn();
            U.dialogoModale('#tabellaForm');
        });
        $('.EliminaProdotto').click(function(event,ui){
            $('#tabellaForm').fadeIn();
            U.dialogoModale('#tabellaForm');
        });
    }
};