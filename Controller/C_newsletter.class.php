<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of C_newsletter
 *
 * @author manuel
 */
class C_newsletter {
    //put your code here
     public function iscrizioneNewsletter() {
         
         $view=U_singolaistanza::getIstanza('V_newsletter');
         $view=new V_newsletter();//serve solo per richiamare velocemente i metodi
         $email=new E_newsletter();
         
         $email->setEMAIL($view->getEmail());
         print_r($email);
         $db=new F_newsletter();
         $db->addEmail($email->getEMAIL());
         
     }
     
}
