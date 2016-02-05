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
         //qui pescoi dati della sessione, nello specifico prendo la email
        $sessione=  U_singolaistanza::getIstanza('U_sessione');
        //$sessione=new U_sessione();
        $EmailCom=$sessione->leggi_valore("email");
        
        //qui creo 
        $view=U_singolaistanza::getIstanza('V_commento');
        //$view=new V_commento();//serve solo per richiamare velocemente i metodi
         //prelevamento dei dati da mettere in db dalla view
        $ProductCOM = $view->getProductCom();
        $DateCOM = $view->getDateCOM();
        $TextCOM = $view->getTextCOM();
        
        //creazione dell'oggetto commento con relativi valori, per inserimento in DB
        $commento = new E_commento();
        $commento->getData_commento($DateCOM);
        $commento->getNome_prod_com($ProductCOM);
        $commento->getTesto($TextCOM);
        $commento->getUser_commento($EmailCom);
        $commento->getVoto(NULL);
        
         
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
