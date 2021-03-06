var V_amministrazione= function(){
    //this.dialogo();
};

V_amministrazione.prototype.mostraFormInserimento= function(invia){
    $('#tabellaForm').dialog({
        draggable:true,
        modal:true,
        resizable:false,
        title:"Inserimento nuovo prodotto",
        buttons:[{
                text:"conferma",
                click:function(){
                    invia();
                    $(this).dialog("close");
                }
            },
            {
                text:"annulla",
                click:function(){
                    $(this).dialog("close");
                }
            }],
        close: $('#tabellaForm').remove()
    });
};
/**/
V_amministrazione.prototype.notificaCancellazione= function(){
    alert('prodotto eliminato');
    window.location.reload();
};
/**/
V_amministrazione.prototype.mostraFormModifica= function(invia){
    $('#tabellaForm').dialog({
        draggable:true,
        modal:true,
        resizable:false,
        title:"Modifica Prodotto",
        buttons:[{
                text:"conferma",
                click:function(){invia();$(this).dialog("close");}
            },
            {
                text:"annulla",
                click:function(){
                    $(this).dialog("close");
                }
            }],
        close: $('#tabellaForm').remove()
    });
};

/**/
V_amministrazione.prototype.recuperaDatiProdotto=function(){
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
    $('#tabellaForm #nome').val(dati['NOME_PRODOTTO']);
    $('#tabellaForm #foto').val(dati['foto']);
    $('#tabellaForm #descrizione').val(dati['descrizione']);
    $('#tabellaForm #categoria').val(dati['categoria']);
    $('#tabellaForm #prezzo').val(dati['prezzo_kg']);
    $('#tabellaForm #disponibilita').val(dati['disponibilita']);
}

V_amministrazione.prototype.inizializzaForm=function(){
    $('#tabellaForm .dati').each(function(){
        $(this).val("");
    });
}

V_amministrazione.prototype.notificaErroreLoginAdmin= function(){
    alert('email e/o password sono errati');
};

V_amministrazione.prototype.recuperaDatiLogin= function(){
    return {username:$('#username').val(),password:$('#password').val()};
};