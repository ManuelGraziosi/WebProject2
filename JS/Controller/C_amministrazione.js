/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var U = new U_operazioni();

var C_amministrazione = function(){
    
};

C_amministrazione.prototype = {
    inserisciProdotto : function(datiProdotto){
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
