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
    //funzione per l'organizzazione dei dati da inviare al db tramite la View php
    invioCommento: function(){
        //il 15 compensa lo scritto di troppo che non serve
        var lengthNameProdCom = $(".d_nome").text().length - 15; 
        //a causa della formattazione minchiona sono costretto a prendere parte del testo    
        var productCom = $("#nome_prod").text().trim().substr(15,lengthNameProdCom);
        var dateTemp = new Date();
        var dayCom = dateTemp.getDay();
        var monthCom = dateTemp.getMonth()+1;
        var yearCom = dateTemp.getFullYear();
        var hourCom = dateTemp.getHours();
        var minuteCom = dateTemp.getMinutes();
        var secondCom = dateTemp.getSeconds();
        var dateCom = yearCom + "-" + monthCom + "-" + dayCom + " " + hourCom + ":" + minuteCom + ":" + secondCom;

        var userCom = $('#utente').text();

        var textCom = $("#text_commento").val();

        var msg = "Il prodotto è: " + productCom + 
                  "\n\r la Data è: " + dateCom + 
                  "\n\r l'utente è: " + userCom +
                  "\n\r il testo inserito è: " + textCom;
        alert(msg);
    }
};

