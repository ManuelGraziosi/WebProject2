var V_amministrazione= function(){
    //this.dialogo();
};

V_amministrazione.prototype.dialogo= function(){
    $('#tabellaForm').dialog({
        draggable:false,
        modal:true,
        resizable:false,
        minWidth:400,
        title:"Aggiorna Prodotto"
    });
};

/**/
V_amministrazione.prototype.recuperaDatiProdotto=function(){
    //this.dati = new Array();
    var nome = $(this).attr('title');
    $('body').append(nome);
    var dati = new Object();
    dati = {
        "NOME_PRODOTTO": $('#'+nome+'_nome').val(),
        "foto"         : $('#'+nome+'_foto').val(),
        "descrizione"  : $('#'+nome+'_descrizione').val(),
        "categoria"    : $('#'+nome+'_categoria').val(),
        "prezzo_kg"    : $('#'+nome+'_prezzo').val(),
        "disponibilita": $('#'+nome+'_disponibilita').val()
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
