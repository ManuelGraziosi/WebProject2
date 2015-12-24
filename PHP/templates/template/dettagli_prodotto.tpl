<div class="dettagli_prodotto">
                <!-- SEZIONE IMMAGINE-VOTO-ACQUISTO -->
                <div class="d_miniature">
                    <div class="d_immagine">
                        <!--
                        <img id="d_foto" src="PHP/templates/template/images/prodotti/{$prodotto.foto}.jpg" />
                        --> 
                        <img id="d_foto" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQCKLerDdt-MYpFEtKAXUNv_oBs5OVYvB6znby58MX5yqqZWKV0dnNvA" />
                    </div>
                    <div class="d_voto">
                        <p>VOTO</p>
                    </div>
                    <div title="{$prodotto.NOME_PRODOTTO}" class="d_aggiungi">
                        <!--
                        <img src="PHP/templates/template/images/cart/addCart.png" width="45" height="45"/>
                        --> 
                        <img src="http://www.ricercaolistica.it/setup/carrello.png" width="45" height="45"/>
                    </div>
                </div>
                <!-- SEZIONE DESCRIZIONE -->
                <div class="d_dettaglio">
                    <p>DESCRIZIONE COMPLETA</p>
                    <div class="d_nome">
                        <!-- {$prodotto.NOME_PRODOTTO} -->
                        NOME_PRODOTTO
                    </div>
                    <div class="d_prezzo">
                        <!-- {$prodotto.prezzo_kg} -->
                        PREZZO KG
                    </div>
                    <div class="d_categoria">
                        <!-- {$prodotto.categoria} -->
                        CATEGORIA
                    </div>
                    <div class="d_descrizione">
                        <!-- {$prodotto.descrizione} -->
                        DESCRIZIONE
                    </div>
                </div>
                <!-- SEZIONE COMMENTO -->
                <div class="d_comment_area">
                        <!-- RIGA DA ATTIVARE QUANDO MESSO IN CONTESTO PHP
                        <form id="Form_commento" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                        -->
                        <form id="Form_commento" method="post">
                            Commento (Max: 255 caratteri):
                            <br>
                            <textarea id="text_commento" name="commento" placeholder="Inserisci il tuo commento..." maxlength="255"></textarea>
                            <br>
                            
                            
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