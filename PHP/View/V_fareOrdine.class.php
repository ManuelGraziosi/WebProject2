<?php
/**
 * Description of V_fareOrdine
 *
 * @author daniele
 */
class V_fareOrdine extends V_view{
    //put your code here
    /**
     * Restituisce l'id del libro passato per GET o POST
     *
     * @return mixed
     */
    public function getNomeProdotto() {
        if (isset($_REQUEST['NOME_PRODOTTO'])) {
            return $_REQUEST['NOME_PRODOTTO'];
        }
        else{
            return false;
        }
    }
    
    public function getQuantita() {
        if (isset($_REQUEST['quantita'])) {
            return $_REQUEST['quantita'];
        } 
        else{
            return false;
        }
    }
    
    public function mostraNotifica($item){
        header("Content-type: application/json");
        print json_encode($item);
    }
}
