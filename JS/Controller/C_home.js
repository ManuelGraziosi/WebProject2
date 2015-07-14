/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var C_home = function(){
    $('body').append(" home ");
    /**/
    $('#newsletter').click(function(){
        $('body').append('cliccato su newsletter');
    });
    $('#vetrina').click(function(){
        $('body').append('cliccato su vetrina');
    });
    
    $('#carrello').click(function(){
        $('body').append('cliccato su carrello');
    });
    
    $('#home').click(function(){
        $('body').append('cliccato su home');
    });
    
    $('#registrazione').click(function(){
        $('#mainright').append('<div id="formRegistrazione"><table><tr><td>nome:  </td><td><input id="nome" name="nome" type="text"/></td></tr><tr><td>cognome:  </td><td><input id="cognome" name="cognome" type="text"/></td></tr><tr><td>email:  </td><td><input id="EMAIL_registrazione" name="EMAIL" type="text"/></td></tr><tr><td>password:  </td><td><input id="password_registrazione" name="password" type="password"/></td></tr><tr><td>password:  </td><td><input id="password_1_registrazione" name="password_1" type="password"/></td></tr><tr><td>Via:  </td><td><input id="via" name="via" type="text"/></td></tr><tr><td>citta:  </td><td><input id="citta" name="citta" type="text"/></td></tr><tr><td>CAP:  </td><td><input id="CAP" name="CAP" type="text"/></td></tr><tr><td colspan="2"><button id="invia" class="invia">invia</button></td></tr></table></div>');
        index = new C_registrazione();
        //index.registrazione();
        
        
        var view=new V_registrazione();
            index.controllaDati();
            $('#invia').click(function(){
                $('body').append(" hai cliccato invia ");
                var dati = view.recuperaDati();
                index.inviaDati(dati);
                $('#formRegistrazione').fadeout();
            });
    });
    
    $('#login').click(function(){
        $('body').append('cliccato su login');
    });
    /**/
}
