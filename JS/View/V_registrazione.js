/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var V_registrazione= function(){
    //this.dialogo();
};

V_registrazione.prototype.dialogo = function(/**html/**/){
    $(/**/'#formRegistrazione'/**/)/**.html(html)/**/.dialog({
        draggable:false,
        modal:true,
        resizable:false,
        minWidth:320,
        title:"Registrazione",
        close: $('#formRegistrazione').remove()
    });
    $('#invia').button();
};

/**/
V_registrazione.prototype.recuperaDatiRegistrazione = function(){
    //this.dati = new Array();
    var dati = new Object();
    dati={
        "nome"       : $('input#nome_registrazione').val(),
        "cognome"    : $('input#cognome_registrazione').val(),
        "EMAIL"      : $('input#EMAIL_registrazione').val(),
        "password"   : $('input#password_registrazione').val(),
        "password_1" : $('input#password_1_registrazione').val(),
        "via"        : $('input#via_registrazione').val(),
        "citta"      : $('input#citta_registrazione').val(),
        "CAP"        : $('input#CAP_registrazione').val()
    };
    return dati;
};

V_registrazione.prototype.recuperaDatiLogin = function(){
    //this.dati = new Array();
    var dati = new Object();
    dati={
        "EMAIL"      : $('#EMAIL').val(),
        "password"   : $('#password').val()
    };
    return dati;
};
/**/

V_registrazione.prototype.notificaLogin = function(info){
    if(info['errore'] == false){
        $('#utente').html('<p>'+info['cliente']+'</p>');
        $('.login').fadeOut(/**/{animated:'slow',duration:2000}/**/);
    } else {
        alert(info['errore']);
    }
};

V_registrazione.prototype.notificaRegistrazione = function(info){
    //if(info.messaggio != ""){
        //$('#utente').html('<p>'+info['cliente']+'</p>');
        //$('#formRegistrazione').html("<div id='successo'><p>registrazione avvenuta con successo</p></div>");
    //} else if(info.errore != ""){
        $('#formRegistrazione').html("<div id='errore'><p>"+info['messaggio']+"</p><p>"+info['errore']+"</p></div>");
    //}
};
