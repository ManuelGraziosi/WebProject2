<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once 'includes/config.php';
/**
 * Description of F_commento
 *
 * @author manuel
 */
class F_commento {
    //put your code here
    private $db;
    public function __construct() {
        $this->db=U_singolaistanza::getIstanza('F_database');
        //parent::__construct();
    }
    
    public function addCommento($commento){
        
        $query = "INSERT INTO `commento`(`testo`) VALUES ('$commento')";
        $this->db->query($query);
        return true;
    }
    
    public function getProdCommentList($nome_prod_com){
        
        $query = "SELECT * FROM `commento` WHERE nome_prod_com = '$nome_prod_com'";
        $result = $this->db->query($query);
        return $result;
    }

}
