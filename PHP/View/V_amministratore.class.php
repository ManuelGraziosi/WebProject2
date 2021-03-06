<?php

/**
 * Description of V_amministratore
 *
 * @author daniele
 */
class V_amministratore extends V_view{
    
    public function getNomeProdotto() {
        if(isset($_REQUEST['NOME_PRODOTTO'])){
            return $_REQUEST['NOME_PRODOTTO'];
        }
        else{
            return false;
        }
    }
    
    public function getPassword() {
        if(isset($_REQUEST['password'])){
            return $_REQUEST['password'];
        }
        else{
            return false;
        }
    }
    
    public function getEMAILCliente() {
        if(isset($_REQUEST['EMAIL'])){
            return $_REQUEST['EMAIL'];
        }
        else{
            return false;
        }
    }
    
    public function getUsername() {
        if(isset($_REQUEST['username'])){
            return $_REQUEST['username'];
        }
        else{
            return false;
        }
    }
    
    public function getDatiProdotto() {
        $chiavi = array('NOME_PRODOTTO', 'foto', 'descrizione', 'categoria', 'prezzo_kg', 'disponibilita');
        foreach ($chiavi as $value) {
            if(isset($_REQUEST[$value])){
                $dati[0][$value] = $_REQUEST[$value];
            }
            else{
                $dati[0][$value] = false;
            }
        }
        return $dati;
    }
    
    public function getListaProdotti($lista) {
        header("Content-Type: application/json");
        $chiavi = array('NOME_PRODOTTO'/**, 'foto', 'descrizione', 'categoria', 'prezzo_kg', 'disponibilita'/**/);
        foreach ($chiavi as $value) {
            if(isset($_REQUEST[$value])){
                $dati[0][$value] = $_REQUEST[$value];
            }
            else{
                $dati[0][$value] = false;
            }
        }
        echo $dati;
    }
    
    public function inviaDatiProdotto($datiProdotto){
        header("Content-Type: application/json");
        print json_encode($datiProdotto);
    }
    
}
