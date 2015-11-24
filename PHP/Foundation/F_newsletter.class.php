<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once 'includes/config.php';
/**
 * Description of F_newsletter
 *
 * @author manuel
 */
class F_newsletter{
    private $db;
    public function __construct() {
        $this->db=U_singolaistanza::getIstanza('F_database');
        //parent::__construct();
    }
    
    public function addEmail($email){
        
        $query = "INSERT INTO `newsletter`(`email`) VALUES ('$email')";
        $this->db->query($query);
        return true;
    }
    
    public function delEmail($email){
        $query = "DELETE FROM 'newsletter' WHERE email = '$email'";
        $this->query($query);
        return true;
        
    }
}
