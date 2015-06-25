<?php
require_once 'includes/autoload.inc.php';
require_once 'includes/config.php';
/**/
$index=new C_home();
$index->esegui();
/**
$db=new F_database();
$datiprodotto=$db->caricaRiga("Prodotto", 'Caciotta');
$dati=new E_prodotto();
$prodotto=$datiprodotto[0];
foreach ($prodotto as $key => $value) {
    $dati->$key=$value;
}
/**
$db=new F_database();
$nome="Caciotta";
$datiprodotto=$db->caricaRiga("Prodotto",$nome);
$cliente=new E_cliente();
$nome="danielescarpone@gmail.com";
$daticliente=$db->caricaRiga("Cliente", $nome);
print_r($daticliente);
$ordine=new E_ordine();
$prod_ordinato=new E_prod_ordinato();
$prodotto=new E_prodotto();
U_operazioni::inserisciDati($prodotto, $datiprodotto);
U_operazioni::inserisciDati($cliente, $daticliente);
$quantita=25;
$prod_ordinato->setProdotto($prodotto);
$ordine->inserisciProdotto($prod_ordinato, $quantita);
//$ordine->setCliente($cliente);
//$cliente->aggiungiOrdine($ordine);
/**/
?>
