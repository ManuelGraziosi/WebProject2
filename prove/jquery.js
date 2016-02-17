$(document).ready(function(){
    $('div').append('<p>io invece sono lo stript di jquery che attribuisce all evento click sul bottone "clicca" una chiamata ajax</p>');
    $('div').append('<p>che richiama il php</br></p>');
    $('button').click(function(){
        $.ajax({
            url:"index.php",
            success:function(php){
                $('div').append(php);
                $.getScript("jquery1.js");
            }
        });
    });
});
