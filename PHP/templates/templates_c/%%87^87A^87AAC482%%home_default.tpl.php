<?php /* Smarty version 2.6.26, created on 2015-07-28 14:08:13
         compiled from home_default.tpl */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title><?php echo $this->_tpl_vars['titolo']; ?>
</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="icon" href="PHP/templates/template/images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" media="screen" href="PHP/templates/template/css/style.css" />
    <script type="text/javascript" src="JS/Utility/Jquery/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="JS/Utility/Jquery/jquery.js"></script>
    <script type="text/javascript" src="JS/Utility/Jquery/scripts.js"></script>
    
    
    <script type="text/javascript" src="JS/Controller/C_home.js"></script>
    <script type="text/javascript" src="JS/Controller/C_registrazione.js"></script>
    <script type="text/javascript" src="JS/View/V_registrazione.js"></script>
    
    <script type="text/javascript" src="JS/Controller/C_newsletter.js"></script>
    <script type="text/javascript" src="JS/View/V_newsletter.js"></script>
    
    <script type="text/javascript" src="JS/index.js"></script>
    
    
    
    <link rel="stylesheet" type="text/css" media="screen" href="JS/Utility/Jquery/jquery-ui-1.11.4.custom/jquery-ui.min.css" /> 
    <script type="text/javascript" src="JS/Utility/Jquery/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
</head>

<body>
    <div id="container" class="clearfix">

       <div id="headercont" class="clearfix">
            <div id="headerlogo">
             <img id="logo" src='PHP/templates/template/images/logo-sammartino.jpg'/>
            </div>
            <div id="headergallery">
                <div id="slideshow">
                   <img alt="" src="PHP/templates/template/images/immagine-top1.jpg" class="active" />
                   <img alt="" src="PHP/templates/template/images/immagine-top2.jpg" />
                   <img alt="" src="PHP/templates/template/images/immagine-top3.jpg" />
                </div>
            </div>
        </div>
    
    <div id="maincont" class="clearfix">
        <div id="top-bar">

            <div id="user-space">
                <img id="user_pic" src="PHP/templates/template/images/user.png" /><div id="utente">Ospite (verrà cambiato dal js)</div>
                <div id="logout">Logout</div>
            </div>

            <div id="menucont">
                <ul>
                    <li><a id="home" title="Home" class="active">Home</a></li>
                    <li><a id="chisiamo" title="ChiSiamo">Chi Siamo</a></li>
                    <li><a id="dovesiamo" title="DoveSiamo">Dove Siamo</a></li>
                    <li><a id="galleria" title="Galleria">Galleria</a></li>
                    <li><a id="vetrina" title="Vetrina">Vetrina</a></li>
                </ul>

                <span id="menuright">
                    <div id="formsearch">
                                <!--<form method="get" action="">-->
                                    <input id="barracerca" type="text" name="cercavetrina" placeholder="Cerca nella vetrina" />
                                    <button id="buttonsearch" name="vai" type="submit">
                                        <img id="searchimg" src="PHP/templates/template/images/Search.png">
                                    </button>
                                <!--</form>-->
                    </div>
                    <div id="car">
                        <ul>
                            <li><a id="carrello" title="Carrello">Carrello<img id="cart" alt="Carrello" src="PHP/templates/template/images/cart/cart.png"/></a></li>
                        </ul>
                    </div>
                </span>
                
            </div>

        </div>
        <div id="mainleft">
            <h3>Caseificio Sammartino</h3>
            <p>"AD OGNI PASTO PUOI PRENDERTI CURA DI TE PORTANDO A TAVOLA GLI OTTIMI E GENUINI PRODOTTI DEL CASEIFICIO SAMMARTINO"</p>
            
            <div id="menufisarmonica">
                <h7>LOGIN / REGISTRAZIONE</h7>
                    <div id="login" class=".ui-accordion .ui-accordion-header ">
                        <p align="center">ACCEDI</p>
                        Email: <br> <input type="email" id="EMAIL"/>
                        Password:<input type="password" id="password"/>
                        <button id="invialogin">Login</button> <br><br>
                        Non sei iscritto? <a id="registrazione" title="Registrati">REGISTRATI</a>
                    </div>
                <h7>CONTATTACI</h7>
                    <div id="contattaci">
                        <b>Az. Agricola SAMMARTINO</b><br><br>
                        <pre>Indirizzo:</pre>
                        Via salita San Martino<br>
                        64100 Teramo -Te-<br><br>
                        <pre>Tel.: 0861-286413</pre>
						<pre>Cell.: 333-1773133</pre><br>
						<pre>Email: </pre>
						az.sammartino@gmail.com                
                    </div>
                <h7 id="newsletter">NEWSLETTER</h7>
                    <div id="newsletterdiv">
                       <p>Iscriviti alla Newsletter e rimani aggiornato!</p>
                       E-mail: <input id="EMAIL_newsletter" type="text" name="EMAIL">
                       <button id="submit_newsletter">Iscriviti</button>
                       <br><br><div id="notifica_newsletter"></div>
                   </div>
            </div>

            <br><br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi arcu, lacinia scelerisque blandit nec, mattis non nibh. Curabitur quis urna at massa placerat auctor. Quisque et mauris sapien, a consectetur nulla.</p>
        </div>

        <div id="mainright">
            <!-- - - - - - - - - - - - -CORPO CHE CAMBIERA' SEMPRE- - - - - - - - - - - - - -->
        </div>

    </div>

</div>

<div id="footercont">
  <p>
    Template by <a title="download website templates" href="http://www.downloadwebsitetemplates.co.uk" rel="external">Download Website Templates</a> - Designed by <a title="Mario Valdeburgo Git Hub" href="https://github.com/MarioValdeburgo" rel="external">Mario Valdeburgo</a>
     - © Copyright 2015
  </p>
</div>

</body>
</html>