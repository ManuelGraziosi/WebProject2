<html>
    <head>
        <title>{$titolo}</title>
        <script type="text/javascript" src="templates/main/template/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="templates/main/template/jquery.js"></script>
    </head>
    <body>
        <table border>
            {section name=i loop=$prodotti}
                <tr>
                    <!--<form METHOD="post" ACTION="index.php?controllore=C_fareOrdine&metodo=inserisciProdotto">-->
                        <td>{$prodotti[i].NOME_PRODOTTO}</td>
                        <td>{$prodotti[i].descrizione }</td>
                        <td>{$prodotti[i].foto}</td>
                        <td>{$prodotti[i].categoria}</td>
                        <td>{$prodotti[i].prezzo_kg}</td>
                        <td><input type="text" name="quantita" size="4"/></td>
                        <td>{$prodotti[i].disponibilita}</td>
                        <td>
                            <!--<input type="hidden" name="controllore" value="C_fareOrdine"/>
                            <input type="hidden" name="metodo" value="inserisciProdotto"/>
                            <input class="prodotto" type="hidden" name="nome_prodotto" value="{$prodotti[i].NOME_PRODOTTO}"/>-->
                            <input id="{$prodotti[i].NOME_PRODOTTO}" class="aggiungi" type="submit" name="submit" value="aggiungi">
                        </td>
                    <!--</form>-->
                </tr>
            {sectionelse} 
                <tr>
                     <td align="center">
                         <b> nessun risultato </b>
                     <td>
                </tr>
            {/section}
        </table>
    </body>
</html>