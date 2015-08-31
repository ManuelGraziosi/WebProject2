/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C_home;

var C_home_eventi = function(){
    C_home = new C_home();
    
    $('#chisiamo').unbind().click(C_home.caricaPagina);
    $('#dovesiamo').unbind().click(C_home.caricaPagina);
    $('#galleria').unbind().click(C_home.caricaPagina);
    $('#vetrina').unbind().click(C_home.caricaPagina);
    $('#carrello').unbind().click(C_home.caricaPagina);
    /**
    $('#chisiamo').unbind().click(C_home.chisiamo);
    $('#dovesiamo').unbind().click(C_home.dovesiamo);
    $('#galleria').unbind().click(C_home.galleria);
    $('#vetrina').unbind().click(C_home.vetrina);
    $('#carrello').unbind().click(C_home.carrello);
    /**/
    $('#amministratore').click(C_home.amministratore);
    $('#newsletter').click(C_home.newsletter);
    $('#submit_newsletter').unbind().click(C_home.submit_newsletter);
    $('#registrazione').unbind().click(C_home.registrazione);
    $('#login').unbind().click(C_home.login);
    $('#buttonsearch').unbind().click(C_home.ricerca);
    $('#barracerca').unbind().keypress(C_home.ricerca);
}
