/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vetrina;

var E_vetrina = function(){
    vetrina = new C_vetrina();
    $('.aggiungi').click(vetrina.ordinareprodotto);
    $('.foto-space').click(vetrina.dettaglio);
    $('.elimina').click(vetrina.eliminareprodotto)
};

