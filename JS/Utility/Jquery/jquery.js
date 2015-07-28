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
    $('#buttonsearch').click(ricerca);
    /**/

    $('#barracerca').keypress(ricerca);
    
    
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


var ricerca=function(){
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
}

/**/
/**/
/**/

$(document).ready(start);
