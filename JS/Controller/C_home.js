/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C,V;

var C_home = function(){
    $('body').append(" home ");
    
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
        
        
        
        /**
        if(C.controllaEmail()){
            email=V.recuperaEmail();
            if(email){
                C.inviaEmail(email);
            }
        }/**/
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
                C = new C_registrazione();
                var V=new V_registrazione();
                C.controllaDati();
                $('#invia').click(function(){
                    $('body').append(" hai cliccato invia ");
                    var dati = V.recuperaDati();
                    C.inviaDati(dati);
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
