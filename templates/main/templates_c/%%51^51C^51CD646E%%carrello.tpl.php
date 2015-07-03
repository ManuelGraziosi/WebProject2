<?php /* Smarty version 2.6.26, created on 2015-07-03 10:19:19
         compiled from carrello.tpl */ ?>
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
                    <tr id="riga<?php echo $this->_sections['i']['iteration']; ?>
">
                    <form name="prodotto">
                        <td id="NOME_PRODOTTO1"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['descrizione']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['foto']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['categoria']; ?>
</td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['prezzo_kg']; ?>
</td>
                        <td id="colonna"><input id="quantita" type="text" name="quantita" size="4" value="1"/></td>
                        <td id="colonna"><?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['disponibilita']; ?>
</td>
                        <td id="colonna"><input type="button" id="bottone" class="aggiungi" value="invia dati"/>
                            <input type="hidden" id="nome_prodotto1" name="nome_prodotto" value="<?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
"/>
                            <!--<input type="hidden" name="metodo" value="inserisciProdotto"/>
                            <input class="prodotto" type="hidden" name="nome_prodotto" value="<?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
"/>
                            <input id="<?php echo $this->_tpl_vars['prodotti'][$this->_sections['i']['index']]['NOME_PRODOTTO']; ?>
" class="aggiungi" type="submit" name="submit" value="aggiungi"/>-->
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
            </div>