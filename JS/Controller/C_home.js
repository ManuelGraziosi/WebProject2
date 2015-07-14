/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var C_home = function(){
    $('body').append(" home ");
    
    $('#EMAIL_newsletter').blur(function(){
        var Cnews= new C_newsletter();
        Cnews.controllaEmail()
    });
    
    $('#submit_newsletter').click(function(){
        //$('body').append('cliccato su newsletter');
        var Cnews= new C_newsletter();
        $('#EMAIL_newsletter').blur(function(){Cnews.controllaEmail()});
        var Vnews=new V_newsletter();
        email=Vnews.recuperaEmail();
        
        Cnews.inviaEmail(email);
    });
    /**/
    $('#vetrina').click(function(){
        $('body').append('cliccato su vetrina');
    });
    
    $('#carrello').click(function(){
        $('body').append('cliccato su carrello');
    });
    
    $('#home').click(function(){
        $('body').append('cliccato su home');
    });
    
    $('#registrazione').click(function(){
        $.ajax({
            url:"index.php?controllore=C_visualizzazione&metodo=registrazione",
            success:function(html){
                $('#mainright').append(html);
                index = new C_registrazione();
                var view=new V_registrazione();
                index.controllaDati();
                $('#invia').click(function(){
                    $('body').append(" hai cliccato invia ");
                    var dati = view.recuperaDati();
                    index.inviaDati(dati);
                    $('#formRegistrazione').fadeOut();
                });
            }
        });
        
        
    });
    
    $('#login').click(function(){
        $('body').append('cliccato su login');
    });
    /**/
}
