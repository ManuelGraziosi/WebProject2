$(document).ready(function(){
    $('div').append('<p>io invece sono lo stript di jquery');
    $('button').click(function(){
        $.ajax({
            url:"index.php",
            success:function(script){
                $('div').append(script);
                $.getScript("jquery1.js");
            }
        })
    })
});