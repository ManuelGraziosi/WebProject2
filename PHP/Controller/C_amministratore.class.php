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
        
        if(isset($_COOKIE["Sammartino"])){
            $sessione= U_singolaistanza::getIstanza("U_sessione");
            //$sessione= new U_sessione();
            if($sessione->leggi_valore('admin')!=false){
                $db= new F_database();
                $datiprod=$db->caricaTabella('prodotto');
                $daticlie=$db->caricaTabella('cliente');
                $view->inserisciDatiTemplate('prodotti', $datiprod);
                $view->inserisciDatiTemplate('clienti', $daticlie);
                $view->impostaTemplate('amministrazione.tpl');
            }else{
                $view->impostaTemplate('login_amministrazione.tpl');
            }
        }else{
            $view->impostaTemplate('login_amministrazione.tpl');
        }
    }
    
    public function autenticaAdmin() {
        header('Content-Type: application/json');
        $view=new V_amministratore();
        $db=new F_database();
        $username=$view->getUsername();
        $password=$view->getPassword();
        $datiadmin=$db->caricaRiga("admin", $username);
        $sessione=U_singolaistanza::getIstanza('U_sessione');
        if ($username!=false) {
            if ($username == $datiadmin[0]['nome'] && $password == $datiadmin[0]['password']) {
                $sessione=U_singolaistanza::getIstanza('U_sessione');
                $sessione->imposta_valore('admin',$datiadmin[0]['nome']);
                $sessione->imposta_valore('password',$datiadmin[0]['password']);
                echo json_encode(array("mess"=>true));
            }
            else{
                echo json_encode(array("mess"=>"username e password sono errati"));
            }
        }
    }
    
    public function logoutAdmin(){
        if(isset($_COOKIE["Sammartino"])){
            $sessione= U_singolaistanza::getIstanza("U_sessione");
            $sessione->chiudi_sessione();
        }
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
        $username = new E_username();
        $emailCliente = $view->getEMAILCliente();
        $datiCliente = $db->caricaRiga('username', $emailCliente);
        
        U_operazioni::inserisciDati($username, $datiCliente);
        $db->cancellaRiga('username', $username);
        
        $clienti=$db->caricaTabella('username');
        print_r($clienti);
        
    }
    
    public function bandaCliente(){
        $view = new V_amministratore();
        $db = new F_database();
        $username = new E_username();
        $emailCliente = $view->getEMAILCliente();
        $datiCliente = $db->caricaRiga('username', $emailCliente);
        U_operazioni::inserisciDati($username, $datiCliente);
        $username->setAttivazione('non_attivo');
        $db->aggiornaRiga('username', $username);
        
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
