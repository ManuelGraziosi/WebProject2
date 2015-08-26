/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C,V;

var C_home = function(){
    $('body').append("e partito il C_home");
    $('title').html('Sammartino | Home');
    $('.menu').removeClass('active');
    $('#home').addClass('active');
    
    $('#home').click(function(){
        $('body').append('cliccato su home');
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
    });
    
    $('#chisiamo').click(function(){
        $('body').append('cliccato su chi siamo');
        $('title').html('Sammartino | Chi siamo');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=chisiamo",
            type:'GET',
            dataType:"html",
            success:function(chisiamo) {
                $('#mainright').html(chisiamo);
            }
        });
    });
    
    $('#dovesiamo').click(function(){
        $('body').append('cliccato su dovesiamo');
        $('title').html('Sammartino | Dove siamo');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=dovesiamo",
            type:'GET',
            dataType:"html",
            success:function(dovesiamo) {
                $('#mainright').html(dovesiamo);
            }
        });
    });
    
    $('#galleria').click(function(){
        $('body').append('cliccato su galleria');
        $('title').html('Sammartino | Galleria');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=galleria",
            type:'GET',
            dataType:"html",
            success:function(galleria) {
                $('#mainright').html(galleria);
            }
        });
    });
    
    $('#vetrina').click(function(){
        $('body').append('cliccato su vetrina');
        $('title').html('Sammartino | Vetrina');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=vetrina",
            type:'GET',
            dataType:"html",
            success:function(chisiamo) {
                $('#mainright').html(chisiamo);
            }
        });
    });
    
    $('#carrello').click(function(){
        $('body').append('cliccato su carrello');
        $('title').html('Sammartino | Carrello');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=carrello",
            type:'GET',
            dataType:"html",
            success:function(chisiamo) {
                $('#mainright').html(chisiamo);
            }
        });
    });
    
    $('#amministratore').click(function(){
        $('body').append('cliccato su amministratore');
        $('title').html('Sammartino | Amministratore');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=amministrazione",
            type:'GET',
            dataType:"html",
            success:function(form) {
                $('#mainright').html(form);
                $('#tab').tabs();
                
                $('#inviaProdotto').click(function(){
                    var dati = new Object();
                    dati = {
                        "NOME_PRODOTTO": $('#nome_I').val(),
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
                
                $('#EliminaProdotto').click(function(){
                    var dati = new Object();
                    dati = {
                        "NOME_PRODOTTO": $('#nome_E').val(),
                        "controllore"  : "C_amministratore",
                        "metodo"       : "eliminaProdotto"
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
                
                $('#AggiornaProdotto').click(function(){
                    var dati = new Object();
                    dati = {
                        "NOME_PRODOTTO": $('#nome_A').val(),
                        "foto"         : $('#foto_A').val(),
                        "descrizione"  : $('#descrizione_A').val(),
                        "categoria"    : $('#categoria_A').val(),
                        "prezzo_kg"    : $('#prezzo_A').val(),
                        "disponibilita": $('#disponibilita_A').val(),
                        "controllore"  : "C_amministratore",
                        "metodo"       : "aggiornaProdotto"
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
        });
    });
    
    $('#newsletter').click(function(){
        C=new C_newsletter();
        V=new V_newsletter();
        C.controllaEmail();
        //$('#submit_newsletter').button();
    });
    
    $('#submit_newsletter').click(function(){
        email=V.recuperaEmail();
        /**/
        if(C.controllaEmail()){
            C.inviaEmail(email);
        }
        else {
            if(!email.EMAIL){
                $('#notifica_newsletter').html('ERRORE campo vuoto').css("color","red");
            }
            else{
                $('#notifica_newsletter').html('ERRORE formato email ').css("color","red");
            }
        }/**/
    });
    
    /**/
    
    $('#registrazione').click(function(){
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=registrazione",
            success:function(html){
                $('#mainright').append(html);
                C = new C_registrazione();
                var V=new V_registrazione();
                C.controllaDati();
                $('#invia').click(function(){
                    $('body').append(" hai cliccato invia ");
                    var dati = V.recuperaDati();
                    C.inviaDati(dati);
                    //$('#formRegistrazione').fadeOut();
                });
            }
        });
        
        
    });
    
    $('#login').click(function(){
        $('body').append('cliccato su login');
        C = new C_registrazione();
    });
    /**/
}
