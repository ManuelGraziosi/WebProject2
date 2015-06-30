var start=function(){
    
    carrello='<br><b>CARRELLO</b><table id="tab2" border><tr><td id="colonna"><b>Nome</b></td><td id="colonna"><b>Prezzo</b></td><td id="colonna"><b>Quantit&agrave</b></td><td id="colonna"><b>Disponibilit&agrave</b></td></tr></table>';
    $(carrello).appendTo('#carr');
    
    
    
    $(".aggiungi").click(function(){
        var url="index.php?controllore=C_fareOrdine&metodo=inserisciProdottoOrdinato&nome_prodotto=";
        $.ajax({
            type:"GET",
            url:url+this.id,
            success:function(jsonData) {
                var listItem;
                listItem = '<tr><td id="colonna">'+jsonData['_prodotto']["NOME_PRODOTTO"]+'</td><td id="colonna">'+jsonData['_prodotto']["prezzo_kg"]+'</td><td id="colonna">'+jsonData["quantita"]+'</td><td id="colonna">';
                listItem+=jsonData['_prodotto']['disponibilita']+'</td><td id="colonna">';
                listItem+='<input id="'+jsonData['_prodotto']["NOME_PRODOTTO"]+'" class="rimuovi" type="submit" name="submit" value="rimuovi"></td></tr>';
                $('#tab2').append(listItem);
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
                $('table#carrello').detach('tr');
            }
        });
    });
}
$(document).ready(start);