<?php
/**
 * Description of U_operazioni
 *
 * @author daniele
 */
class U_operazioni {
    
    public static function inserisciDati(&$oggetto, $dati){
        if(!array_key_exists('NOME_PRODOTTO', $dati)){
            $dati=$dati[0];
        }
        foreach ($dati as $key => $value) {
            $oggetto->$key=$value;
        }
    }
}
