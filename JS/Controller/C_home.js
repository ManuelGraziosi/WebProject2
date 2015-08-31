/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C,V;

var C_home = function(){
    aggiorna_grafica();
    $('.menu').removeClass('active');
    $('#home').addClass('active');
    /**/
    $('#home').unbind().click(function(){
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
};

C_home.prototype={
    chisiamo: function(){
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
    },
    
    dovesiamo:function(){
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
    },
    
    galleria : function(){
        $('title').html('Sammartino | Galleria');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=galleria",
            //url:"galleria/index.html",
            type:'GET',
            dataType:"html",
            success:function(galleria) {
                $('#mainright').html(galleria);
            }
        });
    },
    
    vetrina : function(){
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
    },
    
    carrello : function(){
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
    },
    
    amministratore:function(){
        $('title').html('Sammartino | Amministratore');
        $('.menu').removeClass('active');        
        $(this).addClass('active');
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=amministrazione",
            type:'GET',
            dataType:"html",
            success:function(form) {
                $('#mainright').html(form);
                aggiorna_grafica();
                $('#amministra').tabs();
                
                $('#inviaProdotto').unbind().click(function(){
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
                        success:function(successo) {
                            if(!successo){
                                alert("prodotto inserito con successo");
                            }
                            else{
                                alert("errore di inserimento");
                            }
                        }
                    });
                });
                
                $('#EliminaProdotto').unbind().click(function(){
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
                
                $('#AggiornaProdotto').unbind().click(function(){
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
    },
    
    newsletter : function(){
        C=new C_newsletter();
        V=new V_newsletter();
        C.controllaEmail();
        //$('#submit_newsletter').button();
    },
    
    submit_newsletter : function(){
        C=new C_newsletter();
        V=new V_newsletter();
        var email = V.recuperaEmail();
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
    },
    
    /**/
    
    registrazione : function(){
        
        C = new C_registrazione();
        V = new V_registrazione();
        //C.controllaDati();
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=registrazione",
            success:function(html){
                $('#mainright').append(html);
                C.controllaDati();
                V.dialogo();
                $('#invia').unbind().click(function(){
                    $('body').append(" hai cliccato invia ");
                    var dati = V.recuperaDatiRegistrazione();
                    C.inviaDatiRegistrazione(dati);
                    //$('#formRegistrazione').fadeOut();
                });
            }
        });
        
        
    },
    
    login : function(){
        $('#invialogin').unbind().click(function(){
            C = new C_registrazione();
            V = new V_registrazione();
            var dati= V.recuperaDatiLogin();
            C.inviaDatiLogin(dati);
        });
    },
    
    
    ricerca:function(){
        C = new C_registrazione();
        V = new V_registrazione();
        var stringa = V.recuperaDatiricerca();
        C.ricerca(stringa);
    }
}
