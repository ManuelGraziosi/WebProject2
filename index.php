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
$ordine=new E_ordine();
$prodottoOrdinato=new E_prod_ordinato();
$db=new F_database();
$datiprodotto=$db->caricaRiga("Prodotto", 'Caciotta');
$prodotto=new E_prodotto();
$prodotto->inserisciDati($datiprodotto);
$prodottoOrdinato->setProdotto($prodotto);
$ordine->inserisciProdotto($prodottoOrdinato, 5);
$ordine->inserisciProdotto($prodottoOrdinato, 5);
print "prodotto<br>";
print_r($prodotto);
print "<br>Prodotto ordinato<br>";
print_r($prodottoOrdinato);
print "<br>ordine<br>";
print_r($ordine);
$ordine->rimuoviProdotto('Caciotta');
print "<br><br>prodotto<br>";
print_r($prodotto);
print "<br>Prodotto ordinato<br>";
print_r($prodottoOrdinato);
print "<br>ordine<br>";
print_r($ordine);
/**/
?>