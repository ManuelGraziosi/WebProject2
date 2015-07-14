/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**/
var C_registrazione=function(){
    
};

C_registrazione.prototype={

    controllaDati:function(){
        $('body').append("controlla Dati ");
        errori=new Array();
        //var dati = this.recuperaDati();
        $('#nome').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' ]{2,30}$/)) {
                    $(this).css("border", "3px solid red");
                    errori[0]=true;
            }
            else{
                    $(this).css("border", "2px solid green");
                    errori[0]=false;
            }
        });


        $('#cognome').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' ]{2,30}$/)) {
                    $(this).css("border", "3px solid red");
                    errori[1]=true;
            }
            else{
                    $(this).css("border", "2px solid green");
                    errori[1]=false;
            }
        });

        $('#EMAIL_registrazione').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' .]{2,30}@[a-zA-Z]{2,10}.[a-z]{2,3}$/)) {
                /**
                $email_controll=mysql_query("SELECT email FROM Utente WHERE email=$('#email')");
                if ($email_controll==1){
                /**/
                    $(this).css("border","3px solid red");
                    errori[2]=true;
                //}
            }
            else {
                $(this).css("border", "2px solid green");
                errori[2]=false;
            }
            
        });

        $('#password_registrazione').blur(function () {
            if (!$(this).val().match(/^[[a-zA-z0-9#!%\^&;\*\$:\{\}=\-_`~\(\)]{6,30}$/)) {
                $(this).css("border", "3px solid red");
                errori[4]=true;
            }
            else{
                $(this).css("border", "3px solid green");
                errori[4]=false;
            }
        });

        $('#password_1_registrazione').keyup(function () { 
            if ( $(this).val()===$('#password_registrazione').val() && !errori[4] ) {
                $("#password_1_registrazione,#password_registrazione").css("border", "2px solid green");
                errori[5]=false;
            }
            else{
                $(this).css("border", "3px solid red");
                errori[5]=true;
            }
        });
        
        $('#via').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' ]{2,100}$/)) {
                    $(this).css("border", "3px solid red");
                    errori[1]=true;
            }
            else{
                    $(this).css("border", "2px solid green");
                    errori[1]=false;
            }
        });

        $('#citta').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' ]{2,20}$/)) {
                    $(this).css("border", "3px solid red");
                    errori[1]=true;
            }
            else{
                    $(this).css("border", "2px solid green");
                    errori[1]=false;
            }
        });
        
        $('#CAP').blur(function () {
            if (!$(this).val().match(/^[0-9]{5}$/)) {
                    $(this).css("border", "3px solid red");
                    errori[1]=true;
            }
            else{
                    $(this).css("border", "2px solid green");
                    errori[1]=false;
            }
        });


        if(errori[0] === true && errori[1] === true){
            $('body').append('<p>funziona o no?</p>');
        }
    },

    inviaDati:function(dati){
        $('body').append(" invia dati");
        //var dati=this.recuperaDati();
        $.ajax({
            url:"index.php",
            data:dati,
            datatype:"json",
            success:function(){
                var view= new V_registrazione();
                view.notifica();
            }
        });
    }
}
