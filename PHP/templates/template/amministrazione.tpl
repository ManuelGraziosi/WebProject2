<html>
    <head>
        <title>Sammartino | Amministrazione</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="icon" href="PHP/templates/template/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" media="screen" href="PHP/templates/template/css/amministrazione.css" />
        <script type="text/javascript" src="JS/Utility/Jquery/jquery-1.11.3.min.js"></script>
        <!----><!---->

        <script type="text/javascript" src="JS/Utility/U_operazioni.js"></script>

        <script type="text/javascript" src="JS/View/V_amministrazione.js"></script>
        <script type="text/javascript" src="JS/Controller/C_amministrazione.js"></script>
        <script type="text/javascript" src="JS/Event/E_amministrazione.js"></script>


        <script type="text/javascript" src="JS/index_admin.js"></script>

        <link rel="stylesheet" type="text/css" media="screen" href="JS/Utility/Jquery/jquery-ui-1.11.4.custom/jquery-ui.min.css" /> 
        <script type="text/javascript" src="JS/Utility/Jquery/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
    </head>
    <body>
        <div id="tabellaForm" hidden="true">
            <div class="rigaTabella">
                <span class="colonnaTabellaLabel">
                    <label>Nome:</label>
                </span>
                <span class="colonnaTabellaText">
                    <input id="nome" class="dati" type="text"/>
                </span>
            </div>
            <div class="rigaTabella">
                <span class="colonnaTabellaLabel">
                    <label>Nome foto:</label>
                </span>
                <span class="colonnaTabellaText">
                    <input id="foto" class="dati" type="text"/>
                </span>
            </div>
            <div class="rigaTabella">
                <span class="colonnaTabellaLabel">
                    <label>Descrizione:</label>
                </span>
                <span class="colonnaTabellaText">
                    <textarea id="descrizione" class="dati" name="descrizione"></textarea>
                </span>
            </div>
            <div class="rigaTabella">
                <span class="colonnaTabellaLabel">
                    <label>Categoria:</label>
                </span>
                <span class="colonnaTabellaText">
                    <input id="categoria" class="dati" type="text"/>
                </span>
            </div>
            <div class="rigaTabella">
                <span class="colonnaTabellaLabel">
                    <label>Prezzo:</label>
                </span>
                <span class="colonnaTabellaText">
                    <input id="prezzo" class="dati" type="text"/>
                </span>
            </div>
            <div class="rigaTabella">
                <span class="colonnaTabellaLabel">
                    <label>Disponibilità:</label>
                </span>
                <span class="colonnaTabellaText">
                    <input id="disponibilita" class="dati" type="text"/>
                </span>
            </div>
        </div>
        <div id="amministra" class="ui-widget">
              <ul>
                <li><a href="#Prodotto">Prodotto</a></li>
                <li><a href="#Cliente">Cliente</a></li>
                <li><a href="#OrdiniConfermati">Ordini Confermati</a></li>
                <li id="logout">logout</li>
              </ul>
            <div id="Prodotto" class="contenutoAmministrazione">
                <table class="admin">
                    <caption>Prodotti</caption>
                    <thead class="ui-widget-header">
                        <tr>
                            <th scope="col" style="width: 5%">N.</th>
                            <th scope="col" style="width: 35%">Nome</th>
                            <th scope="col" style="width: 35%">Foto</th>
                            <th scope="col" style="width: 18%">Categoria</th>
                            <th scope="col" style="width: 7%">Pr.</th>
                            <!--<th scope="col" style="width: 60%">Descrizione</th>-->
                            <th scope="col" style="width: 0%">Disp.</th>
                            <th scope="col" style="width: 0%"></th>
                            <th scope="col" style="width: 0%"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {section name=i loop=$prodotti}
                        <tr {if $smarty.section.i.iteration is odd}class="odd"{/if}>
                            <td> 
                                {$smarty.section.i.iteration}
                            </td>
                            <td id="{$prodotti[i].foto}_nome">{$prodotti[i].NOME_PRODOTTO}</td>
                            <td id="{$prodotti[i].foto}_foto">{$prodotti[i].foto}</td>
                            <td id="{$prodotti[i].foto}_categoria">{$prodotti[i].categoria}</td>
                            <td id="{$prodotti[i].foto}_prezzo">{$prodotti[i].prezzo_kg} €</td>
                            <td id="{$prodotti[i].foto}_descrizione" hidden="true">{$prodotti[i].descrizione}</td>
                            <td id="{$prodotti[i].foto}_disponibilita">{$prodotti[i].disponibilita}</td>
                            <td>
                                <button class="AggiornaProdotto ui-state-default ui-corner-all" title="{$prodotti[i].NOME_PRODOTTO}">
                                    <span class="ui-icon ui-icon-pencil"></span>
                                </button>
                            </td>
                            <td>
                                <button class="EliminaProdotto ui-state-default ui-corner-all" title="{$prodotti[i].NOME_PRODOTTO}">
                                    <span class="ui-icon ui-icon-trash"></span>
                                </button>
                            </td>
                        </tr>
                    {sectionelse}
                        <tr><td>nessun prodotto</td></tr>
                    {/section}
                        <tr>
                            <td>
                                <button id="InserisciProdotto" class="ui-state-default ui-corner-all" title="Inserisci nuovo prodotto">
                                    <span class="ui-icon ui-icon-plusthick"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id="Cliente" class="contenutoAmministrazione">
                <table class="admin">
                    <caption>Clienti</caption>
                    <thead class="ui-widget-header">
                        <tr>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Email</th>
                            <th>Via</th>
                            <th>Citta</th>
                            <th>CAP</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {section name=i loop=$clienti}
                        <tr {if $smarty.section.i.iteration is odd}class="odd"{/if}>
                            <td>{$clienti[i].nome}</td>
                            <td>{$clienti[i].cognome}</td>
                            <td>{$clienti[i].EMAIL}</td>
                            <td>{$clienti[i].via}</td>
                            <td>{$clienti[i].citta}</td>
                            <td>{$clienti[i].CAP}</td>
                            <td>
                                <button class="banda ui-state-default ui-corner-all" title="{$clienti[i].EMAIL}">
                                    <span class="ui-icon {if $clienti[i].attivazione=="attivo"}ui-icon-unlocked{else}ui-icon-locked{/if}"></span>
                                </button>
                            </td>
                        </tr>
                        {sectionelse}
                            <tr><td> nessun cliente </td></tr>
                        {/section}
                    </tbody>
                </table>
            </div>

            <div id="OrdiniConfermati" class="contenutoAmministrazione">
                <table class="admin">
                    <caption>Ordini effetuati</caption>
                    <thead class="ui-widget-header">
                        <tr>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Email</th>
                            <th>Via</th>
                            <th>Citta</th>
                            <th>CAP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {section name=i loop=$ordini}
                        <tr {if $smarty.section.i.iteration is odd}class="odd"{/if}>
                            <td>{$ordini[i].nome}</td>
                            <td>{$ordini[i].cognome}</td>
                            <td>{$ordini[i].EMAIL}</td>
                            <td>{$ordini[i].via}</td>
                            <td>{$ordini[i].citta}</td>
                            <td>{$ordini[i].CAP}</td>
                        </tr>
                        {sectionelse}
                            <tr><td colspan="6"> nessun ordine </td></tr>
                        {/section}
                    </tbody>
                </table>
            </div>
        </div>

        <script type="text/javascript">
            $('#amministra').tabs();
            $('button').button();
        </script>
    </body>
</html>