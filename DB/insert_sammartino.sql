INSERT INTO `cliente`(`E-MAIL`, `nome`, `cognome`, `password`, `codice_attivazione`, `attivazione`, `citta`, `via`, `CAP`) VALUES 
();

INSERT INTO `commento`(`ID_COMMENTO`, `nome_prod_com`, `testo`, `voto`) VALUES 
();

INSERT INTO `ordine`(`ID_ORDINE`, `id_metodo_pagamento`, `email_cliente`, `data_pagamento`, `stato_pagamento`, `conferma_ordine`, `data_spedizione`) VALUES 
();

INSERT INTO `pagamento`(`ID_PAGAMENTO`, `nome_titolare`, `cognome_titolare`, `data_scadenza`, `ccv`) VALUES 
();

INSERT INTO `prodotto`(`NOME_PRODOTTO`, `descrizione`, `foto`, `categoria`, `prezzo_kg`, `disponibilita`) VALUES 
('Caciotta grande','da 1,8kg','Caciotta grande','Caciotta',7.2,45),
('Stagionato grande','da 15kg','Stagionato','Stagionato',13,45);

INSERT INTO `prod_ordinato`(`ID_PROD_ORDINATO`, `nome_prodotto`, `id_ordine`, `quantita`) VALUES 
();
