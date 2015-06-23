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

require_once 'lib/smarty/Smarty.class.php';

class V_view extends Smarty {

    public function __construct() {
        /**
        parent::__construct();
        $this->setTemplateDir($config['smarty']['template_dir']);   // directory dei template
        $this->setCompileDir($config['smarty']['compile_dir']);
        $this->setCacheDir($config['smarty']['config_dir']);
        $this->setConfigDir($config['smarty']['cache_dir']);
        /**/
        
        $this->Smarty();
        global $config;
        
        $this->template_dir = $config['smarty']['template_dir'];
        $this->compile_dir = $config['smarty']['compile_dir'];
        $this->config_dir = $config['smarty']['config_dir'];
        $this->cache_dir = $config['smarty']['cache_dir'];
        $this->caching = false;
    }

    public function impostaTemplate( $template ) {
	$this->display( $template );
    }

    public function inserisciDatiTemplate( $reference, $data  ) {
	$this->assign( $reference, $data );
    }
}

?>
