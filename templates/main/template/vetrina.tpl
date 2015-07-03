<br>
            <b>DISPONIBILITA'</b>
            <div id="carr">
                <table id="tab">
                    {section name=i loop=$prodotti}
                    <tr id="riga{$smarty.section.i.iteration}">
                    <form name="prodotto">
                        <td id="nome_prodotto">{$prodotti[i].NOME_PRODOTTO}</td>
                        <td id="descrizione">{$prodotti[i].descrizione }</td>
                        <td id="foto">{$prodotti[i].foto}</td>
                        <td id="categoria">{$prodotti[i].categoria}</td>
                        <td id="prezzo">{$prodotti[i].prezzo_kg}</td>
                        <td><input id="quantita" type="text" name="quantita" size="4" value="1"/></td>
                        <td id="disponibilita">{$prodotti[i].disponibilita}</td>
                        <td id="aggiungi"><input type="submit" id="bottone1" class="aggiungi" value="aggiungi"/>
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