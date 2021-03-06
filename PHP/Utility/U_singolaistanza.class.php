<?php
class U_singolaistanza {
   /**
   * La variabile statica privata che conterrà l'istanza univoca
   * della nostra classe.
   */
   private static $istanze = array();

   /**
   * Il costruttore in cui ci occuperemo di inizializzare la nostra
   * classe. E' opportuno specificarlo come privato in modo che venga
   * visualizzato automaticamente un errore dall'interprete se si cerca
   * di istanziare la classe direttamente.
   */
   private function __construct()
   {
      // vuoto
   }

   /**
   * Il metodo statico che si occupa di restituire l'istanza univoca della classe.
   */
   public static function getIstanza($c)
   {
        if( ! isset( self::$istanze[$c] ) )
        {
            self::$istanze[$c] = new $c;
        }
        return self::$istanze[$c];
   }
}
?>
