CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `script`
--

DROP TABLE IF EXISTS `script`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `script` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `minplayer` int NOT NULL,
  `maxplayer` int NOT NULL,
  `story` mediumtext NOT NULL,
  `planets_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Script_planets_idx` (`planets_id`),
  CONSTRAINT `fk_Script_planets` FOREIGN KEY (`planets_id`) REFERENCES `planets` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `script`
--

LOCK TABLES `script` WRITE;
/*!40000 ALTER TABLE `script` DISABLE KEYS */;
INSERT INTO `script` VALUES (1,'Fuite de Mos Shuuta',2,4,'Dans la galaxie en proie au plus grand trouble, toutes les occasions sont bonnes à prendre. Confronté à une guerre civile, l\'Empire galactique s\'efforce de maintenir l\'ordre.\nPendant ce temps, des contrebandiers et des vauriens, des explorateurs et des expatriés, ainsi que des marginaux de tout poil se ruent aux confins de la civilisation galactique pour y gagner leur vie. Leur existence est difficile, mais ces renégats ont plus de libertés et de possibilités que les citoyens des Mondes du Noyau.\nSur la planète désertique de TATOOINE, une poignée de ces renégats s\'est mis à dos le baron du crime local, TEEMO LE HUTT. Pris au piège du minuscule spatioport de Mos Shuuta, ils n\'ont d\'autre choix que de voler un vaisseau pour échapper aux forces de\nTeemo.\nHeureusement, un appareil répondant à leurs exigences s\'est récemment posé sur l\'aire d\'atterrissage : Le CROC DE KRAYT, un cargo ayant pour capitaine un esclavagiste trandosien du nom de Trex. Fuyant dans les rues brûlantes, les renégats s\'engouffrent dans le bar local pour échapper à leurs poursuivants...',2),(2,'INSPIRATION',2,6,'Pour échapper aux griffes de Teemo le Hutt, les PJ ont volé si trex a survecu ou a ete laisse pour mort au spatioport un vaisseau et peuvent maintenant se rendre n\'importe où (après tout, les Trandosiens sont coriaces, c\'est bien connu, dans la galaxie ! Mais face a une telle diversite, comment il cherchera certainement a se venger des Ps! Des Ps qui hni-faire son choix ? Si aventure est partout, les Pu ont partois ront par se demander comment il parvient toujours a retrou-besoin d\'un petit coup de pouce pour aller la trouver. ver leur trace et devront conter le vaisseau a un specialiste Le Croc de Krayt est une source potentielle d\'aventures ! pour trouver le transpondeur qu\'il y a laisse et qui trahit sans Chaque objet et personnage que les PJ y découvriront peut cesse leur localisation.etre le debut a une nouvelle histoire. Peut-être les cellules Teemo le Hutt n\'en a peut-être pas fini avec eux, lui non renferment-elles un prisonnier dont la tête est mise à prix plus. Une canonniere pleine de chasseurs de primes pour-et dont un autre chasseur de primes est déjà en train de rait deja etre à leurs trousses.',2),(3,'Sauvetage des Ewoks',3,6,'Il était une fois sur la planète Endor, des petits êtres appelés Ewoks qui étaient en danger. Les Ewoks étaient menacés par les soldats de l\'Empire galactique qui voulaient les capturer pour les utiliser dans leur lutte contre la Rébellion.\nHeureusement, un groupe de héros se porta à leur secours. Il s\'agissait de Luke Skywalker, Han Solo et Princess Leia, qui se battirent bravement contre les soldats de l\'Empire pour sauver les Ewoks. Les Ewoks, reconnaissants, se joignirent aux héros pour les aider dans leur mission.\nEnsemble, ils menèrent une bataille épique pour vaincre l\'Empire et sauver la galaxie. Les Ewoks, avec leur ingéniosité et leur courage, jouèrent un rôle clé dans la victoire finale.\nÀ la fin, les Ewoks furent libérés et vécurent en paix sur Endor. Les héros furent remerciés pour leur courage et leur détermination, et les Ewoks et les héros devinrent amis pour toujours.\nLe sauvetage des Ewoks restera à jamais gravé dans l\'histoire de la galaxie, comme un symbole d\'espoir, de courage et de détermination face à l\'adversité.',4);
/*!40000 ALTER TABLE `script` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-03  8:45:00
