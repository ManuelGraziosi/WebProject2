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
/**/
?>