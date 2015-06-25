<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once('config.inc.php');
/**
 * Description of F_newsletter
 *
 * @author manuel
 */
class F_newsletter extends F_database{
    
    public function __construct() {
        U_singolaistanza::getInstance('F_database');
    }
    
    public function addEmail($email){
        $query = "INSERT INTO '$dbname'.`$dbtable` (`email`) VALUES ('$email')";
        $this->query($query);
        return true;
    }
    
    public function delEmail($email){
        $query = "DELETE FROM '$dbname'.'$dbtable' WHERE email = '$email'";
        $this->query($query);
        return true;
        
    }
}
