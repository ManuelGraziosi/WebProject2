/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var V_newsletter=function(){
    
}

V_newsletter.prototype.recuperaEmail=function(){
    var email= new Object();
    email = {
        "EMAIL" : $('#EMAIL_newsletter').val(),
        "controllore" : "C_newsletter",
        "metodo" :"iscrizioneNewsletter"
    }
    return email;
}

V_newsletter.prototype.notifica=function(){
    $('#newsletter').append("registrazione avvenuta con successo");
}