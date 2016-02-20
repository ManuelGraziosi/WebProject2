<div class="dettagli_prodotto">
    
                <!-- SEZIONE IMMAGINE-VOTO-ACQUISTO -->
                <div class="d_miniature">
                    <div class="d_immagine">
                        <img id="d_foto" src="PHP/templates/template/images/prodotti/{$prodotto.foto}.jpg" />
                    </div>
                    <div class="d_voto">
                        <p>VOTO</p>
                    </div>
                    <span title="{$prodotto.NOME_PRODOTTO}" id="d_aggiungi">
                        <button>
                            <img src="PHP/templates/template/images/cart/addCart.png" width="45" height="45"/>
                        </button>
                    </span>
                </div>
                <!-- SEZIONE DESCRIZIONE -->
                <div class="d_dettaglio">
                    <p>DESCRIZIONE COMPLETA</p>
                    <div class="d_nome" id="nome_prod">
                        NOME_PRODOTTO: {$prodotto.NOME_PRODOTTO}
                    </div>
                    <div class="d_prezzo">
                        PREZZO KG: {$prodotto.prezzo_kg}
                    </div>
                    <div class="d_categoria">
                        CATEGORIA: {$prodotto.categoria}
                    </div>
                    <div class="d_descrizione">
                        DESCRIZIONE: 
                        {$prodotto.descrizione}
                    </div>
                </div>
                <!-- SEZIONE COMMENTO -->
                <div class="d_comment_area">
                    <p id="utente">Ospite</p>
                        <form id="Form_commento" method="post">
                            <textarea id="text_commento" name="commento" placeholder="Inserisci il tuo commento..." maxlength="255"></textarea>
                            <br>
                            <p id="charsLeft">Rimanenti: 255 di 255</p>
                            <input type="button" id="commenta" name="submit" value="Invia">
                        </form>
                </div>
                <div id="accordion">
                    {section name=i loop=$commenti}

                         <h3>
                            DATA: {$commenti[i].data_commento}
                            UTENTE: {$commenti[i].nome}
                            VOTO: {$commenti[i].voto}
                            
                        </h3>
                        <div class="d_commento">
                            <p>{$commenti[i].testo}</p>
                        </div>

        {sectionelse} 
            <b> Nessun commento disponibile </b>
        {/section}
 
                        <div class="d_mostra_tutti">VISUALIZZA ALTRI COMMENTI</div>
                </div>
            </div>