/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C_home;

var E_home = function(){
    C_home = new C_home();
    
    $('.menu').unbind().click(C_home.caricaPagina);
    
    $('#amministrazione').click(C_home.amministratore);
    $('#newsletter').click(C_home.newsletter);
    $('#submit_newsletter').unbind().click(C_home.submit_newsletter);
    $('#registrazione').unbind().click(C_home.registrazione);
    $('#login').unbind().click(C_home.login);
    $('#buttonsearch').unbind().click(C_home.ricerca);
    $('#barracerca').unbind().keypress(C_home.ricerca);
}