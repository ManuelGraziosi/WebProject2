/**/
var start=function(){
    
    var home=function(){
        $('title').html('home');
        
        $(this).addClass('active');
        $('#carrello').removeClass('active');
        $('#registrazione').removeClass('active');
        $('#newsletter').removeClass('active');
        
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=home",
            type:'GET',
            dataType:"html",
            success:function(home) {
                $('#mainright').html(home);
            }
        });
    }
    $('#home').click(home);
    
    $('#home').ready(home);
    
    
    $('#registrazione').click(function(){
        $('title').html('registrazione cliente');
        
        $(this).addClass('active');
        $('#carrello').removeClass('active');
        $('#home').removeClass('active');
        $('#newsletter').removeClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=registrazione",
            type:'GET',
            dataType:"html",
            success:function(registrazione) {
                $('#mainright').html(registrazione);
            }
        });
    });
    
    
    $('#newsletter').click(function(){
        $('title').html('newsletter');
        
        $('#registrazione').removeClass('active');
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
    
    
    $('#vetrina').click(function(){
        $('title').html('vetrina');
        
        $('#registrazione').removeClass('active');
        $(this).addClass('active');
        $('#newsletter').removeClass('active');
        $('#home').removeClass('active');
        $('#carrello').removeClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=vetrina",
            type:'GET',
            dataType:"html",
            success:function(vetrina) {
                $('#mainright').html(vetrina);
                //$(document).ready(start);
            }
        });
        aggiungi();
    });
    
    
    
    
    
    $('#carrello').click(function(){
        $('title').html('carrello');
        
        $('#registrazione').removeClass('active');
        $(this).addClass('active');
        $('#newsletter').removeClass('active');
        $('#home').removeClass('active');
        $('#vetrina').removeClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=carrello",
            type:'GET',
            dataType:"html",
            success:function(carrello) {
                $('#mainright').html(carrello);
                //$(document).ready(start);
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



    var aggiungi= function(){
        $('#bottone1').click(function(){
            var nome=$('#nome_prodotto').html();
            var quantita=$('#quantita').val();
            $.ajax({
                type:'GET',
                url:"index.php?controllore=C_fareOrdine&metodo=inserisciProdottoOrdinato&nome_ordinato"+nome+"quantita="+quantita,
                dataType:"json",
                success:function(jsonData) {
                    $('#mainright').html(jsonData);
                }
            });
        });
    }
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
/**/
    
/**/

$(document).ready(start);