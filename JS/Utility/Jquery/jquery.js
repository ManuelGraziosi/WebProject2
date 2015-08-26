/**/
var start=function(){
    
    var home=function(){
        $('title').html('Sammartino | Home');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        
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
    
    
    $('#buttonsearch').click(ricerca);

    $('#barracerca').keypress(ricerca);
    /**
    $('#invia').click(function(){
        var dati = new Object();
        dati = {
            "controllore": $('#controllore').val(),
            "metodo"     : $('#metodo').val(),
            "nome"       : $('#nome').val(),
            "cognome"    : $('#cognome').val(),
            "email"      : $('#EMAIL').val(),
            "password"   : $('#password').val(),
            "password_1" : $('#password_1').val(),
            "via"        : $('#via').val(),
            "citta"      : $('#citta').val(),
            "CAP"        : $('#CAP').val()
        }
        $.ajax({
            type:'GET',
            url:"index.php",
            dataType:"json",
            data:dati,
            success:function(jsonData) {
                
            }
        });
    });
/**/

    $('#invialogin').click(function(){
        EMAIL=$('#EMAIL').val();
        password=$('#password').val();
        $.ajax({
            type:'GET',
            url:"index.php",
            dataType:"json",
            data:{"controllore":"C_registrazione","metodo":"autentica","EMAIL": EMAIL,"password": password},
            success:function(){
                $('#mainright').html('<p>vai a vedere nel file di sessione se funziona</p>');
            }
        });
    });
    
}

var evento =function(){
    $('#inviaProdotto').click(function(){
        var dati = new Object();
        dati = {
            "NOME_PRODOTTO": $('#nome').val(),
            "foto"         : $('#foto').val(),
            "descrizione"  : $('#descrizione').val(),
            "categoria"    : $('#categoria').val(),
            "prezzo_kg"    : $('#prezzo').val(),
            "disponibilita": $('#disponibilita').val(),
            "controllore"  : "C_amministratore",
            "metodo"       : "inserisciProdotto"
        };
        $.ajax({
            url:"index.php",
            type:'GET',
            dataType:"html",
            data:dati,
            success:function(carrello) {
                $('#mainright').html(carrello);
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

$(document).ready(start);
/**/