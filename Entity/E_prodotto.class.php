<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of E_prodotto
 *
 * @author daniele
 */
class E_prodotto {
    /**
     *
     * @AttributeType string
     */
    public $NOME_PRODOTTO;
    /**
     *
     * @AttributeType string
     */
    public $descrizione;
    /**
     *
     * @AttributeType string
     */
    public $foto;
    /**
     *
     * @AttributeType string
     */
    public $categoria;
    /**
     *
     * @AttributeType int
     */
    public $prezzo_kg;
    /**
     *
     * @AttributeType int
     */
    public $disponibilita;
    /**
     * @AssociationType Entity.E_commento
     * @AssociationMultiplicity 0..*
     * @AssociationKind Aggregation
     */
    public $_commento = array();

    /**
     * @access public
     * @param Entity.E_commento aParameter
     * @return boolean
     * @ParamType aParameter Entity.E_commento
     * @ReturnType boolean
     */
    public function inserisciCommento(E_commento $commento) {
        array_push($this->_commento, $commento);
    }

    /**
     * Restituisce la media dei voti per il prodotto
     *
     * @access public
     * @return float
     * @ReturnType float
     */
    public function getMediaVoti() {
        $somma=0;
        $voti=count($this->_commento);
        if ($voti>1) {
            foreach ($this->_commento as $commento) {
                $somma+=$commento->getVoto();
            }
            return $somma/$voti;
        }
        elseif (isset($this->_commento[0]->voto)){
            return $this->_commento[0]->voto;
        }
        else{
            return false;
        }
    }
    
    /**
     * Restituisce un array di commenti relativi al prodotto
     *
     * @access public
     * @return array
     * @ReturnType array
     */
    public function getCommenti() {
        return ($this->_commento);
    }
    
    public function getNOME_PRODOTTO() {
        return $this->NOME_PRODOTTO;
    }

    public function getDescrizione() {
        return $this->descrizione;
    }

    public function getFoto() {
        return $this->foto;
    }

    public function getCategoria() {
        return $this->categoria;
    }

    public function getPrezzo_kg() {
        return $this->prezzo_kg;
    }

    public function getDisponibilita() {
        return $this->disponibilita;
    }

    public function setNOME_PRODOTTO($NOME_PRODOTTO) {
        $this->NOME_PRODOTTO = $NOME_PRODOTTO;
    }

    public function setDescrizione($descrizione) {
        $this->descrizione = $descrizione;
    }

    public function setFoto($foto) {
        $this->foto = $foto;
    }

    public function setCategoria($categoria) {
        $this->categoria = $categoria;
    }

    public function setPrezzo_kg($prezzo_kg) {
        $this->prezzo_kg = $prezzo_kg;
    }

    public function setDisponibilita($disponibilita) {
        $this->disponibilita = $disponibilita;
    }


}
?>