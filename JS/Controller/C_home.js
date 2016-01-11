/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C,V;
var U = new U_operazioni();

var C_home = function(){
    U.aggiorna_grafica();
    $('#home').addClass('active');
    $('title').html('Sammartino | Home');
};

C_home.prototype={
    caricaPaginaHtml : function(){
        var nomePagina = $(this).attr('title');
        $('title').html('Sammartino | '+nomePagina);
        $('.menu').removeClass('active');
        $(this).addClass('active');
        U.richiestaHtmlServer('C_visualizzazione',nomePagina,'#mainright');
    },
    
    amministratore : function(){
        C = new C_amministrazione();
        
    },
    
    newsletter : function(){
        C=new C_newsletter();
        V=new V_newsletter();
        C.controllaEmailNewsletter();
        //$('#submit_newsletter').button();
    },
    
    submit_newsletter : function(){
        C=new C_newsletter();
        V=new V_newsletter();
        var email = V.recuperaEmailNewsletter();
        /*il ! e da cancellare*/
        if(C.controllaEmailNewsletter()){
            
            C.inviaEmailNewsletter(email);
        }
        else {
            if(!email.EMAIL){
                $('#notifica_newsletter').html('ERRORE campo vuoto').css("color","red");
            }
            else{
                $('#notifica_newsletter').html('ERRORE formato email').css("color","red");
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
                V.dialogo();//non li dovete invertire senno si buttano giorni xD
                C.controllaDati();
                $('#invia').click(function(){
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
    
    logout : function(){
        //$('#invialogout').unbind().click(function(){
            C = new C_registrazione();
            C.richiestaLogout();
        //});
    },
    
    ricerca : function(){
        C = new C_registrazione();
        V = new V_registrazione();
        var stringa = V.recuperaDatiricerca();
        C.ricerca(stringa);
    },
    
    mostraCarrello : function(){
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=carrello",
            metod:"GET",
            //data:{"NOME_PRODOTTO":dati},
            dataType:"HTML",
            success:function(d){
                $('#mainright').html(d);
            }
        });
    }
};