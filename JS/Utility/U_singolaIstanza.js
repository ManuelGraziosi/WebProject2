var U_singolaIstanza = function(){
	SingolaIstanzaObj = new Object();
};

U_singolaIstanza.prototype.getInstance = function(Oggetto,instanza){
    
    if($.isEmptyObject(SingolaIstanzaObj)){
        SingolaIstanzaObj[instanza]= Object.create(Oggetto.prototype);
        return SingolaIstanzaObj[instanza];
    }
    else{
        var Chiavi=Object.keys(SingolaIstanzaObj);
        var flag="FALSE";
        $.each(Chiavi,function(i,Chiave){
                if(Chiave===instanza){
                        flag="TRUE";
                }
        });
        if(flag==="TRUE"){
            return SingolaIstanzaObj[instanza];
        }
        else{
            SingolaIstanzaObj[instanza]= Object.create(Oggetto.prototype);
            return SingolaIstanzaObj[instanza];
        };
    };
};