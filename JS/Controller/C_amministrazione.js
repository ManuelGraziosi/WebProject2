var C_amministrazione = function(){
    $('title').html('Sammartino | Amministrazione');
    $('.menu').removeClass('active');        
    $(this).addClass('active');
    $.ajax({
        url:"index.php?controllore=C_visualizzazione&metodo=amministrazione",
        type:'GET',
        dataType:"html",
        success:function(form) {
            $('#mainright').html(form);
            U.aggiorna_grafica();
            $('#amministra').tabs();

            $('#inviaProdotto').unbind().click(function(){
                V = new V_amministrazione();
                var dati = V.recuperaDatiProdotto('I');
                $.ajax({
                    url:"index.php?controllore=C_amministratore&metodo=inserisciProdotto",
                    type:'GET',
                    dataType:"html",
                    data:dati,
                    success:function(successo) {
                        if(!successo){
                            alert("prodotto inserito con successo");
                        }
                        else{
                            alert("errore di inserimento");
                        }
                    }
                });
            });

            $('#EliminaProdotto').unbind().click(function(){
                var dati = new Object();
                dati = {
                    "NOME_PRODOTTO": $('#nome_E').val(),
                    "controllore"  : "C_amministratore",
                    "metodo"       : "eliminaProdotto"
                };
                $.ajax({
                    url:"index.php",
                    type:'GET',
                    dataType:"html",
                    data:dati,
                    success:function(carrello) {
                        $('#mainright').html(carrello);
                    }
                });
            });

            $('#AggiornaProdotto').unbind().change(function(){
                $(this).val();
                $.ajax({
                    url:"index.php?controllore=&metodo="
                });
            });

            $('#AggiornaProdottoSelezionato').unbind().click(function(){
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
            });
        }
    });
};