-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Creato il: Giu 11, 2015 alle 21:45
-- Versione del server: 5.6.24
-- Versione PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `Sammartino`
--
CREATE DATABASE IF NOT EXISTS `Sammartino` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Sammartino`;

-- --------------------------------------------------------

--
-- Struttura della tabella `Cliente`
--

DROP TABLE IF EXISTS `Cliente`;
CREATE TABLE IF NOT EXISTS `Cliente` (
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
-- Struttura della tabella `Commento`
--

DROP TABLE IF EXISTS `Commento`;
CREATE TABLE IF NOT EXISTS `Commento` (
  `ID_COMMENTO` int(11) NOT NULL,
  `nome_prod_com` varchar(30) DEFAULT NULL,
  `testo` varchar(1024) DEFAULT NULL,
  `voto` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `Newsletter`
--

DROP TABLE IF EXISTS `Newsletter`;
CREATE TABLE IF NOT EXISTS `Newsletter` (
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `Ordine`
--

DROP TABLE IF EXISTS `Ordine`;
CREATE TABLE IF NOT EXISTS `Ordine` (
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
-- Struttura della tabella `Pagamento`
--

DROP TABLE IF EXISTS `Pagamento`;
CREATE TABLE IF NOT EXISTS `Pagamento` (
  `ID_PAGAMENTO` int(11) NOT NULL,
  `nome_titolare` varchar(40) DEFAULT NULL,
  `cognome_titolare` varchar(40) DEFAULT NULL,
  `data_scadenza` date DEFAULT NULL,
  `ccv` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `Prodotto`
--

DROP TABLE IF EXISTS `Prodotto`;
CREATE TABLE IF NOT EXISTS `Prodotto` (
  `NOME_PRODOTTO` varchar(30) NOT NULL,
  `descrizione` blob NOT NULL,
  `foto` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `prezzo_kg` float NOT NULL,
  `disponibilita` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `Prod_ordinato`
--

DROP TABLE IF EXISTS `Prod_ordinato`;
CREATE TABLE IF NOT EXISTS `Prod_ordinato` (
  `ID_PROD_ORDINATO` int(11) NOT NULL,
  `nome_prodotto` varchar(30) DEFAULT NULL,
  `id_ordine` int(11) NOT NULL,
  `quantita` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`EMAIL`);

--
-- Indici per le tabelle `Commento`
--
ALTER TABLE `Commento`
  ADD PRIMARY KEY (`ID_COMMENTO`),
  ADD KEY `Commenti` (`nome_prod_com`) USING BTREE;

--
-- Indici per le tabelle `Ordine`
--
ALTER TABLE `Ordine`
  ADD PRIMARY KEY (`ID_ORDINE`),
  ADD KEY `Email_cliente` (`email_cliente`) USING BTREE,
  ADD KEY `id_pagamento` (`id_metodo_pagamento`) USING BTREE;

--
-- Indici per le tabelle `Pagamento`
--
ALTER TABLE `Pagamento`
  ADD PRIMARY KEY (`ID_PAGAMENTO`);

--
-- Indici per le tabelle `Prodotto`
--
ALTER TABLE `Prodotto`
  ADD PRIMARY KEY (`NOME_PRODOTTO`);

--
-- Indici per le tabelle `Prod_ordinato`
--
ALTER TABLE `Prod_ordinato`
  ADD PRIMARY KEY (`ID_PROD_ORDINATO`),
  ADD KEY `id_ordine` (`id_ordine`),
  ADD KEY `Prodotto_Ordine` (`nome_prodotto`,`id_ordine`) USING BTREE;

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `Commento`
--
ALTER TABLE `Commento`
  MODIFY `ID_COMMENTO` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `Ordine`
--
ALTER TABLE `Ordine`
  MODIFY `ID_ORDINE` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `Pagamento`
--
ALTER TABLE `Pagamento`
  MODIFY `ID_PAGAMENTO` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `Prod_ordinato`
--
ALTER TABLE `Prod_ordinato`
  MODIFY `ID_PROD_ORDINATO` int(11) NOT NULL AUTO_INCREMENT;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `Commento`
--
ALTER TABLE `Commento`
  ADD CONSTRAINT `Commento_ibfk_1` FOREIGN KEY (`nome_prod_com`) REFERENCES `Prodotto` (`NOME_PRODOTTO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `Ordine`
--
ALTER TABLE `Ordine`
  ADD CONSTRAINT `Ordine_ibfk_1` FOREIGN KEY (`email_cliente`) REFERENCES `Cliente` (`EMAIL`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Ordine_ibfk_2` FOREIGN KEY (`id_metodo_pagamento`) REFERENCES `Pagamento` (`ID_PAGAMENTO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `Prod_ordinato`
--
ALTER TABLE `Prod_ordinato`
  ADD CONSTRAINT `Prod_ordinato_ibfk_1` FOREIGN KEY (`id_ordine`) REFERENCES `Ordine` (`ID_ORDINE`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Prod_ordinato_ibfk_2` FOREIGN KEY (`nome_prodotto`) REFERENCES `Prodotto` (`NOME_PRODOTTO`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
