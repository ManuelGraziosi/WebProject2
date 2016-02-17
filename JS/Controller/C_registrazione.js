/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C_registrazione=function(){
    
};

C_registrazione.prototype={
    controllaDati:function(){
        $('body').append("controlla Dati ");
        errori=new Array();
        //var dati = this.recuperaDati();
        $('input#nome_registrazione').blur(function (event) {
            if (!$(event.target).val().match(/^[a-zA-Z' ]{2,30}$/)) {
                $(event.target).css("border", "3px solid red");
                errori[0]=true;
            }
            else{
                $(event.target).css("border", "2px solid green");
                errori[0]=false;
            }
        });
        
        $('input#cognome_registrazione').blur(function (event) {
            if (!$(event.target).val().match(/^[a-zA-Z' ]{2,30}$/)) {
                $(event.target).css("border", "3px solid red");
                errori[1]=true;
            }
            else{
                $(event.target).css("border", "2px solid green");
                errori[1]=false;
            }
        });

        $('input#EMAIL_registrazione').blur(function (event) {
            //if (!$(event.target).val().match(/^[a-zA-z' .]{2,30}@[a-zA-Z]{2,10}.[a-z]{2,3}$/)) {
            if (!$(event.target).val().match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
                $(event.target).css("border","3px solid red");
                errori[2]=true;
                //}
            }
            else {
                $(event.target).css("border", "2px solid green");
                errori[2]=false;
            }
        });

        $('input#password_registrazione').blur(function (event) {
            if (!$(event.target).val().match(/^[[a-zA-Z0-9#!%\^&;\*\$:\{\}=\-_`~\(\)]{6,30}$/)) {
                $(event.target).css("border", "3px solid red");
                errori[4]=true;
            }
            else{
                $(event.target).css("border", "3px solid green");
                errori[4]=false;
            }
        });

        $('input#password_1_registrazione').keyup(function (event) { 
            if ( $(event.target).val()===$('#password_registrazione').val() && !errori[4] ) {
                $("#password_1_registrazione,#password_registrazione").css("border", "2px solid green");
                errori[5]=false;
            }
            else{
                $(event.target).css("border", "3px solid red");
                errori[5]=true;
            }
        });
        
        $('input#via_registrazione').blur(function (event) {
            if (!$(event.target).val().match(/^[0-9a-zA-Z' ]{2,100}$/)) {
                $(event.target).css("border", "3px solid red");
                errori[6]=true;
            }
            else{
                $(event.target).css("border", "2px solid green");
                errori[6]=false;
            }
        });

        $('input#citta_registrazione').blur(function (event) {
            if (!$(event.target).val().match(/^[a-zA-Z' ]{1,20}$/)) {
                $(event.target).css("border", "3px solid red");
                errori[7]=true;
            }
            else{
                $(event.target).css("border", "2px solid green");
                errori[7]=false;
            }
        });
        
        $('input#CAP_registrazione').blur(function (event) {
            if (!$(event.target).val().match(/^[0-9]{5}$/)) {
                $(event.target).css("border", "3px solid red");
                errori[8]=true;
            }
            else{
                $(event.target).css("border", "2px solid green");
                errori[8]=false;
            }
        });
    },

    inviaDatiRegistrazione:function(dati){
        var V = new V_registrazione();
        //var dati = V.recuperaDatiRegistrazione();
        $.ajax({
            url:"index.php?controllore=C_registrazione&metodo=creaCliente",
            data:dati,
            datatype:"json",
            success:function(info){
                V.notificaRegistrazione(info);
            }
        });
    },

    inviaDatiLogin:function(dati){
        /**$('body').append(" invia dati");/**/
        var view = new V_registrazione();
        var dati = view.recuperaDatiLogin();
        $('#notifica').append(dati);
        $.ajax({
            url:"index.php?controllore=C_registrazione&metodo=autentica",
            data:dati,
            datatype:"json",
            success:function(info){
                view.notificaLogin(info);
            }
        });
    },
    
    richiestaLogout: function(){
        $.ajax({
            url:"index.php?controllore=C_registrazione&metodo=logout",
            /**data:dati,/**
            datatype:"json",/**/
            success:function(){
                window.location.reload();
            }
        });
    },
    
    controllaEmailNewsletter : function(){
        var riscontro=false;
        $('#EMAIL_newsletter').blur(function (event) {
            if (!$(event.target).val().match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
                /**
                $email_controll=mysql_query("SELECT email FROM Utente WHERE email=$('#email')");
                if ($email_controll==1){
                /**/
                    $(event.target).css("border","3px solid red");
                    riscontro=false;
                //}
            }
            else {
                $(event.target).css("border", "2px solid green");
                $('body').append("ciao funziono");
                riscontro=true;
            }
        });
        return riscontro;
    },
    
    inviaEmailNewsletter : function(dati){
        /**$('body').append(" invia dati");/**/
        //var dati=this.recuperaDati();
        $.ajax({
            url:"index.php",
            data:dati,
            datatype:"json",
            success:function(successo){
                if(successo){
                    var view = new V_newsletter();
                    view.notifica(true);
                }
                else{
                    var view= new V_newsletter();
                    view.notifica(false);
                }
            }
        });
    }
};