<?php
global $config;
$config['DBMS']['dsn']='mysql:host=localhost;dbname=sammartino';
$config['DBMS']['username']="root";
$config['DBMS']['passwd']="";

$config['cliente']='EMAIL';
$config['pagamento']='ID_PAGAMENTO';
$config['commento']='ID_COMMENTO';
$config['newsletter']='email';
$config['ordine']='ID_ORDINE';
$config['prodotto']='NOME_PRODOTTO';
$config['prod_ordinato']='ID_PROD_ORDINATO';

$config['smarty']['template_dir'] = 'templates/main/template';
$config['smarty']['compile_dir'] = 'templates/main/templates_c';
$config['smarty']['config_dir'] = 'templates/main/configs';
$config['smarty']['cache_dir'] = 'templates/main/cache';
?>