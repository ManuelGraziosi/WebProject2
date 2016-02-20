var E_amministrazione = function(){
    //$('#amministra').tabs();
    //$('button').button();
};

E_amministrazione.prototype = {
    inserisciEventi: function(){
        var V =new V_amministrazione();
        var C = new C_amministrazione();
        
        $('#InserisciProdotto').click(function(event){
            event.stopPropagation();
            V.inizializzaForm();
            var invia=function(){
                var datiProdotto = V.recuperaDatiProdotto();
                C.inserisciProdotto(datiProdotto);
            };
            V.mostraFormInserimento(invia);
            //V.dialogo();
        });
        
        $('.AggiornaProdotto').click(function(event){
            event.stopPropagation();
            var nome = $(this).attr('title');
            var datiProdotto = C.recuperaProdotto(nome);
                $('body').append(datiProdotto.NOME_PRODOTTO);
            V.visualizzaDatiProdotto(datiProdotto);
            var invia=function(){
                var datiProdotto = V.recuperaDatiProdotto();
                C.aggiornaProdotto(datiProdotto);
            };
            V.mostraFormModifica(invia);
        });
        
        $('.EliminaProdotto').click(function(event){
            event.stopPropagation();
            var nome=$(this).attr('title');
            C.eliminaProdotto(nome);
            V.notificaCancellazione();
        });
        
        $('.banda').click(function(event){
            event.stopPropagation();
            var email=$(this).attr('title');
            C.bandaCliente({"EMAIL":email});
            //window.location.reload();
        });
        
        $('#invialoginadmin').click(C.LoginAdmin);
        
        $('#logout').click(C.LogoutAdmin);
    }
};