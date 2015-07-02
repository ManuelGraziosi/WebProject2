<?php

/**
 * Description of C_registrazione
 *
 * @author daniele
 */
class C_registrazione {
    
    public function effetuaRegistrazione() {
        $view=new V_registrazione();
        $daticliente=$view->getDatiRegistrazione();
        
        $cliente=new E_cliente();
        U_operazioni::inserisciDati($cliente, $daticliente);
        print_r($cliente);
        
        $db=new F_database();
        $db->depositaRiga("cliente", $daticliente);
        print "funziona";
    }
}
