<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of F_cliente
 *
 * @author Daniele
 */
class F_cliente extends F_database {
    
    
    public function __construct() {
        U_singolaistanza::getInstance('F_database');
    }
    
    public function carica($chiave){
        $query='SELECT * ' .
                'FROM clienti ' .
                'WHERE username = \''.$chiave.'\'';
        $this->query($query);
        return $this->getRisultati();
    }
    
    public function deposita(& $cliente) {
        $valori="'$cliente->username', '$cliente->nome', '$cliente->cognome', '$cliente->password', '$cliente->email', '$cliente->via', '$cliente->codice_attivazione', '$cliente->stato', '$cliente->citta', '$cliente->CAP'";
        $query='INSERT INTO utenti(username, nome, cognome, password, email, via, codice_attivazione, stato, citta, CAP)';
        $query.="VALUES (".$valori.")";
        return $return = $this->query($query);
        /**
        if ($this->_auto_increment) {
            $query='SELECT LAST_INSERT_ID() AS `id`';
            $this->query($query);
            $result=$this->getResult();
            return $result['id'];
        } else {
            return $return;
        }
        /**/
    }
}

?>
