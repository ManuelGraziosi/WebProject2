/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var home;

var E_home = function(){
    home = new C_home();
    
    $('.menu').unbind().click(home.caricaPaginaHtml);//richiede tutte le pagine del menu
    
    
    $('#carrello').unbind().click(home.mostraCarrello);
    $('#amministrazione').unbind().click(home.amministratore);
    /**/$('#newsletter').click(home.newsletter);
    $('#submit_newsletter').unbind().click(home.submit_newsletter);
    $('#registrazione').click(home.registrazione);
    $('#login').unbind().click(home.login);
    $('#logout').unbind().click(home.logout);
    $('#searchimg').unbind().click(home.ricerca);
    $('#barracerca').unbind().keyup(home.ricerca);
    /**$('#barracerca').unbind().keypress(function(evento){
        if(evento.which == 13){//13 corrisponde al tasto invio
            home.ricerca();
        }
    });/**/
}
