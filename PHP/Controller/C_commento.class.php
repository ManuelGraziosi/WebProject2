<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of C_commento
 *
 * @author manuel
 */
class C_commento {
    //put your code here
     public function inserisci_commento() {
         
         $view=U_singolaistanza::getIstanza('V_commento');
         $view=new V_commento();//serve solo per richiamare velocemente i metodi
         $commento=new V_commento();
         
         $email->setEMAIL($view->getEmail());
         $db=new F_database();
         $db->depositaRiga("newsletter", $email);
         
         
         header("Content-type: application/json");
         $t=true;
         echo json_encode($t);
         /**
         $db=new F_newsletter();
         $db->addEmail($email->getEMAIL());
         /**/
     }
}
