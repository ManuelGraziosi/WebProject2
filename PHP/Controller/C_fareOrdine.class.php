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
            //print_r($ordineprodotto);
            $sessione->imposta_valore('carrello',serialize($this->_carrello));
            $view->mostraNotifica(array("errore"=>"","dati"=>$prodotto));
            //$view->mostraNotifica('aggiungi',$this->_carrello);
        }
        else{
            $view->mostraNotifica(array("errore"=>"fare Login"));;
        }
    }
    
    public function rimuoviProdottoOrdinato() {
        $view=  U_singolaistanza::getIstanza('V_fareOrdine');
        $nomeprodotto=$view->getNomeProdotto();
        $this->_carrello->rimuoviProdotto($nomeprodotto);
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        $sessione->imposta_valore('carrello',serialize($this->_carrello));
        $view->mostraNotifica(array("errore"=>"","dati"=>$nomeprodotto));
    }
    
    public function aggiornaProdottoOrdinato(){
        $view=  U_singolaistanza::getIstanza('V_fareOrdine');
        $nomeprodotto=$view->getNomeProdotto();
        $quantita=/**/$view->getQuantita()/**1/**/;
        $this->_carrello->aggiornaProdotto($nomeprodotto,$quantita);
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        $sessione->imposta_valore('carrello',serialize($this->_carrello));
        $view->mostraNotifica(array("errore"=>"","dati"=>false));
    }
    
    public function mostraCarrello(){
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        $ordine=unserialize($sessione->leggi_valore('carrello'));
        if($ordine!=false){
            $daticarrello=array();
            $ordine1=$ordine->_prodotto;
            $i=-1;
            foreach ($ordine1 as $key => $value) {
                /**/
                $i++;
                $daticarrello[$i]=array(
                    "nome_prodotto"=>$ordine1[$key]->_prodotto->getNOME_PRODOTTO(),
                    "quantita"=>/**/$ordine1[$key]->getQuantita(),/**/ 
                    "foto"=>$ordine1[$key]/**/->_prodotto/**/->getFoto(),
                    "prezzo"=>$ordine1[$key]/**/->_prodotto/**/->getPrezzo_kg(),
                    "subtotale"=>$ordine1[$key]/**/->_prodotto/**/->getPrezzo_kg()*$ordine1[$key]->getQuantita()
                );
                /**/
            }
            return $daticarrello;//qui si deve richiamare un metodo da inserire della V_fareOrdine
        }
        else{
            return false;
        }
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
