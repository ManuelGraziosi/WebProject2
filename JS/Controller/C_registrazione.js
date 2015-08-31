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
        $('#nome_registrazione').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' ]{2,30}$/)) {
                $(this).css("border", "3px solid red");
                errori[0]=true;
            }
            else{
                $(this).css("border", "2px solid green");
                errori[0]=false;
            }
        });
        
        $('#cognome_registrazione').blur(function () {
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
            //if (!$(this).val().match(/^[a-zA-z' .]{2,30}@[a-zA-Z]{2,10}.[a-z]{2,3}$/)) {
            if (!$(this).val().match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
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
        
        $('#via_registrazione').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' ]{2,100}$/)) {
                $(this).css("border", "3px solid red");
                errori[1]=true;
            }
            else{
                $(this).css("border", "2px solid green");
                errori[1]=false;
            }
        });

        $('#citta_registrazione').blur(function () {
            if (!$(this).val().match(/^[a-zA-z' ]{1,20}$/)) {
                $(this).css("border", "3px solid red");
                errori[1]=true;
            }
            else{
                $(this).css("border", "2px solid green");
                errori[1]=false;
            }
        });
        
        $('#CAP_registrazione').blur(function () {
            if (!$(this).val().match(/^[0-9]{5}$/)) {
                $(this).css("border", "3px solid red");
                errori[1]=true;
            }
            else{
                $(this).css("border", "2px solid green");
                errori[1]=false;
            }
        });
    },

    inviaDatiRegistrazione:function(dati){
        $('body').append(" invia dati");
        var view = new V_registrazione();
        var dati = view.recuperaDati();
        $.ajax({
            url:"index.php?controllore=C_registrazione&metodo=creaCliente",
            data:dati,
            datatype:"json",
            success:function(){
                var view= new V_registrazione();
                view.notifica();
            }
        });
    },

    inviaDatiLogin:function(dati){
        $('body').append(" invia dati");
        var view = new V_registrazione();
        var dati = view.recuperaDatiLogin();
        $.ajax({
            url:"index.php?controllore=C_registrazione&metodo=autentica",
            data:dati,
            datatype:"json",
            success:function(login){
                $('#utente').html('<p>'+login['cliente']+'</p>');
                if(login['errore']!=false){
                    alert(login['errore']);
                }
            }
        });
    },
    
    ricerca : function(stringa){
    $.ajax({
        url:"index.php?controllore=C_visualizzazione&metodo=ricerca",
        type:'GET',
        data:stringa,
        dataType:"html",
        success:function(prod) {
            $('#mainright').html(prod);
        }
    });
}
}
