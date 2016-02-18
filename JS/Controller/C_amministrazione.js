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
                /**
                if(!successo){
                    alert("prodotto inserito con successo");
                }
                else{
                    alert("errore di inserimento");
                }
                /**/
                window.location.reload();
            }
        });
    },
    
    recuperaProdotto : function(nome){
        var dati = new Object();
        dati = {
            "NOME_PRODOTTO": nome
        };
        var comodo;
        $.ajax({
            url:"index.php?controllore=C_amministratore&metodo=recuperaProdotto",
            type:'GET',
            dataType:"json",
            data:dati,
            async:false,
            success:function(datiprodotto) {
                comodo=datiprodotto;
                //var V = new V_amministrazione();
            }
        });
        return comodo;
    },
    
    aggiornaProdotto : function(dati){
        
        $.ajax({
            url:"index.php?controllore=C_amministratore&metodo=aggiornaProdotto",
            type:'GET',
            dataType:"json",
            data:dati,
            success:function() {
                window.location.reload();
            }
        });
    },
    
    /**/
    eliminaProdotto : function(nome){
        var dati = new Object();
        dati = {
            "NOME_PRODOTTO": nome
        };
        $.ajax({
            url:"index.php?controllore=C_amministratore&metodo=eliminaProdotto",
            type:'GET',
            dataType:"html",
            data:dati,
            success:function() {
                window.location.reload();
            }
        });
    },
    /**/
    bandaCliente : function(dato){
        $.ajax({
            url:"index.php?controllore=C_amministratore&metodo=bandaCliente",
            type:'GET',
            dataType:"html",
            data:dato,
            success:function() {
                
            }
        });
    }
}
