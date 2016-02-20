<?php

/**
 * Description of C_amministratore
 *
 * @author daniele
 */
class C_amministratore {
    
    public function esegui() {
        $view=new V_view();
        //questo si deve risolvere e forse i cookie sono la soluzione
        /**
        $sessione=  U_singolaistanza::getIstanza("U_sessione");
        $nome_cognome=$sessione->leggi_valore('nome_cognome');
        if($nome_cognome!=false){
            $view->inserisciDatiTemplate('utente', $nome_cognome);
        }else{
            $view->inserisciDatiTemplate('utente', 'Ospite');
        }
        /**/
        $db= new F_database();
        $datiprod=$db->caricaTabella('prodotto');
        $daticlie=$db->caricaTabella('cliente');
        $datiprodotto=$db->caricaRiga("prodotto", "Caciotta");
        $view->inserisciDatiTemplate('prodotto', $datiprodotto);
        $view->inserisciDatiTemplate('prodotti', $datiprod);
        $view->inserisciDatiTemplate('clienti', $daticlie);
        $view->impostaTemplate('amministrazione.tpl');
        $view->impostaTemplate('amministrazione.tpl');
    }
    
    public function eliminaProdotto() {
        $view = new V_amministratore();
        $db = new F_database();
        $prodotto = new E_prodotto();
        
        $nomeprodotto = $view->getNomeProdotto();
        $datiprodotto = $db->caricaRiga('prodotto', $nomeprodotto);
        
        U_operazioni::inserisciDati($prodotto, $datiprodotto);
        $db->cancellaRiga('prodotto', $prodotto);
                
    }
    
    public function inserisciProdotto() {
        $view = new V_amministratore();
        $db = new F_database();
        $prodotto = new E_prodotto();
        $datiProdotto = $view->getDatiProdotto();
        U_operazioni::inserisciDati($prodotto, $datiProdotto);
        $db->depositaRiga('prodotto', $prodotto);
    }
    
    public function aggiornaProdotto() {
        $view = new V_amministratore();
        $db = new F_database();
        $prodotto = new E_prodotto();
        $datiProdotto=$view->getDatiProdotto();
        U_operazioni::inserisciDati($prodotto, $datiProdotto);
        $db->aggiornaRiga('prodotto', $prodotto);
        
        $prodotto = $db->caricaTabella('prodotto');
        print_r($prodotto);
        
    }
    
    public function recuperaProdotto() {
        $view = new V_amministratore();
        $db = new F_database();
        $prodotto = new E_prodotto();
        $nomeProdotto=$view->getNomeProdotto();
        $datiProdotto=$db->caricaRiga('prodotto', $nomeProdotto);
        $view->inviaDatiProdotto($datiProdotto[0]);
        //$prodotto = $db->caricaTabella('prodotto');
        //print_r($prodotto);
        
    }
    
    public function eliminaCliente() {
        $view = new V_amministratore();
        $db = new F_database();
        $cliente = new E_cliente();
        $emailCliente = $view->getEMAILCliente();
        $datiCliente = $db->caricaRiga('cliente', $emailCliente);
        
        U_operazioni::inserisciDati($cliente, $datiCliente);
        $db->cancellaRiga('cliente', $cliente);
        
        $clienti=$db->caricaTabella('cliente');
        print_r($clienti);
        
    }
    
    public function bandaCliente(){
        $view = new V_amministratore();
        $db = new F_database();
        $cliente = new E_cliente();
        $emailCliente = $view->getEMAILCliente();
        $datiCliente = $db->caricaRiga('cliente', $emailCliente);
        U_operazioni::inserisciDati($cliente, $datiCliente);
        $cliente->setAttivazione('non_attivo');
        $db->aggiornaRiga('cliente', $cliente);
        
    }
    
    public function getOrdiniConfermati() {
        //$view = new V_amministratore();
        $db = new F_database();
        //$ordine = new E_ordine();
        $ordini = $db->caricaTabella('ordine');
        print_r($ordini);
    }
    
    public function listaProdotti(){
        $db=new F_database();
        $prodotto= new E_prodotto();
        $view = new V_amministratore();
        $lista= array();
        $datiprodotto = $db->caricaTabella('prodotto');
        $i=0;
        foreach ($datiprodotto as $value){
            U_operazioni::inserisciDati($prodotto, $value);
            $lista[$i]=$prodotto;
            $i++;
        }
        $view->getListaProdotti($lista);
    }
    
}
