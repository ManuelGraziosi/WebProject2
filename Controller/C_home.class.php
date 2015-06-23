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
class C_home {
    /**
     * Imposta la pagina, controlla l'autenticazione
     */
    public function __construct () {
        
    }
    public function esegui() {
        $view=U_singolaistanza::getIstanza('V_home');
        if($view->getControllore()){
            $controllore=$view->getControllore();
            if($view->getMetodo()){
                $control=new $controllore();
                $metodo=$view->getMetodo();
                $control->$metodo();
            }
        }
        else{
            $paginainiziale=new C_visualizzazione();
            $paginainiziale->paginaIniziale();
        }
    }
}

?>
