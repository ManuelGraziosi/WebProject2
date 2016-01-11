<?php
require_once 'PHP/includes/autoload.inc.php';
require_once 'PHP/includes/config.php';
/**/
$index=new C_home();
$index->esegui();
/**
$db= new F_database();
$parametri= array(array("nome_prod_com","=","Caciotta","AND"),array("testo","=","pippo",""));
print_r($parametri);print("<br>");
$d= $db->ricerca("commento", $parametri);
print_r($d);
/**/
?>
