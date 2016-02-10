-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Creato il: Feb 10, 2016 alle 18:34
-- Versione del server: 5.6.24
-- Versione PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sammartino`
--
CREATE DATABASE IF NOT EXISTS `sammartino` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sammartino`;

-- --------------------------------------------------------

--
-- Struttura della tabella `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `EMAIL` varchar(80) NOT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `cognome` varchar(40) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `attivazione` enum('non_attivo','attivo') DEFAULT 'attivo',
  `citta` varchar(20) DEFAULT NULL,
  `via` varchar(100) DEFAULT NULL,
  `CAP` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `cliente`
--

INSERT INTO `cliente` (`EMAIL`, `nome`, `cognome`, `password`, `attivazione`, `citta`, `via`, `CAP`) VALUES
('alessioscarpone@gmail.com', 'Alessio', 'Scarpone', 'matinf', 'attivo', 'Teramo', 'salita san martino', '64100'),
('corradoscarpone@gmail.com', 'corrado', 'scarpone', 'matinf', 'attivo', 'teramo', 'scapriano alto', '64100'),
('danielescarpone@gmail.com', 'Daniele', 'Scarpone', 'matinf', 'attivo', 'Teramo', 'salita san Martino', '64100'),
('pippobaudo@gmail.com', 'pippo', 'baudo', 'matinf', 'attivo', 'teramo', 'scapriano alto', '64100');

-- --------------------------------------------------------

--
-- Struttura della tabella `commento`
--

DROP TABLE IF EXISTS `commento`;
CREATE TABLE `commento` (
  `ID_COMMENTO` int(11) NOT NULL,
  `nome_prod_com` varchar(30) DEFAULT NULL,
  `data_commento` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '''9999-12-31 23:59:59',
  `user_commento` varchar(80) NOT NULL,
  `testo` varchar(256) DEFAULT NULL,
  `voto` float NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `commento`
--

INSERT INTO `commento` (`ID_COMMENTO`, `nome_prod_com`, `data_commento`, `user_commento`, `testo`, `voto`) VALUES
(4, 'Caciotta', '2016-02-05 14:04:42', 'danielescarpone@gmail.com', 'pippo daniele scarpone', 0),
(5, 'Caciotta', '2016-02-05 14:05:10', 'danielescarpone@gmail.com', 'daniele', 0),
(6, 'Caciotta', '2016-02-05 14:05:59', 'danielescarpone@gmail.com', 'scarpone', 0),
(7, 'Caciotta', '2016-02-05 14:16:33', 'danielescarpone@gmail.com', '123456789', 0),
(8, 'Yogurt limone', '2016-02-05 18:03:47', 'danielescarpone@gmail.com', 'commento per lo yogurt al limone', 0),
(9, 'Caciotta al peperoncino', '2016-02-00 16:44:14', 'danielescarpone@gmail.com', 'ciao io funziono', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE `newsletter` (
  `email` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `newsletter`
--

INSERT INTO `newsletter` (`email`) VALUES
('danielescarponegmail.com');

-- --------------------------------------------------------

--
-- Struttura della tabella `ordine`
--

DROP TABLE IF EXISTS `ordine`;
CREATE TABLE `ordine` (
  `ID_ORDINE` int(11) NOT NULL,
  `id_metodo_pagamento` int(11) DEFAULT NULL,
  `email_cliente` varchar(80) DEFAULT NULL,
  `data_pagamento` date DEFAULT NULL,
  `stato_pagamento` tinyint(1) NOT NULL,
  `conferma_ordine` tinyint(1) NOT NULL,
  `data_spedizione` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `pagamento`
--

DROP TABLE IF EXISTS `pagamento`;
CREATE TABLE `pagamento` (
  `ID_PAGAMENTO` int(11) NOT NULL,
  `nome_titolare` varchar(40) DEFAULT NULL,
  `cognome_titolare` varchar(40) DEFAULT NULL,
  `data_scadenza` date DEFAULT NULL,
  `ccv` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `prodotto`
--

DROP TABLE IF EXISTS `prodotto`;
CREATE TABLE `prodotto` (
  `NOME_PRODOTTO` varchar(30) NOT NULL,
  `foto` char(100) NOT NULL,
  `descrizione` varchar(1024) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `prezzo_kg` float NOT NULL,
  `disponibilita` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `prodotto`
--

INSERT INTO `prodotto` (`NOME_PRODOTTO`, `foto`, `descrizione`, `categoria`, `prezzo_kg`, `disponibilita`) VALUES
('Caciotta', 'Caciotta grande', 'fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino ', 'Caciotta', 7.2, 45),
('Caciotta al peperoncino', 'peperoncino', 'fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino ', 'caciotta', 9, 10),
('Caciotta al tartufo', 'tartufo', 'fatto con latte dell azienda sammartino', 'caciotta', 15, 10),
('Caciotta alle noci', 'noci', 'fatto con latte dell azienda sammartino', 'caciotta', 8, 10),
('Filone', 'filone', 'fatto con latte dell azienda sammartino', 'pasta filata', 7.9, 10),
('Mozzarella 100g', 'mozzarella_100g', 'fatto con latte dell azienda sammartino', 'pasta filata', 7.9, 10),
('Mozzarella 1kg', 'mozzarella_1kg', 'fatto con latte dell azienda sammartino', 'pasta filata', 7.9, 10),
('Mozzarella 240g', 'mozzarella_240g', 'fatto con latte dell azienda sammartino', 'pasta filata', 7.9, 10),
('Mozzarella 500g', 'mozzarella_500g', 'fatto con latte dell azienda sammartino', 'pasta filata', 7.9, 10),
('Praline normali', 'p_normali', 'fatto con latte dell azienda sammartino', 'caciotta', 5, 15),
('Praline peperoncino', 'p_peperoncino', 'fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azienda sammartino fatto con latte dell azi', 'caciotta', 7, 15),
('Praline tartufo', 'p_tartufo', 'fatto con latte dell azienda sammartino', 'caciotta', 8, 15),
('Ricotta da 2kg', 'ricotta_2kg', 'fatto con latte dell azienda sammartino', 'fresco', 3, 10),
('Ricotta da 350g', 'ricotta_350g', 'fatto con latte dell azienda sammartino', 'fresco', 3, 10),
('Ricotta da 500g', 'ricotta_500g', 'fatto con latte dell azienda sammartino', 'fresco', 3, 10),
('Semistagionato da 15kg', 'semistagionato_15kg', 'fatto con latte dell azienda sammartino', 'stagionato', 13, 45),
('Semistagionato da 2kg', 'semistagionato_2kg', 'fatto con latte dell azienda sammartino', 'stagionato', 13, 45),
('Semistagionato da 8kg', 'semistagionato_8kg', 'fatto con latte dell azienda sammartino', 'stagionato', 13, 45),
('Stagionato da 15kg', 'stagionato_15kg', 'fatto con latte dell azienda sammartino', 'stagionato', 13, 45),
('Stagionato da 2kg', 'stagionato_2kg', 'fatto con latte dell azienda sammartino', 'stagionato', 13, 45),
('Stagionato da 8kg', 'stagionato_8kg', 'fatto con latte dell azienda sammartino', 'stagionato', 13, 45),
('Troncetto morbido', 'morbido', 'fatto con latte dell azienda sammartino', 'fresco', 8, 10),
('Troncetto primo sale', 'primo_sale', 'fatto con latte dell azienda sammartino', 'fresco', 8, 10),
('Yogurt banana', 'yogurt_banana', 'fatto con latte dell azienda sammartino', 'fresco', 2, 14),
('Yogurt caffe', 'yogurt_caffe', 'fatto con latte dell azienda sammartino', 'fresco', 2, 14),
('Yogurt fragola', 'yogurt_fragola', 'fatto con latte dell azienda sammartino', 'fresco', 2, 14),
('Yogurt frutti di bosco', 'yogurt_frutti di bosco', 'fatto con latte dell azienda sammartino', 'fresco', 2, 14),
('Yogurt limone', 'yogurt_limone', 'fatto con latte dell azienda sammartino', 'fresco', 2, 14),
('Yogurt naturale', 'yogurt_naturale', 'fatto con latte dell azienda sammartino', 'fresco', 2, 14);

-- --------------------------------------------------------

--
-- Struttura della tabella `prod_ordinato`
--

DROP TABLE IF EXISTS `prod_ordinato`;
CREATE TABLE `prod_ordinato` (
  `ID_PROD_ORDINATO` int(11) NOT NULL,
  `nome_prodotto` varchar(30) DEFAULT NULL,
  `id_ordine` int(11) NOT NULL,
  `quantita` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`EMAIL`);

--
-- Indici per le tabelle `commento`
--
ALTER TABLE `commento`
  ADD PRIMARY KEY (`ID_COMMENTO`),
  ADD KEY `Commenti` (`nome_prod_com`) USING BTREE,
  ADD KEY `user_commento` (`user_commento`) USING BTREE;

--
-- Indici per le tabelle `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`email`);

