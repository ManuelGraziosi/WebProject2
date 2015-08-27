<?php

/**
 * Description of C_amministratore
 *
 * @author daniele
 */
class C_amministratore {
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
    
    public function getOrdiniConfermati() {
        //$view = new V_amministratore();
        $db = new F_database();
        //$ordine = new E_ordine();
        $ordini = $db->caricaTabella('ordine');
        print_r($ordini);
    }
    
}
