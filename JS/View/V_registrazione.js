var V_registrazione= function(){
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
    $('body').append("recuperadati ");
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
        "CAP"        : $('#CAP').val(),
        "controllore":"C_registrazione",
        "metodo"     :"creaCliente"
    }
    return dati;
}
/**/
V_registrazione.prototype.datilogin=function(){
    $('body').append("datilogin ");
    //this.dati = new Array();
    var dati = new Object();
    dati={
        "EMAIL"      :$('#EMAIL').val(),
        "password"   :$('#password').val(),
        "controllore":"C_registrazione",
        "metodo"     :"autentica"
    }
    return dati;
}

V_registrazione.prototype.notifica=function(){
    $('#formRegistrazione').html("registrazione avvenuta con successo");
}