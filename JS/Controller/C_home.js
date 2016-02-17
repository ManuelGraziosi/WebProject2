/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var C_home=function(){
    $('button').button();
    $(document).scrollTop(0);
}

C_home.prototype={
    assegnaEventi: function(){
        var C = new C_registrazione();
        var V = new V_registrazione();
        $('.menu').click(function(event){
            $(document).scrollTop(0);
            var nomePagina = $(event.target).attr('title');
            $('title').html('Sammartino | '+nomePagina);
            $('.menu').removeClass('active');
            $(event.target).addClass('active');
            $.ajax({
                url:'index.php?controllore=C_visualizzazione&metodo='+nomePagina,
                datatype:"html",
                ifModified:true,
                async:false,
                success:function(html){
                    $('#mainright').html(html);
                    $.ajax({
                        url:"JS/Event/E_"+nomePagina+".js",
                        dataType:'script',
                        async:false
                    });
                }
            });
        });
        $('#registrazione').click(function(event){
            var nomePagina = $(event.target).attr('id');
            $.ajax({
                url:'index.php?controllore=C_visualizzazione&metodo='+nomePagina,
                datatype:"html",
                ifModified:true,
                success:function(html){
                    $('#notifica').html(html);
                    V.dialogo();
                    C.controllaDati();
                    $('#formRegistrazione #invia').click(function(){
                        var dati =V.recuperaDatiRegistrazione();
                        C.inviaDatiRegistrazione(dati);
                    });
                }
            });
        });
        
        $('#invialogin').click(function(){
            var dati = V.recuperaDatiLogin();
            C.inviaDatiLogin(dati);
        });
        
        $('#logout').click(function(){
            C.richiestaLogout();
        });
        
        $('#EMAIL_newsletter').change(function(){
            C.controllaEmailNewsletter();
            //$('#submit_newsletter').button();
        });
        
        $('#submit_newsletter').click(function(){
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
            }
        });
        
        $('#searchimg').click(function(){
            var C =  new C_vetrina();
            var V =  new V_vetrina();
            var stringa = V.recuperaDatiRicerca();
            C.ricerca(stringa);
        });
        
        $('#barracerca').keyup(function(){
            var C =  new C_vetrina();
            var V =  new V_vetrina();
            var stringa = V.recuperaDatiRicerca();
            C.ricerca(stringa);
        });
    }
};