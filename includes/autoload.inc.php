<?php
function __autoload($class_name) {
    switch ($class_name[0]) {
        case 'V':
            require_once ('View/'.$class_name.'.class.php');
            break;
        case 'F':
            require_once ('Foundation/'.$class_name.'.class.php');
            break;
        case 'E':
            require_once ('Entity/'.$class_name.'.class.php');
            break;
        case 'C':
            require_once ('Controller/'.$class_name.'.class.php');
            break;
        case 'U':
            require_once ('Foundation/Utility/'.$class_name.'.class.php');
    }
}
?>
