<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>{$titolo}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" type="text/css" media="screen" href="templates/main/template/css/style.css" />
    <script type="text/javascript" src="templates/main/template/js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="templates/main/template/js/jquery.js"></script>
    <script type="text/javascript" src="templates/main/template/js/scripts.js"></script>
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
                <li><a title="Home" href="">Home</a></li>
                <li><a title="About Us" href="">About Us</a></li>
                <li><a title="Blog" href="">Blog</a></li>
                <li><a title="Contact Us" href="">Contact Us</a></li>
                <li><a title="" href="" class="active">Carrello</a></li>
            </ul>
        </div>
        <div id="mainleft">
            <h3>Nullam blandit</h3>
            <p>Vivamus mi arcu, lacinia scelerisque blandit nec, mattis non nibh.</p>
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
            <br>
            <b>DISPONIBILITA'</b>
            <div id="carr">
                <table id="tab">
                    {section name=i loop=$prodotti}
                    <tr id="riga{$smarty.section.i.iteration}">
                    <form name="prodotto">
                        <td id="NOME_PRODOTTO1">{$prodotti[i].NOME_PRODOTTO}</td>
                        <td id="colonna">{$prodotti[i].descrizione }</td>
                        <td id="colonna">{$prodotti[i].foto}</td>
                        <td id="colonna">{$prodotti[i].categoria}</td>
                        <td id="colonna">{$prodotti[i].prezzo_kg}</td>
                        <td id="colonna"><input id="quantita" type="text" name="quantita" size="4" value="1"/></td>
                        <td id="colonna">{$prodotti[i].disponibilita}</td>
                        <td id="colonna"><input type="button" id="bottone" class="aggiungi" value="invia dati"/>
                            <input type="hidden" id="nome_prodotto1" name="nome_prodotto" value="{$prodotti[i].NOME_PRODOTTO}"/>
                            <!--<input type="hidden" name="metodo" value="inserisciProdotto"/>
                            <input class="prodotto" type="hidden" name="nome_prodotto" value="{$prodotti[i].NOME_PRODOTTO}"/>
                            <input id="{$prodotti[i].NOME_PRODOTTO}" class="aggiungi" type="submit" name="submit" value="aggiungi"/>-->
                        </td>
                    </form>
                        </tr>
                    {sectionelse} 
                    <tr>
                         <td align="center">
                         <b> nessun risultato </b>
                        <td>
                    </tr>
                     {/section}
                </table>    
            </div>


        </div>

    </div>

</div>

<div id="footercont">
  <p>
    Template by <a title="download website templates" href="http://www.downloadwebsitetemplates.co.uk" rel="external">Download Website Templates</a> - Design by <a title="Mario Valdeburgo Git Hub" href="https://github.com/MarioValdeburgo" rel="external">Mario Valdeburgo</a>
     - © Copyright 2015
  </p>
</div>

</body>
</html>