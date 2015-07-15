/**/
var start=function(){
    
    var home=function(){
        $('title').html('Sammartino | Home');
        
        $('#login').removeClass('active');
        $('#vetrina').removeClass('active');
        $('#chisiamo').removeClass('active');
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
    };
    $('#home').click(home);
    
    $('#home').ready(home);
    
    /**/
    $('#buttonsearch').click(function(){
        $('body').append("cliccato ricerca");
        var r=$('#barracerca').val();
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=ricerca&ricerca="+r,
            type:'GET',
            dataType:"html",
            success:function(prod) {
                $('#mainright').html(prod);
            }
        });
    });
    /**/
    
    $('#chisiamo').click(function(){
        $('title').html('Sammartino | Chi Siamo');
        $('#vetrina').removeClass('active');
        $('#home').removeClass('active');
        $('#carrello').removeClass('active');
        $('#login').removeClass('active');
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=chisiamo",
            type:'GET',
            dataType:"html",
            success:function(chisiamo) {
                $('#mainright').html(chisiamo);
                document.reload(aggiungi);
            }
        });
        aggiungi();
    });



    $('#vetrina').click(function(){
        $('title').html('Sammartino | Vetrina');
        
        $('#login').removeClass('active');
        $('#registrazione').removeClass('active');
        $('#chisiamo').removeClass('active');
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
                document.reload(aggiungi);
            }
        });
        aggiungi();
    });
    
    
    
    
    
    $('#carrello').click(function(){
        $('title').html('Sammartino | Carrello');
        $('#chisiamo').removeClass('active');        
        $('#login').removeClass('active');
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
            }
        });
    });
    
    
    carrello='<br><b>CARRELLO</b><table id="tab2" border><tr><td id="colonna"><b>Nome</b></td><td id="colonna"><b>Prezzo</b></td><td id="colonna"><b>Quantit&agrave</b></td><td id="colonna"><b>qunatit&agrave ordinata</b></td></tr></table>';
    $(carrello).appendTo('#carr');
    
    var n = 0;


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


$('#invialogin').click(function(){
                        EMAIL=$('#EMAIL').val();
                        password=$('#password').val();
                        $.ajax({
                            type:'GET',
                            url:"index.php",
                            dataType:"json",
                            data:{"controllore":"C_registrazione","metodo":"autentica","EMAIL": EMAIL,"password": password},
                            success:function(){
                                $('#mainright').html('<p>vai a vedere nel database se funziona</p>');
                            }
                        });
                    });
    
}
var aggiungi= function(){
        $(".aggiungi").each(function(){
            this.click(function(){
            var url="index.php";
            var nome_prodotto=this.attr("id");
            //var quantita=$('#quantita').val();
            $.ajax({
                data:{"controllore":"C_fareOrdine","metodo":"inserisciProdottoOrdinato","nome_prodotto":nome_prodotto,"quantita":quantita},
                type:'GET',
                url:"index.php",
                dataType:"json",
                    success:function(jsonData) {
                        $('#mainright').html(jsonData);
                    }
                });
            });
        })
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

$(document).ready(function() {
    var menu = $("#menucont");
    var posizione = menu.position();
    // intercettiamo qui l'evento "scroll"                 
    $(window).scroll(function() {
        // "$(window).scrollTop()" ci dice di quanto abbiamo scrollato la pagina
        if ($(window).scrollTop() >= posizione.top) {
            // abbiamo scrollato oltre il div, dobbiamo bloccarlo
            $("#menucont").addClass("menu_scroll");
        }
        else {
            // abbiamo scrollato verso l'alto, sopra il div, possiamo sbloccarlo
            $("#menucont").removeClass("menu_scroll"); 
        }
    });
});


$(document).ready(function()
{
    $('#menufisarmonica').accordion({
        active:false,
        animated:'bounceslide',
        collapsible:true
    });
});