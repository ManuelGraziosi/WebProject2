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
     * @var string $_errore
     */
    private $_errore='';
    
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
                $this->_errore='Le password immesse non coincidono';
            }
        } else {
            //cliente esistente
            $this->_errore='Email gi&agrave; utilizzato';
        }
        if (!$registrato) {
            print $this->_errore;
            /**
            $view->impostaErrore($this->_errore);
            $this->_errore='';
            $view->setLayout('problemi');
            $result=$view->processaTemplate();
            $view->setLayout('modulo');
            $result.=$view->processaTemplate();
            $view->impostaErrore('');
            return $result;
            /**/
        } else {
            print 'tutto apposto';
            /**
            $view->setLayout('conferma_registrazione');
            return $view->processaTemplate();
            /**/
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
        
        $view=new V_registrazione();
        $email=$view->getEmail();
        $password=$view->getPassword();
        
        
        $db=new F_database();
        $clientedati=$db->caricaRiga("cliente", $email);
        
        //print_r($clientedati);
        if(true){
            $cliente=new E_cliente();
            U_operazioni::inserisciDati($cliente, $clientedati);
        }
        
        
        if ($cliente!=false) {
            if ($cliente->getAccountAttivo()) {
                //account attivo
                if ($email==$cliente->getEmail() && $password==$cliente->getPassword()) {
                    
                    $sessione=U_singolaistanza::getIstanza('U_sessione');
                    $sessione->imposta_valore('email',$email);
                    $sessione->imposta_valore('nome_cognome',$cliente->getNome().' '.$cliente->getCognome());
                    return true;
                } else {
                    $this->_errore='Email o password errati';
                    //EMAIL password errati
                }
            } else {
                $this->_errore='L\'account non &egrave; attivo';
                //account non attivo
            }
        } else {
            $this->_errore='L\'account non esiste';
            //account non esiste
        }
        
        return false;
    }
}
?>