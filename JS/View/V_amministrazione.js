var V_amministrazione= function(){
    //this.dialogo();
};

/**/
V_amministrazione.prototype.recuperaDatiProdotto=function(a){
    //this.dati = new Array();
    var dati = new Object();
    dati = {
        "NOME_PRODOTTO": $('#nome').val(),
        "foto"         : $('#foto').val(),
        "descrizione"  : $('#descrizione').val(),
        "categoria"    : $('#categoria').val(),
        "prezzo_kg"    : $('#prezzo').val(),
        "disponibilita": $('#disponibilita').val()
    };
    return dati;
}

V_amministrazione.prototype.visualizzaDatiProdotto=function(dati){
    //this.dati = new Array();
    $('#nome').val(dati['NOME_PRODOTTO']);
    $('#foto').val(dati['foto']);
    $('#descrizione').val(dati['descrizione']);
    $('#categoria').val(dati['categoria']);
    $('#prezzo_kg').val(dati['prezzo_kg']);
    $('#disponibilita').val(dati['disponibilita']);
}
