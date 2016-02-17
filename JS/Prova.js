/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#text_commento').on("change keypress paste", function(){
            var maxLen = 255;
            //var charL = document.getElementById('text_commento').value.length;
            var charL = $('#text_commento').val().length;
            var str = "Rimanenti: "+ (maxLen - charL) +" di "+ maxLen;
            //$('#charsLeft').innerHTML = str;
            $('#charsLeft').text(str);
        });