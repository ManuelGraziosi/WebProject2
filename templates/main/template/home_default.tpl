<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>{$titolo}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="icon" href="templates/main/template/images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" media="screen" href="templates/main/template/css/style.css" />
    <script type="text/javascript" src="JS/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="JS/jquery.js"></script>
    <script type="text/javascript" src="JS/scripts.js"></script>
    
    
    <script type="text/javascript" src="JS/Controller/C_home.js"></script>
    <script type="text/javascript" src="JS/Controller/C_registrazione.js"></script>
    <script type="text/javascript" src="JS/View/V_registrazione.js"></script>
    <script type="text/javascript" src="JS/index.js"></script>
    
    
    
    <link rel="stylesheet" type="text/css" media="screen" href="JS/jquery-ui-1.11.4.custom/jquery-ui.min.css" /> 
    <script type="text/javascript" src="JS/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
</head>

<body>
    <div id="container" class="clearfix">

       <div id="headercont" class="clearfix">
            <div id="headerlogo">
             <img id="logo" src='templates/main/template/images/logo-sammartino.jpg'/>
            </div>
            <div id="headergallery">
                <div id="slideshow">
                   <img alt="" src="templates/main/template/images/immagine-top1.jpg" class="active" />
                   <img alt="" src="templates/main/template/images/immagine-top2.jpg" />
                   <img alt="" src="templates/main/template/images/immagine-top3.jpg" />
                </div>
            </div>
        </div>
    
    <div id="maincont" class="clearfix">
        <div id="menucont">
            <ul>
                <li><a id="home" title="Home" class="active">Home</a></li>
                <li><a id="registrazione" title="registrazione">Registrazione</a></li>
                <li><a id="login" title="login">login</a></li>
                <li><a id="newsletter" title="Newsletter">Newsletter</a></li>
                <li><a id="vetrina" title="Vetrina">Vetrina</a></li>
            </ul>

            <span id="menuright">
                <div id="formsearch">
                            <form method="get" action="">
                                <input id="barracerca" type="text" name="cercavetrina" placeholder="Cerca nella vetrina" />
                                <button id="buttonsearch" name="vai" type="submit">
                                    <img id="searchimg" src="templates/main/template/images/Search.png">
                                </button>
                            </form>
                </div>
                <div id="car">
                    <ul>
                        <li><a id="carrello" title="Carrello">Carrello<img id="cart" alt="Carrello" src="templates/main/template/images/cart/cart.png"/></a></li>
                    </ul>
                </div>
            </span>

        </div>
        <div id="mainleft">
            <h3>Caseificio Sammartino</h3>
            <p>Vivamus mi arcu, lacinia scelerisque blandit nec, mattis non nibh.</p>
            
            
            <div id="login">
                    <table>
                        <tr>
                            <td>email:</td><td><input type="email" id="EMAIL"/></td>
                        </tr>
                        <tr>
                            <td>password:</td><td><input type="password" id="password"/></td>
                        </tr>
                        <tr>
                            <td colspan="2"><button id="invialogin">login</button></td>
                        </tr>
                    </table>
            </div>
            
            
            <ul class="sidemenu">
                <li><a title="" href="">Side Link 1</a></li>
                <li><a title="" href="">Side Link 2</a></li>
                <li><a title="" href="">Side Link 3</a></li>
                <li><a title="" href="">Side Link 4</a></li>
                <li><a title="" href="">Side Link 5</a></li>
            </ul>
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