--
-- Indici per le tabelle `ordine`
--
ALTER TABLE `ordine`
  ADD PRIMARY KEY (`ID_ORDINE`),
  ADD KEY `Email_cliente` (`email_cliente`) USING BTREE,
  ADD KEY `id_pagamento` (`id_metodo_pagamento`) USING BTREE;

--
-- Indici per le tabelle `pagamento`
--
ALTER TABLE `pagamento`
  ADD PRIMARY KEY (`ID_PAGAMENTO`);

--
-- Indici per le tabelle `prodotto`
--
ALTER TABLE `prodotto`
  ADD PRIMARY KEY (`NOME_PRODOTTO`);

--
-- Indici per le tabelle `prod_ordinato`
--
ALTER TABLE `prod_ordinato`
  ADD PRIMARY KEY (`ID_PROD_ORDINATO`),
  ADD KEY `id_ordine` (`id_ordine`),
  ADD KEY `prodotto_ordine` (`nome_prodotto`,`id_ordine`) USING BTREE;

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `commento`
--
ALTER TABLE `commento`
  MODIFY `ID_COMMENTO` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT per la tabella `ordine`
--
ALTER TABLE `ordine`
  MODIFY `ID_ORDINE` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `pagamento`
--
ALTER TABLE `pagamento`
  MODIFY `ID_PAGAMENTO` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `prod_ordinato`
