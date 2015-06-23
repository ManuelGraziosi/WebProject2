<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of E_newsletter
 *
 * @author manuel
 */
class E_newsletter {
    //put your code here
     /**
    * @AttributeType string
    */
    public $EMAIL;
    
    public function getEMAIL() {
        return $this->EMAIL;
    }

    public function setEMAIL($EMAIL) {
        $this->EMAIL = $EMAIL;
    }


}
