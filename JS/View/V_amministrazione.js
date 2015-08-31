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