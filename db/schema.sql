DROP DATABASE IF EXISTS `burgers_db`;

CREATE SCHEMA `burgers_db` ;

USE `burgers_db`;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`));

SELECT * FROM burgers_db.burgers;