<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of E_commento
 *
 * @author daniele
 */
class E_commento {
    /**
    * @AttributeType int
    */
    public $ID_COMMENTO;
    /**
    * @AttributeType string
    */
    public $testo;
    /**
    * @AttributeType float
    */
    public $voto;

    public function getID_COMMENTO() {
       return $this->ID_COMMENTO;
    }

    public function getTesto() {
       return $this->testo;
    }

    public function getVoto() {
       return $this->voto;
    }

    public function setID_COMMENTO($ID_COMMENTO) {
       $this->ID_COMMENTO = $ID_COMMENTO;
    }

    public function setTesto($testo) {
       $this->testo = $testo;
    }

    public function setVoto($voto) {
       $this->voto = $voto;
    }
}
?>