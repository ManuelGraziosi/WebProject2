<?php

/**
 * Description of C_registrazione
 *
 * @author daniele
 */
class C_registrazione {
    /**
     * @var string $_EMAIL
     */
    private $_email=null;//per il momento inutilizzati ma non li cancellate
    /**
     * @var string $_password
     */
    private $_password=null;//per il momento inutilizzati ma non li cancellate
    /**
     * @var string $_messaggio
     */
    private $_messaggio=array('cliente'=>'Ospite','errore'=>'');
    
    /**
     * Crea un cliente sul database controllando che non esista già
     *
     * @return mixed
     */
    public function creaCliente() {
        $sessione= U_singolaistanza::getIstanza('U_sessione');
        $view = U_singolaistanza::getIstanza('V_registrazione');
        $datiCliente=$view->getDatiRegistrazione();
        $cliente=new E_cliente();
        $db=new F_database();
        $result = $db->caricaRiga('cliente',$datiCliente['EMAIL']);
        $registrato=false;
        if ($result==false) {
            //cliente non esiste
            if($datiCliente['password_1']==$datiCliente['password']) {
                unset($datiCliente['password_1']);
                $keys=array_keys($datiCliente);
                $i=0;
                foreach($datiCliente as $dato){
                    $cliente->$keys[$i]=$dato;
                    $i++;
                }
                $cliente->generaCodiceAttivazione();
                $db->depositaRiga("cliente", $cliente);
                //$this->emailAttivazione($cliente);
                $registrato=true;
            } else {
                $this->_messaggio='Le password immesse non coincidono';
            }
        } else {
            //cliente esistente
            $this->_messaggio='Email gi&agrave; utilizzato';
        }
        if (!$registrato) {
            print $this->_messaggio;
        } else {
            print 'tutto apposto';
        }
    }
    
    
    
    /**
     * Controlla se una coppia EMAIL e password corrispondono ad un cliente regirtrato ed in tal caso impostano le variabili di sessione relative all'autenticazione
     *
     * @param string $email
     * @param string $password
     * @return boolean
     */
    
    public function autentica() {
        header('Content-Type: application/json');
        $view=new V_registrazione();
        $db=new F_database();
        $cliente=new E_cliente();
        $email=$view->getEmail();
        $password=$view->getPassword();
        $clientedati=$db->caricaRiga("cliente", $email);
        if(count($clientedati)==1){
            U_operazioni::inserisciDati($cliente, $clientedati);
        }
        if ($cliente!=false) {
            if ($cliente->getAccountAttivo()) {
                //account attivo
                if ($email == $cliente->getEmail() && $password == $cliente->getPassword()) {
                    $sessione=U_singolaistanza::getIstanza('U_sessione');
                    $sessione->imposta_valore('email',$email);
                    $sessione->imposta_valore('nome_cognome',$cliente->getNome().' '.$cliente->getCognome());
                    $this->_messaggio['cliente']=$cliente->getNome().' '.$cliente->getCognome();
                    //$sessione->leggi_valore('nome_cognome');
                } else {
                    $this->_messaggio['errore']='Email o password errati';
                    //EMAIL password errati
                }
            } else {
                $this->_messaggio['errore']='L\'account non è attivo';
                //account non attivo
            }
        } else {
            $this->_messaggio['errore']='L\'account non esiste';
            //account non esiste
        }
        //print_r($this->_messaggio);
        echo json_encode($this->_messaggio);
    }
    
    /**
     * Effettua il logout
     */
    public function logout() {
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        $sessione->cancella_valore('email');
        $sessione->cancella_valore('nome_cognome');
    }
}
?>