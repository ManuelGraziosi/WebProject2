<?php
/**
 * @access public
 * @author Daniele Scarpone
 * @package System
 */
class U_sessione {
    public function __construct() {
        session_start();
    }
    public function imposta_valore($chiave,$valore) {
        $_SESSION[$chiave]=$valore;
    }
    public function cancella_valore($chiave) {
        unset($_SESSION[$chiave]);
    }
    public function leggi_valore($chiave) {
        if (isset($_SESSION[$chiave]))
            return $_SESSION[$chiave];
        else
            return false;
    }
    public function chiudi_sessione() {
        session_unset();
        session_destroy();
    }
}
?>
