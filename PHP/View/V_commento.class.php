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
    public function notificaDaCommento($notifica){
        header("Content-type: application/html");
        echo $notifica;
    }

    public function getProductCom(){
        if(isset($_REQUEST['ProductCOM'])){
            return $_REQUEST['ProductCOM'];
        }
        else{
            return false;
        }
    }
    public function getDateCOM(){
        if(isset($_REQUEST['DateCOM'])){
            return $_REQUEST['DateCOM'];
        }
        else{
            return false;
        }
    }
    public function getTextCOM(){
        if(isset($_REQUEST['TextCOM'])){
            return $_REQUEST['TextCOM'];
        }
        else{
            return false;
        }
    }
}
