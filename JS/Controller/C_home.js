/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var U = new U_operazioni();

var C_home = function(){
    U.aggiorna_grafica();
    $('#home').addClass('active');
    $('title').html('Sammartino | Home');
};

C_home.prototype={
    Eventi:function(){
        $('.menu').click(this.caricaPaginaHtml);//richiede tutte le pagine del menu
    
    
        $('#carrello').click(this.mostraCarrello);
        $('#amministrazione').click(this.amministratore);
        /**/$('#newsletter').click(this.newsletter);
        $('#submit_newsletter').click(this.submit_newsletter);
        $('#registrazione').click(this.registrazione);
        $('#invialogin'/**login/**/).click(this.login);
        $('#logout').click(this.logout);
        $('#searchimg').click(this.ricerca);
        $('#barracerca').keyup(this.ricerca);
        /**$('#barracerca').keypress(function(evento){
            if(evento.which == 13){//13 corrisponde al tasto invio
                home.ricerca();
            }
        });/**/
    },
    
    caricaPaginaHtml : function(){
        var nomePagina = $(this).attr('title');
        $('title').html('Sammartino | '+nomePagina);
        $('.menu').removeClass('active');
        $(this).addClass('active');
        $(document).scrollTop(0);
        U.richiestaHtmlServer('C_visualizzazione',nomePagina,'#mainright');
    },
    
    amministratore : function(){
        var C =  new C_amministrazione();
        
    },
    
    newsletter : function(){
        var C = new C_newsletter();
        var V = new V_newsletter();
        C.controllaEmailNewsletter();
        //$('#submit_newsletter').button();
    },
    
    submit_newsletter : function(){
        var C = new C_newsletter();
        var V = new V_newsletter();
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
        var C =  new C_registrazione();
         V =  new V_registrazione();
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
        var C =  new C_registrazione();
        var V =  new V_registrazione();
        var dati= V.recuperaDatiLogin();
        C.inviaDatiLogin(dati);
    },
    
    logout : function(){
        var C =  new C_registrazione();
        C.richiestaLogout();
    },
    
    ricerca : function(){
        var C =  new C_vetrina();
        var V =  new V_vetrina();
        var stringa = V.recuperaDatiRicerca();
        C.ricerca(stringa);
    },
    
    mostraCarrello : function(){
        var nomePagina = $(this).attr('title');
        //si dovrebbe trovare una soluzione
        $('title').html('Sammartino | '+nomePagina);
        $('.menu').removeClass('active');
        $(this).addClass('active');
        //a queste
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=carrello",
            metod:"GET",
            //data:{"NOME_PRODOTTO":dati},
            dataType:"HTML",
            success:function(d){
                $('#mainright').html(d);
                $(function(){
                    var c= new C_vetrina();
                    $('.cancella_prodotto').click(c.eliminareprodotto/**($('.cancella_prodotto').attr('title'))/**/);
                });
            }
        });
    }
};
