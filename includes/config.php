<?php
global $config;
$config['DBMS']['dsn']='mysql:host=localhost;dbname=Sammartino';
$config['DBMS']['username']="root";
$config['DBMS']['passwd']="";

$config['Cliente']='EMAIL';
$config['Pagamento']='ID_PAGAMENTO';
$config['Commento']='ID_COMMENTO';
$config['Newsletter']='email';
$config['Ordine']='ID_ORDINE';
$config['Prodotto']='NOME_PRODOTTO';
$config['Prod_ordinato']='ID_PROD_ORDINATO';

$config['smarty']['template_dir'] = 'templates/main/template';
$config['smarty']['compile_dir'] = 'templates/main/templates_c';
$config['smarty']['config_dir'] = 'templates/main/configs';
$config['smarty']['cache_dir'] = 'templates/main/cache';
?>