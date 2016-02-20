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
        
        if($EmailCom){
        //qui creo 
        $view=U_singolaistanza::getIstanza('V_commento');
        //$view=new V_commento();//serve solo per richiamare velocemente i metodi
         //prelevamento dei dati da mettere in db dalla view
        $ProductCOM = $view->getProductCom();
        $DateCOM = $view->getDateCOM();
        $TextCOM = $view->getTextCOM();
        
        //creazione dell'oggetto commento con relativi valori, per inserimento in DB
        $commento = new E_commento();
        $commento->setData_commento($DateCOM);
        $commento->setNome_prod_com($ProductCOM);
        $commento->setTesto($TextCOM);
        $commento->setUser_commento($EmailCom);
        $commento->setVoto(NULL);
        
         
         $db=new F_commento();
         $db->addCommento($commento);
         
         
         header("Content-type: application/html");
         
         echo "Commento inserito con SUCCESSO!!!";
        }
        else{
            echo "Eseguire prima il Login!";
        }
         /**
         $db=new F_newsletter();
         $db->addEmail($email->getEMAIL());
         /**/
     }
}
