var V_amministrazione= function(){
    //this.dialogo();
};

V_amministrazione.prototype.mostraForm= function(invia){
    var U = new U_operazioni();
    $('#tabellaForm').fadeIn({animated:'slow',duration:1000});
    U.dialogoModaleConferma('#tabellaForm',invia);
};

/**/
V_amministrazione.prototype.recuperaDatiProdotto=function(){
    //this.dati = new Array();
    var nome = $(this).attr('title');
    $('body').append(nome);
    var dati = new Object();
    dati = {
        "NOME_PRODOTTO": $('#tabellaForm #nome').val(),
        "foto"         : $('#tabellaForm #foto').val(),
        "descrizione"  : $('#tabellaForm #descrizione').val(),
        "categoria"    : $('#tabellaForm #categoria').val(),
        "prezzo_kg"    : $('#tabellaForm #prezzo').val(),
        "disponibilita": $('#tabellaForm #disponibilita').val()
    };
    $('#tabellaForm .dati').each(function(){
        $(this).val("");
    });
    $('#tabellaForm').fadeOut({animated:'slow',duration:1000});
    return dati;
}

V_amministrazione.prototype.visualizzaDatiProdotto=function(dati){
    //this.dati = new Array();
    $('#tabellaForm #nome').val(dati['NOME_PRODOTTO']);
    $('#tabellaForm #foto').val(dati['foto']);
    $('#tabellaForm #descrizione').val(dati['descrizione']);
    $('#tabellaForm #categoria').val(dati['categoria']);
    $('#tabellaForm #prezzo').val(dati['prezzo_kg']);
    $('#tabellaForm #disponibilita').val(dati['disponibilita']);
}
