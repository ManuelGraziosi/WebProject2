<div id="carrello">
    <div id="intestazione">
        <span class="foto">
            <p>foto</p>
        </span>
        <span class="nome">
            <p>Nome prodotto</p>
        </span>
        <span class="quantita">
            <p>Quantita</p>
        </span>
        <span class="prezzo">
            <p>Prezzo</p>
        </span>
        <span class="subtotale">
            <p>Subtotale</p>
        </span>
        <span class="cancella">
            <p></p>
        </span>
    </div>
    <!--va iterato-->
    {assign var="totale" value=0}
    {section name=i loop=$prodotti}
    <div class="elemento">
        <span class="foto">
            <img id="d_foto" src="PHP/templates/template/images/prodotti/{$prodotti[i].foto}.jpg" width="50px" height="50px"/>
        </span>
        <span class="nome">
            <p>{$prodotti[i].nome_prodotto}</p>
        </span>
        <span class="quantita">
            <input class="n_quantita" type="text" value="{$prodotti[i].quantita}"/>N.
        </span>
        <span class="prezzo">
            <p>{$prodotti[i].prezzo}€</p>
        </span>
        <span class="subtotale">
            <p>{$prodotti[i].subtotale}€</p>{assign var="totale" value=$prodotti[i].subtotale+$totale}
        </span>
        <span class="cancella">
            <button class="cancella_prodotto" title="{$prodotti[i].nome_prodotto}">X</button>
        </span>
    </div>
    {sectionelse}
    <div class="elemento">
        <b> Nessun prodotto nel carrello </b>
    </div>
    {/section}
    <div class="elemento">
        <b> TOTALE: {$totale}</b>
    </div>
    <div class="">
        <button id="aggiorna">aggiorna carrello</button>
    </div>
</div>
