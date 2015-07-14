<?php
/**
 * Description of U_operazioni
 *
 * @author daniele
 */
class U_operazioni {
    
    public static function inserisciDati(&$oggetto, $dati){
        if(is_array($dati)){
            $dati=$dati[0];
        }
        foreach ($dati as $key => $value) {
            $oggetto->$key=$value;
        }
    }
}
