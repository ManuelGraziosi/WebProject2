<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of V_home
 *
 * @author Daniele
 */
class V_homeadmin extends V_view {
    
    /**
     * Restituisce il metodo passato tramite richiesta GET o POST
     *
     * @return mixed
     */
    public function getMetodo() {
        if (isset($_REQUEST['metodo'])){
            return $_REQUEST['metodo'];
        }
        else{
            return false;
        }
    }
}

?>
