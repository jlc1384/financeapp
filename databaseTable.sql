CREATE TABLE IF NOT EXISTS `expense` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `quantity` DECIMAL(11,3) NOT NULL default '0.000',
  `expdescription` VARCHAR(2500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
