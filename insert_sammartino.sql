INSERT INTO `Cliente`(`E-MAIL`, `nome`, `cognome`, `password`, `codice_attivazione`, `attivazione`, `citta`, `via`, `CAP`) VALUES 
();

INSERT INTO `Prodotto`(`NOME_PRODOTTO`,`descrizione`,`foto`,`categoria`,`prezzo_kg`,`disponibilità`) VALUES
('Caciotta','Prima prova del prilone','','Fregatura',1.5,0);

INSERT INTO `Commento`(`ID_COMMENTO`, `nome_prod_com`, `testo`, `voto`) VALUES 
();

INSERT INTO `Ordine`(`ID_ORDINE`, `id_metodo_pagamento`, `email_cliente`, `data_pagamento`, `stato_pagamento`, `conferma_ordine`, `data_spedizione`) VALUES 
();

INSERT INTO `Pagamento`(`ID_PAGAMENTO`, `nome_titolare`, `cognome_titolare`, `data_scadenza`, `ccv`) VALUES 
();

INSERT INTO `Prodotto`(`NOME_PRODOTTO`, `descrizione`, `foto`, `categoria`, `prezzo_kg`, `disponibilità`) VALUES 
('Caciotta grande','da 1,8kg','Caciotta grande','Caciotta',7.2,45),
('Stagionato grande','da 15kg','Stagionato','Stagionato',13,45);

INSERT INTO `Prod_ordinato`(`ID_PROD_ORDINATO`, `nome_prodotto`, `id_ordine`, `quantità`) VALUES 
();
