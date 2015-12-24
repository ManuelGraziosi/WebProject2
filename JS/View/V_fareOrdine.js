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