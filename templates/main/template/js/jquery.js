/**/
var start=function(){
    
    carrello='<br><b>CARRELLO</b><table id="tab2" border><tr><td id="colonna"><b>Nome</b></td><td id="colonna"><b>Prezzo</b></td><td id="colonna"><b>Quantit&agrave</b></td><td id="colonna"><b>qunatit&agrave ordinata</b></td></tr></table>';
    $(carrello).appendTo('#carr');
    
    var n = 0;
    
    $(".aggiungi").click(function(){
        var url="index.php";
        var nome_prodotto=$('#nome_prodotto1').val();
        var quantita=$('#quantita').val();
        html='<p>'+nome_prodotto+'</p>';
        $(html).appendTo('body');
        /**/$.ajax({
            data:{"controllore":"C_fareOrdine","metodo":"inserisciProdottoOrdinato","nome_prodotto":nome_prodotto,"quantita":25},
            type:'GET',
            url:"index.php",
            dataType:"json",
            success:function(jsonData) {
                var listItem;
                n++;
                listItem = '<tr><td id="colonna">'+jsonData['_prodotto']["NOME_PRODOTTO"];
                listItem+='</td><td id="colonna">'+jsonData['_prodotto']["prezzo_kg"];
                listItem+='</td><td id="colonna">'+jsonData["quantita"]+'</td><td id="colonna">';
                listItem+='<input id="'+jsonData['_prodotto']["NOME_PRODOTTO"]+'" class="aggiorna'+n+'" type="text" size="4"/></td><td id="colonna">';
                listItem+='<input id="'+jsonData['_prodotto']["NOME_PRODOTTO"]+'" class="rimuovi'+n+'" type="submit" name="submit" value="rimuovi"></td></tr>';
                $('#tab2').append(listItem);
                inserisciEvento(n);
            }
        });/**/
    });

}

function inserisciEvento(n){
    $('.rimuovi'+n).click(function(){
        var url="index.php?controllore=C_fareOrdine&metodo=rimuoviProdottoOrdinato&nome_prodotto="+this.id;
        $.ajax({
            type:"GET",
            url:url,
            success:function() {
                $('tab2 rimuovi'+n).append('<p>daniele scarpone daniele scarpone</p>');
            }
        });
    });
    $('.aggiorna'+n).blur(function(){
        var url="index.php?controllore=C_fareOrdine&metodo=aggiornaProdottoOrdinato&nome_prodotto="+this.id+"&quantita="+this.value;
        $.ajax({
            type:"GET",
            url:url,
            success:function() {
                $('tab2 rimuovi'+n).append('<p>daniele scarpone daniele scarpone</p>');
            }
        });
    });
}
/**/


/**
var start=function(){
    $('#riga1').each(function(n){
        
    })
}*/
$(document).ready(start);