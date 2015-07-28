<?php
/**
 * Description of E_prod_ordinato
 *
 * @author daniele
 */
class E_prod_ordinato {
    /**
     *
     * @AttributeType int
     */
    public $ID_PROD_ORDINATO;
    /**
     *
     * @AttributeType string
     */
    public $nome_prodotto;
    /**
     *
     * @AttributeType int
     */
    public $id_ordine;
    /**
     *
     * @AttributeType int
     */
    public $quantita;
    /**
     * @AssociationType Entity.E_prodotto
     * @AssociationMultiplicity 1
     */
    public $_prodotto;
    
    /**
     *
     * @param E_prodotto $prodotto
     */
    public function setProdotto(E_prodotto $prodotto) {
        $this->_prodotto=$prodotto;
    }
    /**
     * Restituisce l'oggetto E_prodotto
     *
     * @return E_prodotto
     */
    public function getProdottoOrdinato() {
        return $this->_prodotto;
    }
    
    public function getID_PROD_ORDINATO() {
        return $this->ID_PROD_ORDINATO;
    }

    public function getNome_prodotto() {
        return $this->nome_prodotto;
    }

    public function getId_ordine() {
        return $this->id_ordine;
    }

    public function getQuantita() {
        return $this->quantita;
    }

    public function setID_PROD_ORDINATO($ID_PROD_ORDINATO) {
        $this->ID_PROD_ORDINATO = $ID_PROD_ORDINATO;
    }

    public function setNome_prodotto($nome_prodotto) {
        $this->nome_prodotto = $nome_prodotto;
    }

    public function setId_ordine($id_ordine) {
        $this->id_ordine = $id_ordine;
    }

    public function setQuantita($quantita) {
        $this->quantita = $quantita;
    }


}
?>