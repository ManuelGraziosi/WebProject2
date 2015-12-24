<div class="dettagli_prodotto">
                <!-- SEZIONE IMMAGINE-VOTO-ACQUISTO -->
                <div class="d_miniature">
                    <div class="d_immagine">
                        <img id="d_foto" src="PHP/templates/template/images/prodotti/{$prodotto.foto}.jpg" />
                    </div>
                    <div class="d_voto">
                        <p>VOTO</p>
                    </div>
                    <div title="{$prodotto.NOME_PRODOTTO}" class="d_aggiungi">
                        <img src="PHP/templates/template/images/cart/addCart.png" width="45" height="45"/>
                    </div>
                </div>
                <!-- SEZIONE DESCRIZIONE -->
                <div class="d_dettaglio">
                    <p>DESCRIZIONE COMPLETA</p>
                    <div class="d_nome">
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
                        DESCRIZIONE:<br> 
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                        DESCRIZIONE:<br>
                    </div>
                </div>
                <!-- SEZIONE COMMENTO -->
                <div class="d_comment_area">
                        <form id="Form_commento" method="post">
                            Commento (Max: 255 caratteri):
                            
                            <textarea id="text_commento" name="commento" placeholder="Inserisci il tuo commento..." maxlength="255"></textarea>
                            
                            <input type="submit" name="submit" value="Invia">
                        </form>
                </div>
                <div class="d_comment_list">
                    <div class="d_data_commento">
                        DATA
                    </div>
                    <div class="d_nome_commento">
                        NOME
                    </div>
                    <div class="d_voto_commento">
                        VOTO
                    </div>
                    <div class="d_commento">
                        COMMENTO
                    </div>
                    <div class="d_data_commento">
                        DATA
                    </div>
                    <div class="d_nome_commento">
                        NOME
                    </div>
                    <div class="d_voto_commento">
                        VOTO
                    </div>
                    <div class="d_commento">
                        COMMENTO
                    </div>
                    <div class="d_data_commento">
                        DATA
                    </div>
                    <div class="d_nome_commento">
                        NOME
                    </div>
                    <div class="d_voto_commento">
                        VOTO
                    </div>
                    <div class="d_commento">
                        COMMENTO
                    </div>
                    <div class="d_data_commento">
                        DATA
                    </div>
                    <div class="d_nome_commento">
                        NOME
                    </div>
                    <div class="d_voto_commento">
                        VOTO
                    </div>
                    <div class="d_commento">
                        COMMENTO
                    </div>
                    <div class="d_mostra_tutti">VISUALIZZA ALTRI COMMENTI</div>
                </div>
            </div>