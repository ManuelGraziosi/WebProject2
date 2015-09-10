
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

        {section name=i loop=$prodotti}

            <div class="prodotto">
                <div class="foto-space">
                    <img id="foto" src="PHP/templates/template/images/prodotti/{$prodotti[i].foto}.jpg" />
                </div>
                <div class="info">
                    <div class="dettaglio">
                        <div class="nome">
                            {$prodotti[i].NOME_PRODOTTO}
                        </div>
                        <div class="prezzo">
                            {$prodotti[i].prezzo_kg}
                        </div>
                        <div class="categoria">
                            {$prodotti[i].categoria}
                        </div>
                        <div title="{$prodotti[i].NOME_PRODOTTO}" class="aggiungi">
                            <img src="PHP/templates/template/images/cart/addCart.png" width="45" height="45"/>
                        </div>
                    </div>
                </div>
            </div>
        {sectionelse} 
            <b> Nessun prodotto disponibile in vetrina </b>
        {/section}
                
             
