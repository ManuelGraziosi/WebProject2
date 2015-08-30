var V_registrazione= function(){
    //this.dialogo();
};

V_registrazione.prototype.dialogo= function(){
    $('#formRegistrazione').dialog({
        draggable:false,
        modal:true,
        resizable:false,
        minWidth:320,
        title:"Registrazione"
    });
    $('#invia').button();
};

/**/
V_registrazione.prototype.recuperaDati=function(){
    $('body').append("recuperati i dati</br> ");
    //this.dati = new Array();
    var dati = new Object();
    dati={
        "nome"       : $('#nome').val(),
        "cognome"    : $('#cognome').val(),
        "EMAIL"      : $('#EMAIL_registrazione').val(),
        "password"   : $('#password_registrazione').val(),
        "password_1" : $('#password_1_registrazione').val(),
        "via"        : $('#via').val(),
        "citta"      : $('#citta').val(),
        "CAP"        : $('#CAP').val()
    };
    return dati;
}

V_registrazione.prototype.recuperaDatiLogin=function(){
    $('body').append("recuperati dati dal form Login </br>");
    //this.dati = new Array();
    var dati = new Object();
    dati={
        "EMAIL"      : $('#EMAIL').val(),
        "password"   : $('#password').val()
    };
    return dati;
}
/**/

V_registrazione.prototype.notifica=function(){
    $('#formRegistrazione').html("registrazione avvenuta con successo");
}

V_registrazione.prototype.recuperaDatiricerca=function(){
    $('body').append("recuperati dati dal text di ricerca </br>");
    //this.dati = new Array();
    var dati = new Object();
    dati = {
        "ricerca" : $('#barracerca').val()
    };
    return dati;
}