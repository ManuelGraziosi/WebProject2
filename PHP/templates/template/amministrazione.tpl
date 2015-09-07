<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="icon" href="PHP/templates/template/images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" media="screen" href="PHP/templates/template/css/index.css" />
    <script type="text/javascript" src="JS/Utility/Jquery/jquery-1.11.3.min.js"></script>
    <!--
    
    <script type="text/javascript" src="JS/Utility/U_operazioni.js"></script>
    <script type="text/javascript" src="JS/Utility/Jquery/scripts.js"></script>
    
    
    <script type="text/javascript" src="JS/Event/E_amministrazione.js"></script>
    <script type="text/javascript" src="JS/Event/E_home.js"></script>
    
    
    <script type="text/javascript" src="JS/Controller/C_home.js"></script>
    <script type="text/javascript" src="JS/Controller/C_registrazione.js"></script>
    <script type="text/javascript" src="JS/Controller/C_amministrazione.js"></script>
    <script type="text/javascript" src="JS/Controller/C_newsletter.js"></script>
    
    <script type="text/javascript" src="JS/View/V_registrazione.js"></script>
    <script type="text/javascript" src="JS/View/V_amministrazione.js"></script>
    <script type="text/javascript" src="JS/View/V_newsletter.js"></script>
    
    <script type="text/javascript" src="JS/index.js"></script>
    
    -->
    
    <link rel="stylesheet" type="text/css" media="screen" href="JS/Utility/Jquery/jquery-ui-1.11.4.custom/jquery-ui.min.css" /> 
    <script type="text/javascript" src="JS/Utility/Jquery/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
</head>

<body>
    <div id="amministra" class="ui-widget">
          <ul>
            <li><a href="#Prodotto">Prodotto</a></li>
            <li><a href="#Cliente">Cliente</a></li>
            <li><a href="#OrdiniConfermati">Ordini Confermati</a></li>
          </ul>
        <div id="Prodotto">
            <div id="tabellaForm">
                <div class="rigaTabella">
                    <span class="colonnaTabellaLabel">
                        <label>Nome:</label>
                    </span>
                    <span class="colonnaTabellaText">
                        <select id="prodottoSelezionato">
                            <option></option>
                        </select>
                    </span>
                    <span class="avvisoFunzionamento">
                        <label class="ui-state-disabled">selezionare un prodotto per aggiornare e eliminare, nulla per aggiungere</label>
                    </span>
                </div>
                <div class="rigaTabella">
                    <span class="colonnaTabellaLabel">
                        <label>Nome foto:</label>
                    </span>
                    <span class="colonnaTabellaText">
                        <input id="foto" type="text"/>
                    </span>
                </div>
                <div class="rigaTabella">
                    <span class="colonnaTabellaLabel">
                        <label>Descrizione:</label>
                    </span>
                    <span class="colonnaTabellaText">
                        <textarea id="descrizione" name="descrizione"></textarea>
                    </span>
                </div>
                <div class="rigaTabella">
                    <span class="colonnaTabellaLabel">
                        <label>Categoria:</label>
                    </span>
                    <span class="colonnaTabellaText">
                        <input id="categoria" type="text"/>
                    </span>
                </div>
                <div class="rigaTabella">
                    <span class="colonnaTabellaLabel">
                        <label>Prezzo:</label>
                    </span>
                    <span class="colonnaTabellaText">
                        <input id="prezzo_kg" type="text"/>
                    </span>
                </div>
                <div class="rigaTabella">
                    <span class="colonnaTabellaLabel">
                        <label>Disponibilità:</label>
                    </span>
                    <span class="colonnaTabellaText">
                        <input id="disponibilita" type="text"/>
                    </span>
                </div>
            </div>
            
            <div id="controlloProdotto">
                <span><button id="InserisciProdotto">Inserisci Prodotto</button></span>
                <span><button id="AggiornaProdotto">Aggiorna Prodotto</button></span>
                <span><button id="EliminaProdotto">Elimina Prodotto</button></span>
            </div>
        </div>
        
        <div id="Cliente">
        </div>
        
        <div id="OrdiniConfermati">
        </div>
    </div>
    <!--
    <div id="amministra">
          <ul>
            <li><a href="#Prodotto">Prodotto</a></li>
            <li><a href="#Cliente">Cliente</a></li>
            <li><a href="#OrdiniConfermati">Ordini Confermati</a></li>
          </ul>
        <div id="Prodotto">

            <div id="operazioni">
                <h7>Elimina Prodotto</h7>
                <div id="elimina_prodotto">
                    Nome del prodotto da eliminare:
                    <select id="nome_E" name="nome">
                        <option>           </option>
                    </select>
                    <button id="EliminaProdotto" class="invia buttonDestra" title="Elimina prodotto">Elimina prodotto</button>
                </div>
                <h7>Aggiorna Prodotto</h7>
                <div id="aggiorna_prodotto">
                    Nome del prodotto da aggiornare:
                    <select id="nome_A" name="nome">
                        <option>           </option>
                    </select>
                    <button id="AggiornaProdotto" class="invia buttonDestra" title="Aggiorna prodotto">Aggiorna prodotto</button>

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
                        <tr><td>prezzo_kg:  &nbsp</td><td><input id="prezzo_kg" name="prezzo" type="text"/></td></tr>
                        <tr><td>disponibilità:  </td><td><input id="disponibilita" name="disponibilita" type="text"/></td></tr>
                    </table>
                </div>
                <h7>Inserisci Prodotto</h7>
                <div id="inserisci_prodotto">
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
                        <tr><td>prezzo_kg:  &nbsp</td><td><input id="prezzo_kg" name="prezzo" type="text"/></td></tr>
                        <tr><td>disponibilità:  </td><td><input id="disponibilita" name="disponibilita" type="text"/></td></tr>
                    </table>
                    <button id="inviaProdotto" class="invia buttonDestra" title="Inserisci prodotto">Inserisci prodotto</button>

                </div>
            </div>

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
        --><!--
        </div>
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
        --><!--
        </div>
        <script type="text/javascript">
            $('#amministra').tabs();
            $( '#operazioni').accordion();
            $( '#operazioni').accordion("option", "active", 2);
            $('button').button();
        </script>
    </div>
           -->
</body>
</html>