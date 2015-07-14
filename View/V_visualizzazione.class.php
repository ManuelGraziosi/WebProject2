<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of V_visualizzazione
 *
 * @author daniele
 */
class V_visualizzazione {
    public function getRicerca() {
        if (isset($_REQUEST['ricerca'])){
            return $_REQUEST['ricerca'];
        }
    }
}
