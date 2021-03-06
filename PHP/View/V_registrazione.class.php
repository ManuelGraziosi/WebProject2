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
        $dati_richiesti=array('EMAIL', 'nome', 'cognome', 'password', 'password_1', 'citta', 'via', 'CAP');
        $dati=array();
        foreach ($dati_richiesti as $dato) {
            if (isset($_REQUEST[$dato])){
                $dati[$dato]=$_REQUEST[$dato];
            }
        }
        return $dati;
    }
    
    public function getEmail() {
        if (isset($_REQUEST['EMAIL'])){
            return $_REQUEST['EMAIL'];
        }
    }
    
    public function getPassword() {
        if (isset($_REQUEST['password'])){
            return $_REQUEST['password'];
        }
    }
    
    public function mostraNotifica($item){
        header("Content-type: application/json");
        print json_encode($item);
    }
}
