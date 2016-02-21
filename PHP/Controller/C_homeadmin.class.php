<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of C_home
 *
 * @author Daniele
 */
class C_homeadmin {
    /**
     * Imposta la pagina, controlla l'autenticazione
     */
    public function __construct () {
        
    }
    public function esegui() {
        $view=U_singolaistanza::getIstanza('V_homeadmin');
            if($view->getMetodo()){
                $control=new C_amministratore();
                $metodo=$view->getMetodo();
                $control->$metodo();
            }else{
                $control=new C_amministratore();
                $control->esegui();
            }
    }
}

?>
