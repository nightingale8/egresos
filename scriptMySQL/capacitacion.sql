-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.21-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para capacitacion
CREATE DATABASE IF NOT EXISTS `capacitacion` /*!40100 DEFAULT CHARACTER SET armscii8 COLLATE armscii8_bin */;
USE `capacitacion`;

-- Volcando estructura para tabla capacitacion.cxp
CREATE TABLE IF NOT EXISTS `cxp` (
  `folio_cxp` bigint(20) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT curdate(),
  `id_prov` bigint(20) NOT NULL,
  `descripcion` varchar(200) COLLATE armscii8_bin DEFAULT NULL,
  `subtotal` decimal(10,2) NOT NULL DEFAULT 0.00,
  `iva` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total` decimal(10,2) NOT NULL DEFAULT 0.00,
  `desc` decimal(10,2) NOT NULL DEFAULT 0.00,
  `gtotal` decimal(10,2) NOT NULL DEFAULT 0.00,
  `saldo` decimal(10,2) NOT NULL DEFAULT 0.00,
  `tipo` tinyint(4) NOT NULL,
  `usuario` bigint(20) DEFAULT NULL,
  `tokenid` varchar(50) COLLATE armscii8_bin DEFAULT NULL,
  `estado_cxp` tinyint(1) NOT NULL DEFAULT 1,
  `foliotmp` bigint(20) NOT NULL,
  PRIMARY KEY (`folio_cxp`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla capacitacion.cxp: ~0 rows (aproximadamente)

-- Volcando estructura para tabla capacitacion.cxptmp
CREATE TABLE IF NOT EXISTS `cxptmp` (
  `foliotmp` bigint(20) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `id_prov` bigint(20) NOT NULL,
  `nom_prov` varchar(100) COLLATE armscii8_bin NOT NULL,
  `descripcion` varchar(200) COLLATE armscii8_bin NOT NULL,
  `subtotal` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total` decimal(10,2) NOT NULL DEFAULT 0.00,
  `desc` decimal(10,2) NOT NULL DEFAULT 0.00,
  `gtotal` decimal(10,2) NOT NULL DEFAULT 0.00,
  `estado_cxp` tinyint(1) NOT NULL DEFAULT 1,
  `activo` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`foliotmp`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla capacitacion.cxptmp: ~1 rows (aproximadamente)

-- Volcando estructura para tabla capacitacion.cxp_detalle
CREATE TABLE IF NOT EXISTS `cxp_detalle` (
  `id_reg` bigint(20) NOT NULL AUTO_INCREMENT,
  `foliotmp` bigint(20) NOT NULL,
  `id_item` bigint(20) NOT NULL,
  `descripcion` varchar(100) COLLATE armscii8_bin NOT NULL,
  `tipo` varchar(20) COLLATE armscii8_bin NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` double(10,2) NOT NULL DEFAULT 0.00,
  `importe` double(10,2) NOT NULL DEFAULT 0.00,
  `descuento` double(10,2) NOT NULL DEFAULT 0.00,
  `gimporte` double(10,2) NOT NULL DEFAULT 0.00,
  `estado_reg` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_reg`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla capacitacion.cxp_detalle: ~4 rows (aproximadamente)
INSERT INTO `cxp_detalle` (`id_reg`, `foliotmp`, `id_item`, `descripcion`, `tipo`, `cantidad`, `precio`, `importe`, `descuento`, `gimporte`, `estado_reg`) VALUES
	(1, 1, 1, '', '', 1, 2150.00, 2150.00, 0.15, 1827.50, 1),
	(2, 8, 0, '', '', 0, 0.00, 0.00, 0.00, 0.00, 1),
	(8, 1, 0, '', '', 4, 0.00, 100.00, 10.00, 0.00, 1),
	(9, 1, 0, '', '', 2, 0.00, 400.00, 3.00, 0.00, 1),
	(10, 1, 0, '', '', 2, 0.00, 50.00, 0.00, 0.00, 1),
	(11, 1, 0, '', '', 2, 0.00, 400.00, 10.00, 0.00, 1);

-- Volcando estructura para tabla capacitacion.detalletmp
CREATE TABLE IF NOT EXISTS `detalletmp` (
  `id_reg` bigint(20) NOT NULL AUTO_INCREMENT,
  `foliotmp` bigint(20) NOT NULL,
  `id_item` bigint(20) NOT NULL,
  `descripcion` varchar(100) COLLATE armscii8_bin NOT NULL,
  `tipo` varchar(20) COLLATE armscii8_bin NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` double(10,2) NOT NULL DEFAULT 0.00,
  `importe` double(10,2) NOT NULL DEFAULT 0.00,
  `descuento` double(10,2) NOT NULL DEFAULT 0.00,
  `gimporte` double(10,2) NOT NULL DEFAULT 0.00,
  `estado_reg` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_reg`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla capacitacion.detalletmp: ~4 rows (aproximadamente)
INSERT INTO `detalletmp` (`id_reg`, `foliotmp`, `id_item`, `descripcion`, `tipo`, `cantidad`, `precio`, `importe`, `descuento`, `gimporte`, `estado_reg`) VALUES
	(1, 1, 1, '', '', 1, 2150.00, 2150.00, 0.15, 1827.50, 1),
	(2, 8, 0, '', '', 0, 0.00, 0.00, 0.00, 0.00, 1),
	(8, 1, 0, '', '', 4, 0.00, 100.00, 10.00, 0.00, 1),
	(9, 1, 0, '', '', 2, 0.00, 400.00, 3.00, 0.00, 1),
	(10, 1, 0, '', '', 2, 0.00, 50.00, 0.00, 0.00, 1),
	(11, 1, 0, '', '', 2, 0.00, 400.00, 10.00, 0.00, 1);

-- Volcando estructura para tabla capacitacion.items
CREATE TABLE IF NOT EXISTS `items` (
  `id_item` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) COLLATE armscii8_bin NOT NULL,
  `tipo` varchar(20) COLLATE armscii8_bin NOT NULL,
  `precio` decimal(10,2) DEFAULT 0.00,
  `costo` decimal(10,2) NOT NULL DEFAULT 0.00,
  `existencia` int(11) NOT NULL,
  `estado_item` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_item`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla capacitacion.items: ~8 rows (aproximadamente)
INSERT INTO `items` (`id_item`, `descripcion`, `tipo`, `precio`, `costo`, `existencia`, `estado_item`) VALUES
	(1, 'Disco duro solido', 'Articulo', 2150.00, 2000.00, 6, 1),
	(2, 'Redes y telecomunicaciones', 'Servicio', 2150.00, 1099.00, 1, 1),
	(3, 'Mouse inhalambrico', 'Articulo', 200.00, 150.00, 2, 1),
	(4, 'Monitor', 'Articulo', 2150.00, 1099.00, 2, 1),
	(5, 'Auditoria informatica', 'servicio', 2000.00, 1500.00, 1, 1),
	(6, 'Sistemas informaticos', 'Servicio', 6000.00, 5000.00, 1, 1),
	(7, 'Mantenimiento de computo', 'Servicio', 2000.00, 1500.00, 1, 1),
	(8, 'PRUEBAITEM', 'Articulo', 25.00, 10.00, 6, 1);

-- Volcando estructura para tabla capacitacion.orden
CREATE TABLE IF NOT EXISTS `orden` (
  `tokenid` bigint(20) NOT NULL AUTO_INCREMENT,
  `folio_cxp` bigint(20) NOT NULL,
  `fecha` date NOT NULL,
  `total` double(10,2) NOT NULL DEFAULT 0.00,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`tokenid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla capacitacion.orden: ~1 rows (aproximadamente)
INSERT INTO `orden` (`tokenid`, `folio_cxp`, `fecha`, `total`, `activo`) VALUES
	(1, 1, '2023-10-04', 2494.00, 0);

-- Volcando estructura para tabla capacitacion.proveedor
CREATE TABLE IF NOT EXISTS `proveedor` (
  `id_prov` bigint(20) NOT NULL AUTO_INCREMENT,
  `rfc` varchar(20) COLLATE armscii8_bin NOT NULL,
  `nombre` varchar(150) COLLATE armscii8_bin NOT NULL,
  `direccion` varchar(250) COLLATE armscii8_bin NOT NULL,
  `telefono` varchar(20) COLLATE armscii8_bin NOT NULL,
  `movil` varchar(20) COLLATE armscii8_bin NOT NULL,
  `email` varchar(50) COLLATE armscii8_bin NOT NULL,
  `estado_prov` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_prov`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla capacitacion.proveedor: ~4 rows (aproximadamente)
INSERT INTO `proveedor` (`id_prov`, `rfc`, `nombre`, `direccion`, `telefono`, `movil`, `email`, `estado_prov`) VALUES
	(1, 'COMS0007025V5', 'Sauri Lizette Colorado Mendez', '2da Tlanalapa 29 Coatepec 91500 Ver, Mex', '0000000000', '2283539194', 'csauri007@gmail.com', 1),
	(2, 'RFCPRUEBA', 'Flor Edith Colorado Mendez', 'Hdz y Hdz Coatepec 91500 Ver, Mex', '2288567777', '2285649778', 'correo1@hotmail.com', 1),
	(3, 'RFCDEPRUEB12', 'PROVEEDOR PRUEBA 22OCT23', 'HDZ Y HDZ 23', '2288567777', '2283539194', 'correo@gmail.com', 1),
	(4, 'RFCPRUEBA4', 'Carmen Vasquez Mendez', '2da de tlanalapa 29 int 5', '0000000000', '2281803412', 'carmen18@gmail.com', 1);

-- Volcando estructura para tabla capacitacion.rol
CREATE TABLE IF NOT EXISTS `rol` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `rol` varchar(20) COLLATE armscii8_bin NOT NULL,
  `edo_rol` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla capacitacion.rol: ~3 rows (aproximadamente)
INSERT INTO `rol` (`id`, `rol`, `edo_rol`) VALUES
	(1, 'Prueba', 1),
	(2, 'Personal', 1),
	(3, 'Administrador', 1);

-- Volcando estructura para vista capacitacion.vcxp
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `vcxp` (
	`folio_cxp` BIGINT(20) NOT NULL,
	`fecha` DATE NULL,
	`nombre` VARCHAR(150) NOT NULL COLLATE 'armscii8_bin',
	`descripcion` VARCHAR(200) NULL COLLATE 'armscii8_bin',
	`gtotal` DECIMAL(10,2) NOT NULL,
	`saldo` DECIMAL(10,2) NOT NULL,
	`tipo` TINYINT(4) NOT NULL,
	`estado_cxp` TINYINT(1) NOT NULL
) ENGINE=MyISAM;

-- Volcando estructura para tabla capacitacion.w_usuario
CREATE TABLE IF NOT EXISTS `w_usuario` (
  `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE armscii8_bin NOT NULL,
  `nombre` varchar(150) COLLATE armscii8_bin NOT NULL,
  `email` varchar(50) COLLATE armscii8_bin NOT NULL,
  `password` varchar(50) COLLATE armscii8_bin NOT NULL,
  `rol_usuario` int(11) NOT NULL,
  `edo_usuario` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla capacitacion.w_usuario: ~7 rows (aproximadamente)
INSERT INTO `w_usuario` (`id_usuario`, `username`, `nombre`, `email`, `password`, `rol_usuario`, `edo_usuario`) VALUES
	(1, 'admin', 'Sauri', 'admin@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 3, 1),
	(2, 'adminPrueba', 'SujetoPrueba', 'correo1@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 2, 1),
	(3, 'prueba2', 'sujeto de prueba 2', 'prueba123@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 1, 1),
	(4, 'floredith', 'flor edith colorado', 'flor20@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 3, 1),
	(5, 'lizettemdz', 'lizette colorado', 'ejemplo1@hotmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 2, 1),
	(6, 'prueba_3', 'Prueba3', 'prueba3@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 2, 1),
	(7, 'anthony', 'Antonio Diaz', 'anthony123@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 1, 1);

-- Volcando estructura para vista capacitacion.vcxp
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `vcxp`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `vcxp` AS SELECT cxp.folio_cxp, cxp.fecha, proveedor.nombre , cxp.descripcion, cxp.gtotal, cxp.saldo, cxp.tipo, cxp.estado_cxp
FROM cxp INNER JOIN proveedor ON 
cxp.id_prov = proveedor.id_prov ;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
