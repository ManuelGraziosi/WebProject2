<?php

    /* 
     * To change this license header, choose License Headers in Project Properties.
     * To change this template file, choose Tools | Templates
     * and open the template in the editor.
     */
    class V_newsletter {
        /**
        * input test for validation
        * @param type $data
        * @return type
        */
        private function testInput($data) {
          $data = trim($data);
          $data = stripslashes($data);
          $data = htmlspecialchars($data);
          return $data;
        }
        
        public function getEmail(){
            if(isset($_REQUEST['email'])){
                return $_REQUEST['email'];
            }
            else{
                return false;
            }
        }

    }

?>