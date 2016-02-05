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
        
        /**/
        $db= new F_database();//serve solo per richiamare velocemente i metodi
        $d= $db->depositaRiga("commento", $commento);
        //print_r($d);
        /**/
    }
    
    public function getProdCommentList($nome_prod_com){
        
        $query = "SELECT * FROM `commento` WHERE nome_prod_com = '$nome_prod_com'";
        $result = $this->db->query($query);
        return $result;
    }

}
