var V_registrazione= function(){
    //this.dialogo();
};

V_registrazione.prototype.dialogo = function(){
    $('#formRegistrazione').dialog({
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
        "nome"       : $('#nome_registrazione').val(),
        "cognome"    : $('#cognome_registrazione').val(),
        "EMAIL"      : $('#EMAIL_registrazione').val(),
        "password"   : $('#password_registrazione').val(),
        "password_1" : $('#password_1_registrazione').val(),
        "via"        : $('#via_registrazione').val(),
        "citta"      : $('#citta_registrazione').val(),
        "CAP"        : $('#CAP_registrazione').val()
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
        $('#login').fadeOut(/**/{animated:'slow',duration:2000}/**/);
    } else {
        alert(info['errore']);
    }
};

V_registrazione.prototype.notificaRegistrazione = function(info){
    if(info.errore == ""){
        //$('#utente').html('<p>'+info['cliente']+'</p>');
        $('#formRegistrazione').html("<div id='successo'><p>registrazione avvenuta con successo</p></div>");
    } else {
        $('#formRegistrazione').html("<div id='errore'><p>"+info['errore']+"</p></div>");
    }
};