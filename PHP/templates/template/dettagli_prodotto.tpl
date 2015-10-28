
            <div class="dettagli_prodotto">
                <div class="foto-space">
                    <img id="foto" src="PHP/templates/template/images/prodotti/{$prodotto.foto}.jpg" />
                </div>
                <div class="info">
                    <div class="dettaglio">
                        <div class="nome">
                            {$prodotto.NOME_PRODOTTO}
                        </div>
                        <div class="prezzo">
                            {$prodotto.prezzo_kg}
                        </div>
                        <div class="categoria">
                            {$prodotto.categoria}
                        </div>
                        <div title="{$prodotto.NOME_PRODOTTO}" class="aggiungi">
                            <img src="PHP/templates/template/images/cart/addCart.png" width="45" height="45"/>
                        </div>
                    </div>
                </div>
            </div>