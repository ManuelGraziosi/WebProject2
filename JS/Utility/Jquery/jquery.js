/**/
var start=function(){
    
    $('#buttonsearch').click(ricerca);

    $('#barracerca').keypress(ricerca);
/**

    $('#invialogin').click(function(){
        EMAIL=$('#EMAIL').val();
        password=$('#password').val();
        $.ajax({
            type:'GET',
            url:"index.php",
            dataType:"json",
            data:{"controllore":"C_registrazione","metodo":"autentica","EMAIL": EMAIL,"password": password},
            success:function(){
                $('#mainright').html('<p>vai a vedere nel file di sessione se funziona</p>');
            }
        });
    });
    /**/
}

var ricerca=function(){
    $('body').append("cliccato ricerca");
    var r=$('#barracerca').val();
    $.ajax({
        url:"index.php?controllore=C_visualizzazione&metodo=ricerca&ricerca="+r,
        type:'GET',
        dataType:"html",
        success:function(prod) {
            $('#mainright').html(prod);
        }
    });
}


var aggiorna_grafica= function(){
    $('button').button();
    $('select').select();
}


$(document).ready(start);
/**/