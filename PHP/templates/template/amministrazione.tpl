<div id="tab">
      <ul>
        <li><a href="#formInserimentoProdotto">Inserisci Prodotto</a></li>
        <li><a href="#formEliminaProdotto">Elimina Prodotto</a></li>
        <li><a href="#formAggiornaProdotto">Aggiorna Prodotto</a></li>
      </ul>
    <div id="formInserimentoProdotto">
        <table>
            <tr><td>Nome:  </td><td><input id="nome_I" name="nome" type="text"/></td></tr>
            <tr><td>foto:  </td><td><input id="foto" name="foto" type="file"/></td></tr>
            <tr><td>descrizione:  </td><td><input id="descrizione" name="descrizione" type="text"/></td></tr>
            <tr><td>categoria:  </td><td><input id="categoria" name="categoria" type="text"/></td></tr>
            <tr><td>prezzo_kg:  &nbsp</td><td><input id="prezzo" name="prezzo" type="text"/></td></tr>
            <tr><td>disponibilità:  </td><td><input id="disponibilita" name="disponibilita" type="text"/></td></tr>
            <tr><td colspan="2"><button id="inviaProdotto" class="invia" title="Inserisci prodotto">Inserisci prodotto</button></td></tr>
        </table>
    </div>
    
    <div id="formEliminaProdotto">
        <table>
            <tr><td>Nome:  </td><td><input id="nome_E" name="nome" type="text"/></td></tr>
            <tr><td colspan="2"><button id="EliminaProdotto" class="invia" title="Elimina prodotto">Elimina prodotto</button></td></tr>
        </table>
    </div>
    
    <div id="formAggiornaProdotto">
        <table>
            <tr><td>Nome:  </td><td><input id="nome_A" name="nome" type="text"/></td></tr>
            <tr><td>foto:  </td><td><input id="foto_A" name="foto" type="file"/></td></tr>
            <tr><td>descrizione:  </td><td><input id="descrizione_A" name="descrizione" type="text"/></td></tr>
            <tr><td>categoria:  </td><td><input id="categoria_A" name="categoria" type="text"/></td></tr>
            <tr><td>prezzo_kg:  &nbsp</td><td><input id="prezzo_A" name="prezzo" type="text"/></td></tr>
            <tr><td>disponibilità:  </td><td><input id="disponibilita_A" name="disponibilita" type="text"/></td></tr>
            <tr><td colspan="2"><button id="AggiornaProdotto" class="invia" title="Aggiorna prodotto">Aggiorna prodotto</button></td></tr>
        </table>
    </div>
</div>