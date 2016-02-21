<!--
        <div id="selezione">
            <div id="barra-selezione">
                Seleziona la categoria di prodotto: 
                <select name="categoria">
                    <option value="FR"> Fresco</option>
                    <option value="ST"> Stagionato </option>
                    <option value="YO"> Yogurt </option>
                </select>
                &nbsp &nbsp
                Seleziona il tipo di prodotto: 
                <select name="tipologia">
                    <option value="Pe"> Pecorino</option>
                    <option value="Ca"> Caciotta </option>
                </select>
                &nbsp &nbsp &nbsp &nbsp
                <button>Cerca</button>    DA MODIFICARE!
            </div>
        </div>
-->
        <div id="elencoProdotti">
        {section name=i loop=$prodotti}

            <div class="prodotto" id="{$smarty.section.i.iteration}">
                <div class="foto-space" title="{$prodotti[i].NOME_PRODOTTO}">
                    <img id="foto" src="PHP/templates/template/images/prodotti/{$prodotti[i].foto}_small.jpg" />
                </div>
                <div class="info">
                    <div class="dettaglio">
                        <div class="nome">
                            {$prodotti[i].NOME_PRODOTTO}
                        </div>
                        <div class="prezzo">
                            Prezzo:{$prodotti[i].prezzo_kg}
                        </div>
                        <div class="categoria">
                            Categoria:{$prodotti[i].categoria}
                        </div>
                        <!--<button class="foto" title="{$prodotti[i].NOME_PRODOTTO}">
                            <span class="ui-icon ui-icon-info"></span>
                        </button>-->
                        <button title="{$prodotti[i].NOME_PRODOTTO}" class="aggiungi">
                            <img src="PHP/templates/template/images/cart/addCart.png" width="45" height="45"/>
                        </button>
                    </div>
                </div>
            </div>
        {sectionelse} 
            <b> Nessun prodotto corrisponde hai criteri di ricerca </b>
        {/section}
        </div>
