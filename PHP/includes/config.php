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

$config['smarty']['template_dir'] = 'PHP/templates/template';
$config['smarty']['compile_dir'] = 'PHP/templates/templates_c';
$config['smarty']['config_dir'] = 'PHP/templates/configs';
$config['smarty']['cache_dir'] = 'PHP/templates/cache';
?>
