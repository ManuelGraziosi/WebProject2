/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
var E_vetrina = function(){
    fareOrdine = new C_fareOrdine();
    $('.aggiungi').click(fareOrdine.inserisciProdottoOrdinato);
    $('.foto-space').click(fareOrdine.dettaglio);
    $('.cancella_prodotto').click(fareOrdine.rimuoviProdottoOrdinato);
};
/**
$.ajax({
    url:'JS/View/V_fareOrdine.js?_={timestamp}',
    dataType:'script',
    cashe:true,
    ifModified:true,
    async:false
});
$.ajax({
    url:'JS/Controller/C_fareOrdine.js?_={timestamp}',
    dataType:'script',
    cashe:true,
    ifModified:true,
    async:false,
    success:function(){/**/
        var fareOrdine = new C_fareOrdine();
        var vetrina = new C_vetrina();
        $('.aggiungi').click(fareOrdine.inserisciProdottoOrdinato);
        $('.foto-space').click(vetrina.dettaglio);
    //}
//});