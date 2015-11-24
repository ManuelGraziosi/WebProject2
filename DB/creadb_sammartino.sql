-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Creato il: Ago 09, 2015 alle 20:09
-- Versione del server: 5.6.24
-- Versione PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

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
CREATE TABLE IF NOT EXISTS `cliente` (
  `EMAIL` varchar(80) NOT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `cognome` varchar(40) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `codice_attivazione` varchar(20) DEFAULT NULL,
  `attivazione` enum('non_attivo','attivo') DEFAULT NULL,
  `citta` varchar(20) DEFAULT NULL,
  `via` varchar(100) DEFAULT NULL,
  `CAP` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `commento`
--

DROP TABLE IF EXISTS `commento`;
CREATE TABLE IF NOT EXISTS `commento` (
  `ID_COMMENTO` int(11) NOT NULL,
  `nome_prod_com` varchar(30) DEFAULT NULL,
  `data_commento` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '''9999-12-31 23:59:59',
  `user_commento` varchar(80) NOT NULL,
  `testo` varchar(1024) DEFAULT NULL,
  `voto` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE IF NOT EXISTS `newsletter` (
  `email` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `ordine`
--

DROP TABLE IF EXISTS `ordine`;
CREATE TABLE IF NOT EXISTS `ordine` (
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
CREATE TABLE IF NOT EXISTS `pagamento` (
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
CREATE TABLE IF NOT EXISTS `prodotto` (
  `NOME_PRODOTTO` varchar(30) NOT NULL,
  `foto` blob NOT NULL,
  `descrizione` varchar(1024) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `prezzo_kg` float NOT NULL,
  `disponibilita` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `prod_ordinato`
--

DROP TABLE IF EXISTS `prod_ordinato`;
CREATE TABLE IF NOT EXISTS `prod_ordinato` (
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
  ADD CONSTRAINT `commento_ibfk_1` FOREIGN KEY (`nome_prod_com`) REFERENCES `prodotto` (`NOME_PRODOTTO`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commento_ibfk_2` FOREIGN KEY (`user_commento`) REFERENCES `cliente` (`EMAIL`) ON DELETE CASCADE ON UPDATE CASCADE;

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