<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of C_visualizzazione
 *
 * @author daniele
 */
class C_visualizzazione{
    
    public function paginaIniziale() {
        $view=new V_view();
        
        if(isset($_COOKIE["Sammartino"])){
            $sessione=  U_singolaistanza::getIstanza("U_sessione");
            if($sessione->leggi_valore('nome_cognome')){
                $nome_cognome=$sessione->leggi_valore('nome_cognome');
                $view->inserisciDatiTemplate('utente', $nome_cognome);
            }else{
                $view->inserisciDatiTemplate('utente', 'Ospite');
            }
        }
        /**/
        
        $view->impostaTemplate('home_default.tpl');
    }
    
    public function chisiamo() {
        
        $view=new V_view();
        /**/
        $view->impostaTemplate('chi_siamo.tpl');
    }
    
    public function Galleria() {
        
        $view=new V_view();
        /**/
        $view->impostaTemplate('galleria.tpl');
    }
    
    public function carrello() {
        $view=new V_view();
        $C_ordine= new C_fareOrdine();
        $ordine = $C_ordine->mostraCarrello();
        $view->inserisciDatiTemplate('prodotti',$ordine);
        $view->impostaTemplate('carrello.tpl');
    }
    
     public function effettuaOrdine() {
        $view=new V_view();
        //$C_ordine= new C_fareOrdine();
        //$ordine = $C_ordine->mostraCarrello();
        //$view->inserisciDatiTemplate('prodotti',$ordine);
        $view->impostaTemplate('pagamento.tpl');
    }
    
    public function registrazione() {
        
        $view=new V_view();
        /**/
        $view->impostaTemplate('form_registrazione_cliente.tpl');/**/
    }
    
    public function home() {
        
        $view=new V_view();
        /**/
        $view->impostaTemplate('home.tpl');
    }
    
    public function DoveSiamo() {
        
        $view=new V_view();
        /**/
        $view->impostaTemplate('dove_siamo.tpl');
    }
    
    public function vetrina() {
        $db= new F_database();
        $prodotti=$db->caricaTabella('prodotto');
        $view=new V_view();
        $view->inserisciDatiTemplate('prodotti', $prodotti);
        $view->impostaTemplate('vetrina.tpl');
    }
    
    public function login() {
        $view=new V_view();
        $view->impostaTemplate('login.tpl');
    }
    
    public function ricerca(){
        $db= new F_database();
        $view=new V_visualizzazione();
        $smarty=new V_view();
        $parametri=  array(
            array("NOME_PRODOTTO","like","%".$view->getRicerca()."%","OR"),
            array("categoria","like","%".$view->getRicerca()."%","")
            );
        $prodotti=$db->ricerca("prodotto", $parametri);
        
        $smarty->inserisciDatiTemplate('prodotti', $prodotti);
        $smarty->impostaTemplate('vetrina.tpl');
    }
    
    public function dettagliprodotto(){
        $view=new V_fareOrdine();
        $db= new F_database();
        $nome=$view->getNomeProdotto();
        print $nome;//test di verifica selezione prodotto
        $datiprod=$db->caricaRiga('prodotto',$nome);
        $datiCommenti=$db->joinReserch('commento,cliente',array(array("nome_prod_com","=",$nome,"AND"),array("EMAIL","=","user_commento","")),"data_commento DESC","5");
        //print_r($datiCommenti);
        $view->inserisciDatiTemplate('prodotto', $datiprod[0]);
        //$view->impostaTemplate('dettagli_prodotto.tpl');
        $view->inserisciDatiTemplate('commenti', $datiCommenti);
        $view->impostaTemplate('commento.tpl');
        //print_r($datiCommenti);
        
    }
    
}
