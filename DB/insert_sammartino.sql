/**
INSERT INTO `cliente`(`E-MAIL`, `nome`, `cognome`, `password`, `codice_attivazione`, `attivazione`, `citta`, `via`, `CAP`) VALUES 
();

INSERT INTO `commento`(`ID_COMMENTO`, `nome_prod_com`, `testo`, `voto`) VALUES 
();

INSERT INTO `ordine`(`ID_ORDINE`, `id_metodo_pagamento`, `email_cliente`, `data_pagamento`, `stato_pagamento`, `conferma_ordine`, `data_spedizione`) VALUES 
();

INSERT INTO `pagamento`(`ID_PAGAMENTO`, `nome_titolare`, `cognome_titolare`, `data_scadenza`, `ccv`) VALUES 
();
/**/
INSERT INTO `prodotto`(`NOME_PRODOTTO`, `descrizione`, `foto`, `categoria`, `prezzo_kg`, `disponibilita`) VALUES 
('Caciotta','da 1,8kg','Caciotta grande','Caciotta',7.2,45),
('Yogurt naturale','fatto con latte dell azienda sammartino','yogurt_naturale','fresco',2,14),
('Yogurt fragola','fatto con latte dell azienda sammartino','yogurt_fragola','fresco',2,14),
('Yogurt frutti di bosco','fatto con latte dell azienda sammartino','yogurt_frutti di bosco','fresco',2,14),
('Yogurt caffe','fatto con latte dell azienda sammartino','yogurt_caffe','fresco',2,14),
('Yogurt banana','fatto con latte dell azienda sammartino','yogurt_banana','fresco',2,14),
('Yogurt limone','fatto con latte dell azienda sammartino','yogurt_limone','fresco',2,14),
('Stagionato da 15kg','fatto con latte dell azienda sammartino','stagionato_15kg','stagionato',13,45),
('Stagionato da 8kg','fatto con latte dell azienda sammartino','stagionato_15kg','stagionato',13,45),
('Stagionato da 2kg','fatto con latte dell azienda sammartino','stagionato_15kg','stagionato',13,45),
('Semistagionato da 15kg','fatto con latte dell azienda sammartino','semistagionato_15kg','stagionato',13,45),
('Semistagionato da 8kg','fatto con latte dell azienda sammartino','semistagionato_15kg','stagionato',13,45),
('Semistagionato da 2kg','fatto con latte dell azienda sammartino','semistagionato_15kg','stagionato',13,45),
('Troncetto morbido','fatto con latte dell azienda sammartino', 'morbido', 'fresco', 8, 10),
('Troncetto primo sale','fatto con latte dell azienda sammartino', 'primo_sale', 'fresco', 8, 10),
('Mozzarella 1kg','fatto con latte dell azienda sammartino', 'mozzarella_1', 'pasta filata', 7.9, 10),
('Mozzarella 500g','fatto con latte dell azienda sammartino', 'mozzarella_500', 'pasta filata', 7.9, 10),
('Mozzarella 240g','fatto con latte dell azienda sammartino', 'mozzarella_240', 'pasta filata', 7.9, 10),
('Mozzarella 100g','fatto con latte dell azienda sammartino', 'mozzarella_100', 'pasta filata', 7.9, 10),
('Filone','fatto con latte dell azienda sammartino', 'filone', 'pasta filata', 7.9, 10),
('Caciotta al tartufo','fatto con latte dell azienda sammartino','tartufo', 'caciotta', 15, 10),
('Caciotta al peperoncino','fatto con latte dell azienda sammartino', 'peperoncino', 'caciotta', 9, 10),
('Caciotta alle noci','fatto con latte dell azienda sammartino', 'primo_sale', 'fresco', 8, 10);
/**
INSERT INTO `prod_ordinato`(`ID_PROD_ORDINATO`, `nome_prodotto`, `id_ordine`, `quantita`) VALUES 
();
/**/