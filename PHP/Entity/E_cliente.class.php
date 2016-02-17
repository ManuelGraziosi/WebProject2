<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of E_cliente
 *
 * @author daniele
 */
class E_cliente {
    /**
    * @AttributeType string
    */
    public $EMAIL;
    /**
    * @AttributeType string
    */
    public $nome;
    /**
    * @AttributeType string
    */
    public $cognome;
    /**
    * @AttributeType string
    */
    public $password;
    /**
    * @AttributeType enum
    */
    public $attivazione="attivo";
    /**
    * @AttributeType string
    */
    public $citta;
    /**
    * @AttributeType string
    */
    public $via;
    /**
    * @AttributeType string
    */
    public $CAP;
    public $_ordini = array();
    
    
    public function spesaStoricaTotale() {
        // Not yet implemented
    }

    /**
     * @access public
     * @param Entity.EOrdine aOrdine
     * @ParamType aOrdine Entity.E_ordine
     */
    public function aggiungiOrdine(E_ordine $aOrdine) {
        $this->_ordini[]=$aOrdine;
    }

    /**
     * @access public
     * @return array()
     * @ReturnType array()
     */
    public function getOrdini() {
        return $this->_ordini;
    }
    /**
     * @access public
     * @return boolean
     * @ReturnType array()
     */
    public function getAccountAttivo() {
        if ($this->attivazione=='attivo'){
            return TRUE;
        }
        else{
            return FALSE;
        }
    }

    public function getCodiceAttivazione() {
        return $this->codice_attivazione;
    }
    
    public function getNome() {
        return $this->nome;
    }

    public function getCognome() {
        return $this->cognome;
    }

    public function getPassword() {
        return $this->password;
    }

    public function getEmail() {
        return $this->EMAIL;
    }

    public function getVia() {
        return $this->via;
    }

    public function getCitta() {
        return $this->citta;
    }

    public function getCAP() {
        return $this->CAP;
    }

    public function getAttivazione() {
        return $this->attivazione;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setCognome($cognome) {
        $this->cognome = $cognome;
    }

    public function setPassword($password) {
        $this->password = $password;
    }

    public function setEmail($EMAIL) {
        $this->EMAIL = $EMAIL;
    }

    public function setVia($via) {
        $this->via = $via;
    }

    public function setCitta($citta) {
        $this->citta = $citta;
    }

    public function setCAP($CAP) {
        $this->CAP = $CAP;
    }

    public function setAttivazione($attivazione) {
        $this->attivazione = $attivazione;
    }
}
?>