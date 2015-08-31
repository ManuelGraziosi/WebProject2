/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C,V;
var U = new U_operazioni();

var C_home = function(){
    U.aggiorna_grafica();
    $('.menu').removeClass('active');
    $('#home').addClass('active');
    $('title').html('Sammartino | Home');
    /**/
    $('#home').unbind().click(function(){
        $('title').html('Sammartino | Home');
        $('.menu').removeClass('active');
        $(this).addClass('active');
        U.richiestaHtmlServer('C_visualizzazione','home');
    });
};

C_home.prototype={
    caricaPagina : function(){
        var nomePagina = $(this).attr('title');
        $('title').html('Sammartino | '+nomePagina);
        $('.menu').removeClass('active');
        $(this).addClass('active');
        U.richiestaHtmlServer('C_visualizzazione',nomePagina);
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
                U.aggiorna_grafica();
                $('#amministra').tabs();
                
                $('#inviaProdotto').unbind().click(function(){
                    V = new V_amministrazione();
                    var dati = V.recuperaDatiProdotto('I');
                    $.ajax({
                        url:"index.php?controllore=C_amministratore&metodo=inserisciProdotto",
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
                
                $('#AggiornaProdotto').unbind().change(function(){
                    $(this).val();
                    $.ajax({
                        url:"index.php?controllore=&metodo="
                    });
                });
                
                $('#AggiornaProdottoSelezionato').unbind().click(function(){
                    V = new V_amministrazione();
                    var dati = V.recuperaDatiProdotto('A');
                    $.ajax({
                        url:"index.php?controllore=C_amministratore&metodo=aggiornaProdotto",
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
    
    registrazione : function(){
        C = new C_registrazione();
        V = new V_registrazione();
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
    
    ricerca : function(){
        C = new C_registrazione();
        V = new V_registrazione();
        var stringa = V.recuperaDatiricerca();
        C.ricerca(stringa);
    }
}
