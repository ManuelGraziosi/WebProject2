<?php /* Smarty version 2.6.26, created on 2015-06-30 17:44:39
         compiled from carrello.tpl */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title><?php echo $this->_tpl_vars['titolo']; ?>
</title>
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
                    <?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['prodotti']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['i']['show'] = true;
$this->_sections['i']['max'] = $this->_sections['i']['loop'];
$this->_sections['i']['step'] = 1;
$this->_sections['i']['start'] = $this->_sections['i']['step'] > 0 ? 0 : $this->_sections['i']['loop']-1;
if ($this->_sections['i']['show']) {
    $this->_sections['i']['total'] = $this->_sections['i']['loop'];
    if ($this->_sections['i']['total'] == 0)
        $this->_sections['i']['show'] = false;
} else
    $this->_sections['i']['total'] = 0;
if ($this->_sections['i']['show']):

            for ($this->_sections['i']['index'] = $this->_sections['i']['start'], $this->_sections['i']['iteration'] = 1;
                 $this->_sections['i']['iteration'] <= $this->_sections['i']['total'];
                 $this->_sections['i']['index'] += $this->_sections['i']['step'], $this->_sections['i']['iteration']++):
$this->_sections['i']['rownum'] = $this->_sections['i']['iteration'];
$this->_sections['i']['index_prev'] = $this->_sections['i']['index'] - $this->_sections['i']['step'];
$this->_sections['i']['index_next'] = $this->_sections['i']['index'] + $this->_sections['i']['step'];
$this->_sections['i']['first']      = ($this->_sections['i']['iteration'] == 1);
$this->_sections['i']['last']       = ($this->_sections['i']['iteration'] == $this->_sections['i']['total']);
?>
                    <tr>
                    <!--<form METHOD="post" ACTION="index.php?controllore=C_fareOrdine&metodo=inserisciProdotto">-->
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['descrizione']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['foto']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['categoria']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['prezzo_kg']; ?>
</td>
                        <td id="colonna"><input type="text" name="quantita" size="4"/></td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['disponibilita']; ?>
</td>
                        <td id="colonna">
                            <!--<input type="hidden" name="controllore" value="C_fareOrdine"/>
                            <input type="hidden" name="metodo" value="inserisciProdotto"/>
                            <input class="prodotto" type="hidden" name="nome_prodotto" value="<?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
"/>-->
                            <input id="<?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
" class="aggiungi" type="submit" name="submit" value="aggiungi">
                        </td>
                    <!--</form>-->
                        </tr>
                    <?php endfor; else: ?> 
                    <tr>
                         <td align="center">
                         <b> nessun risultato </b>
                        <td>
                    </tr>
                     <?php endif; ?>
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