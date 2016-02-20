/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var V_vetrina=function(){
    U.aggiorna_grafica();
};

V_vetrina.prototype.recuperaDatiRicerca = function(){
    $('body').append("recuperati dati dal text di ricerca </br>");
    //this.dati = new Array();
    var dati = new Object();
    dati = {
        "ricerca" : $('#barracerca').val()
    };
    return dati;
};

V_vetrina.prototype.mostraRisultatiRicerca = function(prod){
    $('#mainright').html(prod);
};