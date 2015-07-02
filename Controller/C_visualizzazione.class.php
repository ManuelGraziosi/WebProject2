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
class C_visualizzazione {
    public function paginaIniziale() {
        $db= new F_database();
        $prodotti=$db->caricaTabella('Prodotto');
        $view=new V_view();
        /**
        $view->inserisciDatiTemplate('titolo', 'sembra che funziona');
        $view->inserisciDatiTemplate('prodotti', $prodotti);
        $view->impostaTemplate('carrello.tpl');
        /**/
        $view->impostaTemplate('form_registrazione_cliente.tpl');
    }
}
