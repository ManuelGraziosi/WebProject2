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
        //$view->inserisciDatiTemplate('titolo', 'home');
        $view->impostaTemplate('home_default.tpl');
    }
    
    public function chisiamo() {
        
        $view=new V_view();
        /**/
        $view->impostaTemplate('chi_siamo.tpl');
    }
    
    public function carrello() {
        $view=new V_view();
        $view->impostaTemplate('carrello.tpl');
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
            array("NOME_PRODOTTO","like","%".$view->getRicerca()."%"),
            array("categoria","like","%".$view->getRicerca()."%")
            );
        $prodotti=$db->ricerca("prodotto", $parametri);
        
        $smarty->inserisciDatiTemplate('prodotti', $prodotti);
        $smarty->impostaTemplate('vetrina.tpl');
    }
    
    public function amministrazione() {
        /**
        $view=new V_view();
        $db= new F_database();
        $datiprod=$db->caricaTabella('prodotto');
        $daticlie=$db->caricaTabella('cliente');
        $datiprodotto=$db->caricaRiga("prodotto", "Caciotta");
        $view->inserisciDatiTemplate('prodotto', $datiprodotto);
        $view->inserisciDatiTemplate('prodotti', $datiprod);
        $view->inserisciDatiTemplate('clienti', $daticlie);
        $view->impostaTemplate('amministrazione.tpl');
        /**/
     header("location: /amministrazione.html");
    }
    
}
