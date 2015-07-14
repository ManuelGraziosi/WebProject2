var V_registrazione= function(){
    $('#formRegistrazione').dialog({
        draggable:true,
        modal:true,
        resizable:false,
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
V_registrazione.prototype.notifica=function(){
    $('#formRegistrazione').html("registrazione avvenuta con successo");
}