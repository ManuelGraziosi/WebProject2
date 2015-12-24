/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var V_dettagli_prodotto= function(){
    //this.dialogo();
};

V_dettagli_prodotto.prototype={
        dialogomanuel: function(){
        $('.dettagli_prodotto').dialog({
            draggable:false,
            modal:true,
            resizable:false,
            width: "50%",
            minWidth:500,
            title:"Dettagli Prodotto",
            close: function(){
                $('.dettagli_prodotto').remove();
            }
        });
        $('#invia').button();
    }
};

