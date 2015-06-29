<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of F_database
 *
 * @author Daniele
 */
class F_database {
    //put your code here
    private $_connessione;
    private $_query; 
        
    function __construct() {
        global $config;
        $dsn= $config['DBMS']['dsn'];
        $username = $config['DBMS']['username'];
        $passwd = $config['DBMS']['passwd'];
        $this->_connessione = $this->connessione($dsn, $username, $passwd);
    }
    
    public function connessione($dsn, $username, $passwd){
        try{
            return new PDO($dsn, $username, $passwd);
        }
        catch (PDOException $e){
            print 'Attenzione: '.$e->getMessage();
        }
    }

    public function query($query){
        $this->_query =$this->_connessione->prepare($query);//e uno strumento che permette di accedere in modalita protetta al riparo di minacce come SQL Injections
        
        $this->_query->execute();//prepare() mette a disposizione una query che dodrà essere esequita da execute()
    }
    
    public function getRisultati(){
        
        return $this->_query->fetchAll(PDO::FETCH_ASSOC);//restituisce array() multidimenzionale contenente output della query
    }
    
    
    
    public function caricaTabella($tabella){
        
        $this->query("SELECT * FROM $tabella;");
        //$this->query("SELECT * FROM $this->tabella;");
        return $this->getRisultati();
    }
    
    public function chiudi(){
        $this->_connessione=NULL;
    }
    
    /**
     * Memorizza sul database lo stato di un oggetto
     *
     * @param object $object
     * @return boolean
     */
    public function depositaRiga($tabella,& $object) {
        $i=0;
        $values='';
        $fields='';
        foreach ($object as $key=>$value) {
            if ($i==0) {
                $fields.='`'.$key.'`';
                $values.='\''.$value.'\'';
            } else {
                $fields.=', `'.$key.'`';
                $values.=', \''.$value.'\'';
            }
            $i++;
        }
        $query='INSERT INTO '.$tabella.' ('.$fields.') VALUES ('.$values.')';
        $return = $this->query($query);
        return $return;
    }
    
    
    /**
     * Carica in un oggetto lo stato dal database
     *
     * @param mixed $key
     * @return boolean
     */
    public function caricaRiga($tabella, $chiave) {
        global $config;
        $query='SELECT * ' .
                'FROM `'.$tabella.'` ' .
                'WHERE `'.$config[$tabella].'` = \''.$chiave.'\'';
        $this->query($query);
        return $this->getRisultati();
    }
    /**
     * Cancella dal database lo stato di un oggetto
     *
     * @param object $object
     * @return boolean
     */
    public function cancellaRiga($tabella,& $object) {
        global $config;
        $arrayObject=get_object_vars($object);
        $query='DELETE ' .
                'FROM `'.$tabella.'` ' .
                'WHERE `'.$config[$tabella].'` = \''.$arrayObject[$config[$tabella]].'\'';
        unset($object);
        return $this->query($query);
    }
    /**
     * Aggiorna sul database lo stato di un oggetto
     *
     * @param object $object
     * @return boolean
     */
    public function aggiornaRiga($tabella,& $object) {
        global $config;
        $i=0;
        $fields='';
        foreach ($object as $key=>$value) {
            if (!($key == $config[$tabella]) /**&& substr($key, 0, 1)!='_'/**/) {
                if ($i==0) {
                    $fields.='`'.$key.'` = \''.$value.'\'';
                } else {
                    $fields.=', `'.$key.'` = \''.$value.'\'';
                }
                $i++;
            }
        }
        $arrayObject=get_object_vars($object);
        $query='UPDATE `'.$tabella.'` SET '.$fields.' WHERE `'.$config[$tabella].'` = \''.$arrayObject[$config[$tabella]].'\'';
        return $this->query($query);
    }
    
    /**
     * Effettua una ricerca sul database
     *
     * @param array $parametri
     * @param string $ordinamento
     * @param string $limit
     * @return array
     */
    function ricerca($tabella,$parametri = array(), $ordinamento = '', $limit = '') {
        $filtro='';
        for ($i=0; $i<count($parametri); $i++) {
            if ($i>0) $filtro .= ' AND';
            $filtro .= ' `'.$parametri[$i][0].'` '.$parametri[$i][1].' \''.$parametri[$i][2].'\'';
        }
        $query='SELECT * ' .
                'FROM `'.$tabella.'` ';
        if ($filtro != '')
            $query.='WHERE '.$filtro.' ';
        if ($ordinamento!='')
            $query.='ORDER BY '.$ordinamento.' ';
        if ($limit != '')
            $query.='LIMIT '.$limit.' ';
        $this->query($query);
        return $this->getRisultati();
    }
    
}

?>
