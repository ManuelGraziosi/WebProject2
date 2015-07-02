/**/
var start=function(){
    
    $('#newsletter').click(function(){
        $(this).addClass('active');
        $('#carrello').removeClass('active');
        $('#home').removeClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=newsletter",
            type:'GET',
            dataType:"html",
            success:function(newsletter) {
                $('#mainright').html(newsletter);
            }
        });
    });
    
    
    $('#carrello').click(function(){
        $(this).addClass('active');
        $('#newsletter').removeClass('active');
        $('#home').removeClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=carrello",
            type:'GET',
            dataType:"html",
            success:function(carrello) {
                $('#mainright').html(carrello);
                $(document).ready(start);
            }
        });
    });
    
    
    carrello='<br><b>CARRELLO</b><table id="tab2" border><tr><td id="colonna"><b>Nome</b></td><td id="colonna"><b>Prezzo</b></td><td id="colonna"><b>Quantit&agrave</b></td><td id="colonna"><b>qunatit&agrave ordinata</b></td></tr></table>';
    $(carrello).appendTo('#carr');
    
    var n = 0;
    
    $(".aggiungi").click(function(){
        var url="index.php";
        var nome_prodotto=$('#NOME_PRODOTTO1').html();
        var quantita=$('#quantita').val();
        $.ajax({
            data:{"controllore":"C_fareOrdine","metodo":"inserisciProdottoOrdinato","nome_prodotto":nome_prodotto,"quantita":quantita},
            type:'GET',
            url:"index.php",
            dataType:"json",
            success:function(jsonData) {
                var listItem;
                n++;
                listItem = '<tr><td id="colonna">'+jsonData['_prodotto']["NOME_PRODOTTO"];
                listItem+='</td><td id="colonna">'+jsonData['_prodotto']["prezzo_kg"];
                listItem+='</td><td id="colonna">'+jsonData["quantita"]+'</td><td id="colonna">';
                listItem+='<input id="'+jsonData['_prodotto']["NOME_PRODOTTO"]+'" class="aggiorna'+n+'" type="text" size="4" value="'+jsonData["quantita"]+'"/></td><td id="colonna">';
                listItem+='<input id="'+jsonData['_prodotto']["NOME_PRODOTTO"]+'" class="rimuovi'+n+'" type="submit" name="submit" value="rimuovi"></td></tr>';
                $('#tab2').append(listItem);
                inserisciEvento(n);
            }
        });
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
var dati= new array();
var start = function(){
    $('#invia').click(function(){
        var controllore=$('#controllore').val();
        var metodo=$('#metodo').val();
        var nome=$('#nome').val();
        var cognome=$('#cognome').val();
        var email=$('#EMAIL').val();
        var password=$('#password').val();
        var password_1=$('#password_1').val();
        var via=$('#via').val();
        var citta=$('#citta').val();
        var CAP=$('#CAP').val();
        $.ajax({
            type:'GET',
            url:"index.php",
            dataType:"json",
            data:{"controllore":controllore,"metodo":metodo,"nome":nome,"cognome":cognome,"EMAIL": email,"password": password,"password_1": password_1,"via": via,"citta": citta,"CAP": CAP},
            success:function(jsonData) {
                
            }
        });
    });
};
/**/

$(document).ready(start);