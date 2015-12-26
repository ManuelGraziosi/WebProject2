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
    },
    //funzione per il conteggio dei caratteri nell'area commento
    characterLeft: function(){
            var maxLen = 255;
            //var charL = document.getElementById('text_commento').value.length;
            var charL = $('#text_commento').val().length;
            var str = "Rimanenti: "+ (maxLen - charL) +" di "+ maxLen;
            //$('#charsLeft').innerHTML = str;
            $('#charsLeft').text(str);
        },
        
    invioCommento: function(){
        //$("#commenta").click(function(e){
            var prodotto = $("#nome_prod").text().substr(40,30);//a causa della formattazione minchiona sono costretto a prendere parte del testo
            var data = new Date();
            var t = data.getTime();
            //var url = form.attr('action');
            

            var msg = "Il prodotto è:" + prodotto + "\n\r la Data è:" + t;//data + " to " + url;
            alert(msg);

            //$.get(url, data, function(){
            //    alert('Success!');
            //});
        //});
    }
};

