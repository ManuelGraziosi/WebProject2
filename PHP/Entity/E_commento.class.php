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
    public $nome_prod_com;
    /**
    * @AttributeType dateTime
    */
    public $data_commento;
    /**
    * @AttributeType string
    */
    public $user_commento;
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
        
    public function getNome_prod_com() {
        return $this->nome_prod_com;
    }

    public function getData_commento() {
        return $this->data_commento;
    }

    public function getUser_commento() {
        return $this->user_commento;
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

    public function setNome_prod_com($nome_prod_com) {
        $this->nome_prod_com = $nome_prod_com;
    }

    public function setData_commento($data_commento) {
        $this->data_commento = $data_commento;
    }

    public function setUser_commento($user_commento) {
        $this->user_commento = $user_commento;
    }

    public function setTesto($testo) {
       $this->testo = $testo;
    }

    public function setVoto($voto) {
       $this->voto = $voto;
    }
}
?>