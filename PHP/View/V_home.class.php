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
class V_home extends V_view {
    
    public function getControllore() {
        if (isset($_REQUEST['controllore'])){
            return $_REQUEST['controllore'];
        }
        else{
            return false;
        }
    }
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
