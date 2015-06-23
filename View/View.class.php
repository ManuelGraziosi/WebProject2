<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of V_presentazione
 *
 * @author Daniele
 */

require_once 'smarty-libs/Smarty.class.php';

class View extends Smarty {

    public function __construct() {
        parent::__construct();
        $this->setTemplateDir('smarty-dir/templates');   // directory dei template
        $this->setCompileDir('smarty-dir/templates_c');
        $this->setCacheDir('smarty-dir/cache');
        $this->setConfigDir('smarty-dir/configs');	
    }

    public function impostaTemplate( $template ) {
	$this->display( $template );
    }

    public function inserisciDatiTemplate( $reference, $data  ) {
	$this->assign( $reference, $data );
    }
}

?>
