/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var C_commento= function(){
    
};

C_commento.prototype={
    invioCommento:function(){
        var V = new V_commento();
        var dati = V.preparaCommento();
        if (dati.TextCOM){
            $.ajax({
                url:"index.php?controllore=C_commento&metodo=inserisci_commento",
                data:dati,
                datatype:"html",//cosi definisco il tipo di dato che ricevo dopo l'invio, che sra un popup con scritto successo quindi html
                success:function(risposta){
                    V.notificaAllert(risposta);
                    $('.dettagli_prodotto').remove();
                }
            });
        }
        else{
            V.notificaAllert("Inserire testo prima di inviare commento");
        }
        
    }
}