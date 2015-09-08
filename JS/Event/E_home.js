/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C_home;

var E_home = function(){
    C_home = new C_home();
    
    $('.menu').unbind().click(C_home.caricaPaginaHtml);
    
    $('#amministrazione').click(/**C_home.amministratore/**/
            function(){
                top.location.href = "amministrazione.html";
            });
    $('#newsletter').click(C_home.newsletter);
    $('#submit_newsletter').unbind().click(C_home.submit_newsletter);
    $('#registrazione').click(C_home.registrazione);
    $('#login').unbind().click(C_home.login);
    $('#logout').unbind().click(C_home.logout);
    $('#searchimg').unbind().click(C_home.ricerca);
    $('#barracerca').unbind().keypress(function(evento){
        if(evento.which == 13){//13 corrisponde al tasto invio
            C_home.ricerca();
        }
    });
}