--
ALTER TABLE `prod_ordinato`
  MODIFY `ID_PROD_ORDINATO` int(11) NOT NULL AUTO_INCREMENT;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `commento`
--
ALTER TABLE `commento`
  ADD CONSTRAINT `commento_ibfk_1` FOREIGN KEY (`nome_prod_com`) REFERENCES `prodotto` (`NOME_PRODOTTO`),
  ADD CONSTRAINT `commento_ibfk_2` FOREIGN KEY (`user_commento`) REFERENCES `cliente` (`EMAIL`);

--
-- Limiti per la tabella `ordine`
--
ALTER TABLE `ordine`
  ADD CONSTRAINT `ordine_ibfk_1` FOREIGN KEY (`id_metodo_pagamento`) REFERENCES `pagamento` (`ID_PAGAMENTO`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `ordine_ibfk_2` FOREIGN KEY (`email_cliente`) REFERENCES `cliente` (`EMAIL`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Limiti per la tabella `prod_ordinato`
--
ALTER TABLE `prod_ordinato`
  ADD CONSTRAINT `prod_ordinato_ibfk_1` FOREIGN KEY (`nome_prodotto`) REFERENCES `prodotto` (`NOME_PRODOTTO`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `prod_ordinato_ibfk_2` FOREIGN KEY (`id_ordine`) REFERENCES `ordine` (`ID_ORDINE`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;