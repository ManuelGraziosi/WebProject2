<div id="amministra">
      <ul>
        <li><a href="#Prodotto">Prodotto</a></li>
        <li><a href="#Cliente">Cliente</a></li>
        <li><a href="#OrdiniConfermati">Ordini Confermati</a></li>
      </ul>
    <div id="Prodotto">
        
        
        <table>
            <tr>
                <td>
                    Nome:
                </td>
                <td>
                    <select id="nome_E" name="nome">
                        <option>           </option>
                        <!--
                        {section name=i loop=$prodotti}
                            <option>{$prodotti[i].NOME_PRODOTTO}</option>
                        {/section}
                        -->
                    </select>
                </td>
                <td colspan="2">
                    <button id="EliminaProdotto" class="invia" title="Elimina prodotto">Elimina prodotto</button>
                </td>
            </tr>
        </table>
        
        
        <table>
            <tr><td>Nome:  </td><td><input id="nome" name="nome" type="text"/></td></tr>
            <tr><td>foto:  </td><td><input id="foto" name="foto" type="text"/></td></tr>
            <tr>
                <td>descrizione:  </td>
                <td>
                    <textarea id="descrizione" name="descrizione"></textarea>
                </td>
            </tr>
            <tr><td>categoria:  </td><td><input id="categoria" name="categoria" type="text"/></td></tr>
            <tr><td>prezzo_kg:  &nbsp</td><td><input id="prezzo" name="prezzo" type="text"/></td></tr>
            <tr><td>disponibilità:  </td><td><input id="disponibilita" name="disponibilita" type="text"/></td></tr>
            <tr><td colspan="2"><button id="inviaProdotto" class="invia" title="Inserisci prodotto">Inserisci prodotto</button></td></tr>
        </table>
    
    <!--
        <table>
            <tr>
                <td>Nome:  </td>
                <td>
                    <select id="nome_E" name="nome">
                        <option></option>
                        {section name=i loop=$prodotti}
                            <option>{$prodotti[i].NOME_PRODOTTO}</option>
                        {/section}
                    </select>
                </td>
            </tr>
            <tr><td colspan="2"><button id="EliminaProdotto" class="invia" title="Elimina prodotto">Elimina prodotto</button></td></tr>
        </table>
        
        <table>
            <tr>
                <td>Nome:  </td>
                <td>
                    <select id="nome_A" name="nome">
                        {section name=i loop=$prodotti}
                            <option>{$prodotti[i].NOME_PRODOTTO}</option>
                        {/section}
                    </select>
                </td>
                <td>
                    <table>
                        <tr><td>Nome:  </td><td><input id="nome_A" name="nome" type="text" value="{$prodotto[0].NOME_PRODOTTO}"/></td></tr>
                        <tr><td>foto:  </td><td><input id="foto_A" name="foto" type="text" value="{$prodotto[0].foto}"/></td></tr>
                        <tr>
                            <td>descrizione:  </td>
                            <td>
                                <textarea id="descrizione_A" name="descrizione">{$prodotto[0].descrizione}</textarea>
                            </td>
                        </tr>
                        <tr><td>categoria:  </td><td><input id="categoria_A" name="categoria" type="text" value="{$prodotto[0].categoria}"/></td></tr>
                        <tr><td>prezzo_kg:  &nbsp</td><td><input id="prezzo_A" name="prezzo" type="text" value="{$prodotto[0].prezzo_kg}"/></td></tr>
                        <tr><td>disponibilità:  </td><td><input id="disponibilita_A" name="disponibilita" type="text" value="{$prodotto[0].disponibilita}"/></td></tr>
                        <tr><td colspan="2"><button id="AggiornaProdottoSelezionato" class="invia" title="Aggiorna prodotto">Aggiorna prodotto</button></td></tr>
                    </table>
                </td>
            </tr>
            
        </table>
    -->
    </div>
    <div id="Cliente">
    <!--
        <table>
            <tr>
                <td>Nome:  </td>
                <td><input id="nome" name="nome" type="text"/></td>
                <td colspan="2"><button id="EliminaCliente" class="invia" title="Elimina Cliente">Elimina Cliente</button></td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Email</th>
                <th>Via</th>
                <th>Citta</th>
                <th>CAP</th>
            </tr>
            {section name=i loop=$clienti}
            <tr>
                <td>{$clienti[i].nome}</td>
                <td>{$clienti[i].cognome}</td>
                <td>{$clienti[i].EMAIL}</td>
                <td>{$clienti[i].via}</td>
                <td>{$clienti[i].citta}</td>
                <td>{$clienti[i].CAP}</td>
            </tr>
            {sectionelse}
                <b> nessun cliente </b>
            {/section}
        </table>
    </div>
    -->
    <div id="OrdiniConfermati">
    <!--
        <table>
            <tr>
                <th>ID_ORDINE</th>
                <th>id_metodo_pagamento</th>
                <th>email_cliente</th>
                <th>data_pagamento</th>
                <th>stato_pagamento</th>
                <th>conferma_ordine</th>
                <th>data_spedizione</th>
            </tr>
            {section name=i loop=$ordini}
                <tr>
                    <td>{$ordini[i].ID_ORDINE}</td>
                    <td>{$ordini[i].id_metodo_pagamento}</td>
                    <td>{$ordini[i].email_cliente}</td>
                    <td>{$ordini[i].data_pagamento}</td>
                    <td>{$ordini[i].stato_pagamento}</td>
                    <td>{$ordini[i].conferma_ordine}</td>
                    <td>{$ordini[i].data_spedizione}</td>
                </tr>
            {/section}
        </table>
    -->
    </div>
</div>