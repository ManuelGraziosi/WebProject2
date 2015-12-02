/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var C_fareOrdine = function(){
    //carello = new array();
}

C_fareOrdine.prototype={
    inserisciProdottoOrdinato: function(dati){
        
        $.ajax({
            url:"index.php?controllore=C_fareOrdine&metodo=inserisciProdottoOrdinato",
            metod:"GET",
            data:/**/dati/**{"NOME_PRODOTTO":"Caciotta","quantita":"100"}/**/,
            dataType:"JSON",
            success:function(ciao){
                $('#nascosto').html(ciao);
                //carello[1]=ciao;
            }
        });
    },
    rimuoviProdottoOrdinato: function(dati){
        $.ajax({
            url:"index.php?controllore=C_fareOrdine&metodo=rimuoviProdottoOrdinato",
            metod:"GET",
            data:{"NOME_PRODOTTO":dati},
            dataType:"JSON",
            success:function(){
                
            }
        });
    },
    aggiornaProdottoOrdinato: function(){
        $.ajax({
            url:"index.php?controllore=C_fareOrdine&metodo=aggiornaProdottoOrdinato",
            metod:"GET",
            data:dati,
            dataType:"JSON",
            success:function(){
                
            }
        });
    },
    effettuaOrdine: function(){
        $.ajax({
            url:"index.php?controllore=C_fareOrdine&metodo=effettuaOrdine",
            metod:"GET",
            data:dati,
            dataType:"JSON",
            success:function(){
                
            }
        });
    },
    confermaOrdine: function(){
        $.ajax({
            url:"index.php?controllore=C_fareOrdine&metodo=confermaOrdine",
            metod:"GET",
            data:dati,
            dataType:"JSON",
            success:function(){
                
            }
        });
    }
}