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
            event.stopPropagation();
            $(document).scrollTop(0);
            var nomePagina = $(event.target).attr('title');
            $('title').html('Sammartino | '+nomePagina);
            $('.menu').removeClass('active');
            $(event.target).addClass('active');
            $.ajax({
                url:'index.php?controllore=C_visualizzazione&metodo='+nomePagina,
                datatype:"html",
                type:'POST',
                ifModified:true,
//                async:false,
                success:function(html){
                    $('#mainright').html(html);
//                    $.ajax({
//                        url:"JS/Event/E_"+nomePagina+".js",
//                        dataType:'script',
//                        type:'POST',
//                        async:false
//                    });
                }
            }).done(
                $.ajax({
                    url:"JS/Event/E_"+nomePagina+".js",
                    dataType:'script',
                    type:'POST',
//                    async:false
                })
            );
        });
        $('#registrazione').click(function(event){
            event.stopPropagation();
            var nomePagina = $(event.target).attr('id');
            $.ajax({
                url:'index.php?controllore=C_visualizzazione&metodo='+nomePagina,
                datatype:"html",
                type:'POST',
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
        
        $('#invialogin').click(function(event){
            event.stopPropagation();
            var dati = V.recuperaDatiLogin();
            if(dati.EMAIL || dati.password){
            C.inviaDatiLogin(dati);
            }
            else{
                alert("Inserire Username e Password");
            }
        });
        
        $('#logout').click(function(event){
            event.stopPropagation();
            C.richiestaLogout();
        });
        
        $('#EMAIL_newsletter').change(function(event){
            event.stopPropagation();
            C.controllaEmailNewsletter();
            //$('#submit_newsletter').button();
        });
        
        $('#submit_newsletter').click(function(event){
            event.stopPropagation();
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
        
        $('#searchimg').click(function(event){
            event.stopPropagation();
            var C =  new C_vetrina();
            var V =  new V_vetrina();
            var stringa = V.recuperaDatiRicerca();
            C.ricerca(stringa);
        });
        
        $('#barracerca').keyup(function(event){
            event.stopPropagation();
            var C =  new C_vetrina();
            var V =  new V_vetrina();
            var stringa = V.recuperaDatiRicerca();
            C.ricerca(stringa);
        });
    }
};