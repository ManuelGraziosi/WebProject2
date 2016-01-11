<?php
/**
 * Description of C_fareOrdine
 *
 * @author daniele
 */
class C_fareOrdine {
    private $_carrello;
    /**
     * Costruttore, legge la variabile di sessione 'carrello'
     */
    public function __construct() {
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        //$sessione=new U_sessione();
        $tmp_carrello=$sessione->leggi_valore('carrello');
        if ($tmp_carrello!=false){
            $this->_carrello=unserialize($tmp_carrello);
        }
    }
    
    public function inserisciProdottoOrdinato(){
        $view= U_singolaistanza::getIstanza('V_fareOrdine');
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        //$sessione=new U_sessione();
        $loggato=$sessione->leggi_valore("email");
        if($sessione->leggi_valore("email")){
            //con login
            $nomeprodotto=$view->getNomeProdotto();
            $quantita=$view->getQuantita();
            $db= U_singolaistanza::getIstanza('F_database');
            $dati_prodotto=$db->caricaRiga('prodotto', $nomeprodotto);
            $ordineprodotto=new E_prod_ordinato();
                $ordineprodotto->setNome_prodotto($nomeprodotto);
                $ordineprodotto->setQuantita($quantita);
                $prodotto=new E_prodotto();
                U_operazioni::inserisciDati($prodotto,$dati_prodotto);
            $ordineprodotto->setProdotto($prodotto);
            if ($this->_carrello==false){
                $this->_carrello=new E_ordine();
            }
            $this->_carrello->inserisciProdotto($ordineprodotto,$quantita);
            $sessione=  U_singolaistanza::getIstanza('U_sessione');
            $sessione->imposta_valore('carrello',serialize($this->_carrello));
            $view->mostraNotifica('aggiungi',$ordineprodotto);
            //$view->mostraNotifica('aggiungi',$this->_carrello);
        }
        else{
            print "ti devi loggare";
        }
    }
    
    public function rimuoviProdottoOrdinato() {
        $view=  U_singolaistanza::getIstanza('V_fareOrdine');
        $nomeprodotto=$view->getNomeProdotto();
        $this->_carrello->rimuoviProdotto($nomeprodotto);
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        $sessione->imposta_valore('carrello',serialize($this->_carrello));
        $view->mostraNotifica('rimuovi',false);
    }
    
    public function aggiornaProdottoOrdinato(){
        $view=  U_singolaistanza::getIstanza('V_fareOrdine');
        $nomeprodotto=$view->getNomeProdotto();
        $quantita=$view->getQuantita();
        $this->_carrello->aggiornaProdotto($nomeprodotto,$quantita);
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        $sessione->imposta_valore('carrello',serialize($this->_carrello));
        $view->mostraNotifica('rimuovi',false);
    }
    
    public function mostraCarrello(){
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        $ordine=$sessione->leggi_valore('carrello');
        
        return $ordine[E_prod_ordinato[E_prodotto]];
    }
    
    public function effettuaOrdine() {
        
    }
    
    public function confermaOrdine() {
        //$sessione= U_singolaistanza::getIstanza('U_sessione');
        /**
        $sessione= new U_sessione();
        $identificato = false;
        if (isset($_SESSION['EMAIL'])) {
            $identificato = true;
        }
        if($identificato){
            //mostra il riepilogo dei prodotti ordinati
        }
        else{/**/
            header('Location: index.php?controllore=C_visualizzazione&metodo=registrazione');
            
        //}
        
        
    }
}
