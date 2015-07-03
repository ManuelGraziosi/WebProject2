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
        $view->inserisciDatiTemplate('titolo', 'home');
        $view->impostaTemplate('home_default.tpl');
    }
    
    public function newsletter() {
        
        $view=new V_view();
        /**/
        $view->impostaTemplate('newsletter.tpl');
    }
    
    public function carrello() {
        $db= new F_database();
        $prodotti=$db->caricaTabella('prodotto');
        $view=new V_view();
        /**/
        $view->inserisciDatiTemplate('prodotti', $prodotti);
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
}
