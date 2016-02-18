<?php
/**
 * @access public
 * @author Daniele Scarpone
 * @package System
 */
        session_name("Sammartino");
class U_sessione {
    public function __construct() {
        session_set_cookie_params(60*60*24*365);
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
        $parametri=  session_get_cookie_params();
        setcookie(session_name(),'',time()-(60*60*24*365),
                $parametri['path'],$parametri['domain'],
                $parametri['secure'],$parametri['httponly']);
        session_unset();
        session_destroy();
    }
    
    public function esiste_valore( $name ){
        return isset($_SESSION[$name]);
    }
}
?>
