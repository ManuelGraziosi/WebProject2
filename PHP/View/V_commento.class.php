<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of V_commento
 *
 * @author manuel
 */
class V_commento {
    //put your code here
    public function getNomeProdCom(){
        
        return ;
    }
    
    public function getDataCom(){
        if(isset($_REQUEST['commento'])){
            return $_REQUEST['commento'];
        }
        else{
            return false;
        }
    }
    public function getUtenteCom(){
        if(isset($_REQUEST['commento'])){
            return $_REQUEST['commento'];
        }
        else{
            return false;
        }
    }
    public function getTestoCom(){
        if(isset($_REQUEST['commento'])){
            return $_REQUEST['commento'];
        }
        else{
            return false;
        }
    }
    public function getVotoCom(){
        if(isset($_REQUEST['commento'])){
            return $_REQUEST['commento'];
        }
        else{
            return false;
        }
    }
}
