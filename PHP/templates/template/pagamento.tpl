<div id="formPagamento">
    <table>
        <tr>
            <td>Email:  </td>
            <td><input id="EMAIL_pagamento" name="EMAIL" type="text" placeholder="es:for@example.it"/></td>
        </tr>
        <tr>
            <td>Data pagamento:  </td>
            <td><input id="Data_pagamento" name="DataPagamento" type="text"/></td>
        </tr>
        <tr>
            <td>Metodo di pagamento</td>
            <td class="metodo-pagamento">Carta di credito<input class="select-metodo-pagamnto" type="radio" name="metodopag" value="CC" /></td>
            <td class="metodo-pagamento">Postamat<input class="select-metodo-pagamento" type="radio" name="metodopag" value="PM" /></td>
        </tr>
        <tr>
            <td>Indirizzo di consegna:  </td>
            <td>Città<input id="Citta_consegna" name="CittaConsegna" type="text" placeholder="Città"/></td>
            <td>Via<input id="Via_consegna" name="ViaConsegna" type="text" placeholder="Via"/></td>
            <td>N.<input id="N_consegna" name="NConsegna" type="text" placeholder="Numero civico"/></td>
            <td>CAP<input id="Cap_consegna" name="CapConsegna" type="text" placeholder="CAP"/></td>
        </tr>
        <tr>
            <td colspan="2">
                <button id="invia" class="invia" title="Invia">
                    INVIA
                </button>
            </td>
        </tr>
    </table>
</div>