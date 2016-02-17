/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *//**
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
    success:function(){/**/
        fareOrdine = new C_fareOrdine();
        $('.cancella_prodotto').click(fareOrdine.rimuoviProdottoOrdinato);
        $('.n_quantita').change(fareOrdine.aggiornaProdottoOrdinato);
    //}
//});