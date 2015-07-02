<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of V_registrazione
 *
 * @author daniele
 */
class V_registrazione {
    
    /**
     * Restituisce l'array contenente i dati di registrazione
     *
     * @return array();
     */
    public function getDatiRegistrazione() {
        $dati_richiesti=array('EMAIL', 'nome', 'cognome', 'password','password_1', 'codice_attivazione', 'attivazione', 'citta', 'via', 'CAP');
        $dati=array();
        foreach ($dati_richiesti as $dato) {
            if (isset($_REQUEST[$dato]))
                $dati[$dato]=$_REQUEST[$dato];
        }
        $dati=$this->controllaDati($dati);
        return $dati;
    }
    
    private function controllaDati(&$dati){
        if($dati['password']==$dati['password_1']){
            unset($dati['password_1']);
        }
        else print "sbagliato";
        return $dati;
    }
}
