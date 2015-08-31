var V_amministrazione= function(){
    //this.dialogo();
};

/**/
V_amministrazione.prototype.recuperaDatiProdotto=function(a){
    //this.dati = new Array();
    var dati = new Object();
    dati = {
        "NOME_PRODOTTO": $('#nome_'+a).val(),
        "foto"         : $('#foto_'+a).val(),
        "descrizione"  : $('#descrizione_'+a).val(),
        "categoria"    : $('#categoria_'+a).val(),
        "prezzo_kg"    : $('#prezzo_'+a).val(),
        "disponibilita": $('#disponibilita_'+a).val()
    };
    return dati;
}

V_amministrazione.prototype.visualizzaDatiProdotto=function(dati){
    //this.dati = new Array();
    a='A';
    $('#nome_'+a).val(dati['NOME_PRODOTTO']);
    $('#foto_'+a).val(dati['foto']);
    $('#descrizione_'+a).val(dati['descrizione']);
    $('#categoria_'+a).val(dati['categoria']);
    $('#prezzo_'+a).val(dati['prezzo']);
    $('#disponibilita_'+a).val(dati['disponibilita']);
}
