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
            type:'GET',
            data:azioneRichiesta,
            dataType:"html",
            success:function(html) {
                $(selettore).html(html);c=new E_vetrina();
            }
        });
    },
    
    formatta : function(/**/stringa/**/){
        //var string = " m a  u i";
        var nospace = stringa.replace(/ /g, ' .'); 
        
        return nospace;
    }
};