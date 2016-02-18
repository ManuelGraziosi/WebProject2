var E_amministrazione = function(){
    //$('#amministra').tabs();
    //$('button').button();
};

E_amministrazione.prototype = {
    inserisciEventi: function(){
        var V =new V_amministrazione();
        var C = new C_amministrazione();
        $('#InserisciProdotto').click(function(){
            var invia=function(){
                var datiProdotto = V.recuperaDatiProdotto();
                C.inserisciProdotto(datiProdotto);
            };
            V.mostraForm(invia);
            //V.dialogo();
        });
        $('.AggiornaProdotto').click(function(event,ui){
            var nome = $(this).attr('title');
            var datiProdotto = C.recuperaProdotto(nome);
                $('body').append(datiProdotto.NOME_PRODOTTO);
            V.visualizzaDatiProdotto(datiProdotto);
            var invia=function(){
                var datiProdotto = V.recuperaDatiProdotto();
                C.aggiornaProdotto(datiProdotto);
            };
            V.mostraForm(invia);
        });
        $('.EliminaProdotto').click(function(event,ui){
            var nome=$(this).attr('title');
            C.eliminaProdotto(nome);
        });
    }
};