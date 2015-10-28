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
V_registrazione.prototype.recuperaDatiRegistrazione=function(){
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

V_registrazione.prototype.recuperaDatiLogin=function(){
    //this.dati = new Array();
    var dati = new Object();
    dati={
        "EMAIL"      : $('#EMAIL').val(),
        "password"   : $('#password').val()
    };
    return dati;
};
/**/

V_registrazione.prototype.notifica=function(){
    $('#formRegistrazione').html("registrazione avvenuta con successo");
};

V_registrazione.prototype.recuperaDatiricerca=function(){
    $('body').append("recuperati dati dal text di ricerca </br>");
    //this.dati = new Array();
    var dati = new Object();
    dati = {
        "ricerca" : $('#barracerca').val()
    };
    return dati;
};