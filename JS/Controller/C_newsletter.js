/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var C_newsletter= function(){
    
}

C_newsletter.prototype.controllaEmail=function(){
    //riscontro;
    $('#EMAIL_newsletter').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' .]{2,30}@[a-zA-Z]{2,10}.[a-z]{2,3}$/)) {
                /**
                $email_controll=mysql_query("SELECT email FROM Utente WHERE email=$('#email')");
                if ($email_controll==1){
                /**/
                    $(this).css("border","3px solid red");
                    riscontro=false;
                //}
            }
            else {
                $(this).css("border", "2px solid green");
                riscontro=true;
            }
            
        });
        return riscontro;
};

C_newsletter.prototype.inviaEmail=function(dati){
    $('body').append(" invia dati");
    //var dati=this.recuperaDati();
    $.ajax({
        url:"index.php",
        data:dati,
        datatype:"json",
        success:function(successo){
            if(successo){
                var view= new V_newsletter();
                view.notifica(true);
            }
            else{
                var view= new V_newsletter();
                view.notifica(false);
            }
        }
    });
}