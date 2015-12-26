<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of V_commento
 *
 * @author manuel
 */
class V_commento {
    //put your code here
    public function getNomeProdCom(){
        
        return ;
    }
    
    public function getDataCom(){
        /**
         *  Key 	Description                                             Example returned values
            "seconds" 	Numeric representation of seconds                       0 to 59
            "minutes" 	Numeric representation of minutes                       0 to 59
            "hours" 	Numeric representation of hours                         0 to 23
            "mday" 	Numeric representation of the day of the month          1 to 31
            "wday" 	Numeric representation of the day of the week           0 (for Sunday) through 6 (for Saturday)
            "mon" 	Numeric representation of a month                       1 through 12
            "year" 	A full numeric representation of a year, 4 digits       Examples: 1999 or 2003
            "yday" 	Numeric representation of the day of the year           0 through 365
            "weekday" 	A full textual representation of the day of the week 	Sunday through Saturday
            "month" 	A full textual representation of a month         	January through December
            0 	Seconds since the Unix Epoch, similar to the values 
         *     returned by time() and used by date().                           System Dependent, typically -2147483648 through 2147483647. 
         */
        $today = getdate();//Restituisce un array (vedi sopra)
        //da stabilire la formattazione della data
        return $today;
    }
    public function getUtenteCom(){
        if(isset($_REQUEST['commento'])){
            return $_REQUEST['commento'];
        }
        else{
            return false;
        }
    }
    public function getTestoCom(){
        if(isset($_REQUEST['commento'])){
            return $_REQUEST['commento'];
        }
        else{
            return false;
        }
    }
    public function getVotoCom(){
        if(isset($_REQUEST['commento'])){
            return $_REQUEST['commento'];
        }
        else{
            return false;
        }
    }
}
