/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var C_fareOrdine = function(){
    
}

C_fareOrdine.prototype={
    
    inserisciProdottoOrdinato: function(){
        var nome = $(this).attr('title');
        var V=new V_fareOrdine();
        var invia=function(){
            $.ajax({
                url:"index.php?controllore=C_fareOrdine&metodo=inserisciProdottoOrdinato",
                type:'POST',
                data:/**dati/**/{"NOME_PRODOTTO":nome,"quantita":1}/**/,
                dataType:"JSON",
                success:function(risposta){
                    if(risposta['errore']!=false){
                        V.notificaErroreInserimento(risposta);
                    }else{
                        V.notificaInserimento(risposta);
                    }
                }
            });
        }
        
        V.notificaRichiestaInserimento(nome,invia);
        //var U = new U_operazioni();
        //U.dialogoModaleConferma('#notifica',invia);
    },
    
    rimuoviProdottoOrdinato: function(){
        var V = new V_fareOrdine();
        var nome = $(this).attr('title');
        $.ajax({
            url:"index.php?controllore=C_fareOrdine&metodo=rimuoviProdottoOrdinato",
            type:'POST',
            data:{"NOME_PRODOTTO":nome},
            dataType:"JSON",
            success:function(){
                V.notificaRimozione(nome);
                $.ajax({
                    url:'index.php?controllore=C_visualizzazione&metodo=Carrello',
                    datatype:"html",
                    ifModified:true,
                    async:false,
                    success:function(html){
                        $('#mainright').html(html);
                        $.ajax({
                            url:"JS/Event/E_Carrello.js",
                            dataType:'script',
                            async:false
                        });
                    }
                });
            }
        });
    },
    aggiornaProdottoOrdinato: function(){
        var nome = $(this).attr('title');
        $.ajax({
            url:"index.php?controllore=C_fareOrdine&metodo=aggiornaProdottoOrdinato",
            type:'POST',
            data:{"NOME_PRODOTTO":nome,"quantita":$(this).val()},
            dataType:"JSON",
            success:function(){
                
            }
        }).done(function(){
            $.ajax({
                url:'index.php?controllore=C_visualizzazione&metodo=carrello',
                datatype:"html",
                type:'POST',
                ifModified:true,
                async:false,
                success:function(html){
                    $('#mainright').html(html);
//                    $.ajax({
//                        url:"JS/Event/E_Carrello.js",
//                        dataType:'script',
//                        type:'POST',
//                        async:false
//                    });
                }
            }).done(function(){
                    $.ajax({
                        url:"JS/Event/E_Carrello.js",
                        dataType:'script',
                        type:'POST',
                        async:false
                    });
            });
        });
    },
    
    effettuaOrdine: function(){
        $.ajax({
            url:'index.php?controllore=C_visualizzazione&metodo=effettuaOrdine',
            datatype:"html",
            type:'POST',
            ifModified:true,
            success:function(html){
                $('#notifica').html(html).dialog({
                draggable:false,
                modal:true,
                resizable:false,
                width: "50%",
                minWidth:500,
                title:"Form Completamento Ordine",
                close: function(){
                    $('#notifica').remove();
                }
            });
            }
        });
    },
    confermaOrdine: function(){}
};
