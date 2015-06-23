<?php /* Smarty version 2.6.26, created on 2015-06-15 11:13:10
         compiled from prova.tpl */ ?>
<html>
    <head>
        <title><?php echo $this->_tpl_vars['titolo']; ?>
</title>
        
    </head>
    <body>
        <table border>
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
                <form METHOD="post" ACTION="index.php">
                    <td><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
</td>
                    <td><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['descrizione']; ?>
</td>
                    <td><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['foto']; ?>
</td>
                    <td><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['categoria']; ?>
</td>
                    <td><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['prezzo_kg']; ?>
</td>
                    <td><input type="text" name="quantita" size="4"/></td>
                    <td><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['disponibilita']; ?>
</td>
                    <td>
                        <input type="hidden" name="controllore" value="C_fareOrdine"/>
                        <input type="hidden" name="metodo" value="inserisciProdotto"/>
                        <input type="hidden" name="nome_prodotto" value="<?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
"/>
                        <INPUT type="submit" name="submit" value="aggiungi">
                    </td>
                </form>
            </tr>
            <?php endfor; else: ?> 
                <tr>
                     <td align="center">
                         <b> nessun risultato </b>
                     <td>
                </tr>
            <?php endif; ?>
        </table>
    </body>
</html>