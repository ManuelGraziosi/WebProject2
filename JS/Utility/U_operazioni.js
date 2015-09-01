var U_operazioni = function(){
    
};

U_operazioni.prototype = {
    aggiorna_grafica : function(){
        $('button').button();
        $('select').select();
        //$('body').disableSelection();
    },
    
    richiestaHtmlServer : function(controllore,metodo){
        
        $.ajax({
            url:"index.php?controllore="+controllore+"&metodo="+metodo,
            type:'POST',
            dataType:"html",
            success:function(html) {
                $('#mainright').html(html);
            }
        });
    }
};