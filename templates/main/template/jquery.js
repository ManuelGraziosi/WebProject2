var start=function(){
    
    carrello='<b>CARRELLO</b><table id="carrello" border><tr><th>Nome</th><th>Prezzo</th><th>Quantit&agrave</th><th>Disponibilit&agrave</th></tr></table>';
    $(carrello).appendTo('body');
    
    
    
    $(".aggiungi").click(function(){
        var url="index.php?controllore=C_fareOrdine&metodo=inserisciProdottoOrdinato&nome_prodotto=";
        $.ajax({
            type:"GET",
            url:url+this.id,
            success:function(jsonData) {
                var listItem;
                listItem = '<tr><td>'+jsonData['_prodotto']["NOME_PRODOTTO"]+'</td><td>'+jsonData['_prodotto']["prezzo_kg"]+'</td><td>'+jsonData["quantita"]+'</td><td>';
                listItem+=jsonData['_prodotto']['disponibilita']+'</td><td>';
                listItem+='<input id="'+jsonData['_prodotto']["NOME_PRODOTTO"]+'" class="rimuovi" type="submit" name="submit" value="rimuovi"></td></tr>';
                $('#carrello').append(listItem);
                inserisciEvento();
            }
        });
    });

}
    
function inserisciEvento(){
    $(".rimuovi").click(function(){
        var url="index.php?controllore=C_fareOrdine&metodo=rimuoviProdottoOrdinato&nome_prodotto="+this.id;
        $.ajax({
            type:"GET",
            url:url,
            success:function() {
                $('table#carrello').detach('tr').d;
            }
        });
    });
}
$(document).ready(start);