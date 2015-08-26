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
        if (isset($_REQUEST['nome_prodotto'])) {
            return $_REQUEST['nome_prodotto'];
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
    
    public function mostraNotifica($tiponotivica, $item){
        header("Content-type: application/json");
        switch ($tiponotivica) {
            case 'aggiungi':
                print json_encode($item);
                break;
            case 'rimuovi':
                print json_encode($item);
                break;
            default:
                break;
        }
    }
}
