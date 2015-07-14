/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var V_newsletter=function(){
    $('#submit_newsletter').button();
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

V_newsletter.prototype.notifica=function(stringa){
    switch (stringa) {
        case true:{
            $('#notifica_newsletter').html('email registrata con successo').css("color","green");
            break;
        }
        case false:{
            $('#notifica_newsletter').html('ERRORE').css("color","red");
            break;
        }
    }
}