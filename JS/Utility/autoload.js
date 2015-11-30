/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

autoload= function(){
    $.ajaxSetup({
        cache:true
    });
    $.getScript("JS/Event/E_home.js");
    $.getScript("JS/Utility/U_operazioni.js");
    $.getScript("JS/Utility/Jquery/scripts.js");
    $.getScript("JS/Event/E_amministrazione.js");
    $.getScript("JS/Event/E_vetrina.js");
    $.getScript("JS/Controller/C_home.js");
    $.getScript("JS/Controller/C_registrazione.js");
    $.getScript("JS/Controller/C_amministrazione.js");
    $.getScript("JS/Controller/C_newsletter.js");
    $.getScript("JS/Controller/C_dettagli_prodotto.js");
    $.getScript("JS/Controller/C_vetrina.js");
    $.getScript("JS/View/V_registrazione.js");
    $.getScript("JS/View/V_amministrazione.js");
    $.getScript("JS/View/V_newsletter.js");
    $.getScript("JS/View/V_vetrina.js");
    $.getScript("JS/View/V_dettagli_prodotto.js");
}();
