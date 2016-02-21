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
     
    private function controlloDati($dati)
    		{
    			if(
    		       ereg("^[a-zA-Z' ]{2,30}$",$dati['nome']) &&
    		       ereg("^[a-zA-Z' ]{2,30}$",$dati['cognome']) &&
    		       eregi("^[a-z0-9][_.a-z0-9-]+@([a-z0-9][0-9a-z-]+.)+([a-z]{2,4})$",$dati['EMAIL']) &&
    		       ereg("^[[a-zA-Z0-9#!%\^&;\*\$:\{\}=\-_`~\(\)]{6,30}$",$dati['password']) &&
    		       ereg("^[a-zA-Z' ]{1,20}$",$dati['citta']) &&
    		       ereg("^[0-9a-zA-Z' ]{2,100}$",$dati['via']) &&
    		       ereg("^[0-9]{5}$",$dati['CAP'])
    		       )
    		       	return true; 
    			else 
    		     	return false;  
    		}
     
     
    public function creaCliente() {
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
	             if($this->controlloDati($datiCliente))
	               {
	                $i=0;
	                foreach($datiCliente as $dato){
	                    $cliente->$keys[$i]=$dato;
	                    $i++;
	                }
	                //$cliente->generaCodiceAttivazione();
	                $db->depositaRiga("cliente", $cliente);
	                //$this->emailAttivazione($cliente);
	                $registrato=true;
	                $this->_messaggio['corretto']='Registrato!';
	                $this->_messaggio['messaggio']='Registrato!';
	            }
	            else {
	            	$this->_messaggio['messaggio']='ERRORE';
	                 }   
               } 

            else {
                $this->_messaggio['messaggio']='Le password immesse non coincidono';
            }
        } else {
            //cliente esistente
            $this->_messaggio['messaggio']='Email gi&agrave; utilizzata';
        }
        $view->mostraNotifica($this->_messaggio);
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
        $this->_email=$view->getEmail();
        $this->_password=$view->getPassword();
        $clientedati=$db->caricaRiga("cliente", $this->_email);
        if(count($clientedati)==1){
            U_operazioni::inserisciDati($cliente, $clientedati);
        }
        $sessione=U_singolaistanza::getIstanza('U_sessione');
        if($sessione->leggi_valore('email')==false){
        
            if ($cliente!=false) {
                if ($cliente->getAccountAttivo()) {
                    //account attivo
                    if ($this->_email == $cliente->getEmail() && $this->_password == $cliente->getPassword()) {
                        $sessione=U_singolaistanza::getIstanza('U_sessione');
                        $sessione->imposta_valore('email',$this->_email);
                        $sessione->imposta_valore('nome_cognome',$cliente->getNome().' '.$cliente->getCognome());
                        $this->_messaggio['cliente']=$cliente->getNome().' '.$cliente->getCognome();
                        //$sessione->leggi_valore('nome_cognome');
                    } else {
                        $this->_messaggio['errore']='Email o password errati';
                        //EMAIL password errati
                    }
                } else {
                    $this->_messaggio['errore']='L\'account non &egrave; attivo';
                    //account non attivo
                }
            } else {
                $this->_messaggio['errore']='L\'account non esiste';
                //account non esiste
            }
        } else {
            $this->_messaggio['cliente']=$sessione->leggi_valore('nome_cognome');
            $this->_messaggio['errore']='Si deve effetuare il logout del cliente attuale';
        }
        //print_r($this->_messaggio);
        echo json_encode($this->_messaggio);
    }
    
    /**
     * Effettua il logout
     */
    public function logout() {
        if(isset($_COOKIE["Sammartino"])){
            $sessione= U_singolaistanza::getIstanza("U_sessione");
            $sessione->chiudi_sessione();
        }
    }
}
?>