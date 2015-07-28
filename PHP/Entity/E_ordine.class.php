<?php

/**
 * @access public
 * @package Entity
 */
class E_ordine {
    /**
     * @AttributeType int
     */
    public $id;
    /**
     * @AttributeType int
     */
    public $id_metodo_pagamento;
    /**
     * @AttributeType string
     */
    public $email_cliente;
    /**
     * @AttributeType Date
     */
    public $data_pagamento;
    /**
     * @AttributeType Date
     */
    public $data_spedizione;
    /**
     * @AttributeType boolean
     */
    public $stato_pagamento=false;
    /**
     * @AttributeType boolean
     */
    public $conferma_ordine=false;
    /**
     * @AssociationType Entity.E_cliente
     * @AssociationMultiplicity 1
     */
    public $_cliente;
    /**
     * @AssociationType Entity.E_pagamento
     * @AssociationMultiplicity 1
     */
    public $_pagamento;
    /**
     * @AssociationType Entity.E_prod_ordinato
     * @AssociationMultiplicity 1..*
     * @AssociationKind Aggregation
     */
    public $_prodotto = array();


    public function getPrezzoTotale() {

    }

    public function inserisciProdotto(E_prod_ordinato $prod_ordinato,$quantita) {
        $Prodotto=$prod_ordinato->getProdottoOrdinato();
        $aggiornato=false;
        foreach ($this->_prodotto as & $thisItem) {
            $thisProdotto=$thisItem->getProdottoOrdinato();
            if ($thisProdotto->getNOME_PRODOTTO()==$Prodotto->getNOME_PRODOTTO()) {
                $thisItem->setQuantita($thisItem->getQuantita()+$quantita);
                //$thisItem->quantita+=$quantita;
                $aggiornato=true;
            }
        }
        if (!$aggiornato){
            $prod_ordinato->setQuantita($quantita);
            $this->_prodotto[]=$prod_ordinato;
        }
    }

    public function rimuoviProdotto($nome) {
        $trovato=false;
        /**/
        for($i=0;$i<count($this->_prodotto)&&(!$trovato);$i++){
            $thisProdotto=$this->_prodotto[$i]->getProdottoOrdinato();
            if($thisProdotto->getNOME_PRODOTTO()==$nome) {
                unset($this->_prodotto[$i]);
                $trovato=true;/**/
            }
        }
    }
    
    
    public function aggiornaProdotto($nome,$quantita) {
        $trovato=false;
        /**/
        for($i=0;$i<count($this->_prodotto)&&(!$trovato);$i++){
            $thisProdotto=$this->_prodotto[$i]->getProdottoOrdinato();
            if($thisProdotto->getNOME_PRODOTTO()==$nome) {
                //unset($this->_prodotto[$i]);
                $q=$this->_prodotto[$i]->setQuantita($quantita);
                $trovato=true;/**/
            }
        }
    }
    
    public function setStato_pagamento(boolean $pagato) {
        $this->stato_pagamento=$pagato;
    }
    /**
     * Restituisce array() di prodotti ordinati
     *
     * @return array():E_prod_ordinato
     */

    public function getProdottiOrdinati() {
        return $this->_prodotto;
    }

    public function setData_pagamento(date $data) {
        $this->data_pagamento=$data;
    }

    public function setPagamento(E_pagamento $pagamento) {
        $this->_pagamento=$pagamento;
    }

    public function setCliente(E_cliente $cliente) {
        $this->_cliente=$cliente;
    }

    public function getCliente() {
        return $this->_cliente;
    }
}
?>