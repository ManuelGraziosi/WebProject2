/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var V_fareOrdine = function(){
    
};

V_fareOrdine.prototype.datiProdottoOrdinato = function(chiave){
    
    var dati = new Object();
    dati = {
        "NOME_PRODOTTO" :chiave,
        "quantita":$(".quantita").attr("title")
    };
    return dati;
    /**/
};

V_fareOrdine.prototype.notificaRimozione = function(nome){
    var U = new U_operazioni();
    $('#notifica').html(nome+" rimossa dal carrello");
    U.dialogoModale('#notifica');
};

V_fareOrdine.prototype.notificaRichiestaInserimento = function(nome,invia){
    var U = new U_operazioni();
    $('#notifica').html('<p>Inserire '+nome+' nel carrello?</p>');
    U.dialogoModaleConferma('#notifica',invia);
};

V_fareOrdine.prototype.notificaErroreInserimento = function(risposta){
    var U = new U_operazioni();
    $('#notifica').html(risposta.errore);
    U.dialogoModale('#notifica');
};

V_fareOrdine.prototype.notificaInserimento = function(risposta){
    var U = new U_operazioni();
    $('#notifica').html(risposta.dati.NOME_PRODOTTO+" è stato inserito nel carrello</br>quantità: 1</br>prezzo: "+risposta.dati.prezzo_kg);
    U.dialogoModale('#notifica');
};

V_fareOrdine.prototype.notificaSuccessoInserimento = function(risposta){
    var U = new U_operazioni();
    $('#notifica').html(risposta.dati.NOME_PRODOTTO+" è stato inserito nel carrello</br>quantità: 1</br>prezzo: "+risposta.dati.prezzo_kg);
    U.dialogoModale('#notifica');
};