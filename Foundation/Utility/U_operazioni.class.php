<?php
/**
 * Description of U_operazioni
 *
 * @author daniele
 */
class U_operazioni {
    
    public static function inserisciDati(Object &$oggetto, $dati){
        
        foreach ($dati as $key => $value) {
            $oggetto->$key=$value;
        }
    }
}