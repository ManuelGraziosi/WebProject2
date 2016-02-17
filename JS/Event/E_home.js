/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var home;

var E_home = function(){
    home = new C_home();
    
    $('.menu').click(home.caricaPaginaHtml);//richiede tutte le pagine del menu
    
    
    $('#carrello').click(home.mostraCarrello);
    $('#amministrazione').click(home.amministratore);
    /**/$('#newsletter').click(home.newsletter);
    $('#submit_newsletter').click(home.submit_newsletter);
    $('#registrazione').click(home.registrazione);
    $('#invialogin'/**login/**/).click(home.login);
    $('#logout').click(home.logout);
    $('#searchimg').click(home.ricerca);
    $('#barracerca').keyup(home.ricerca);
    /**$('#barracerca').keypress(function(evento){
        if(evento.which == 13){//13 corrisponde al tasto invio
            home.ricerca();
        }
    });/**/
}
