/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vetrina;

var E_vetrina = function(){
    vetrina = new C_vetrina();
    home = new C_home();
    $('.aggiungi').click(home.ordinareprodotto);
    $('.prodotto').click(vetrina.dettaglio);
};

