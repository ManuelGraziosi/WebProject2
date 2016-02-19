var U_operazioni = function(){
    
};

U_operazioni.prototype = {
    aggiorna_grafica : function(){
        $('button').button();
        $('select').select();
        //$('body').disableSelection();
    },
    
    richiestaHtmlServer : function(controllore,metodo,selettore){
        var azioneRichiesta = new Object();
        azioneRichiesta = {
            "controllore" : controllore,
            "metodo"      : metodo
        };
        $.ajax({
            url:"index.php",
            type:'POST',
            data:azioneRichiesta,
            dataType:"html",
            success:function(html) {
                $(selettore).html(html);c=new E_vetrina();
                $('#accordion').accordion();
            }
        });
    },
    
    formatta : function(/**/stringa/**/){
        //var string = " m a  u i";
        var nospace = stringa.replace(/ /g, ' .'); 
        
        return nospace;
    },
    
    dialogoModale:function(selettore){
        $(selettore).dialog({
            draggable:false,
            modal:true,
            resizable:false,
            title:"Notifica",
            close: $(selettore).remove()
        });
    },
    
    dialogoModaleConferma:function(selettore,conferma){
        $(selettore).dialog({
            draggable:false,
            modal:true,
            resizable:false,
            title:"Notifica",
            buttons:[{
                    text:"conferma",
                    click:conferma
                },
                {
                    text:"annulla",
                    click:function(){
                        $(this).dialog("close");
                    }
                }],
            close: $(selettore).remove()
        });
    }
};