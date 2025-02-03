-- initdb/001-create-table.sql
USE todo_db;

CREATE TABLE IF NOT EXISTS `tasks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `completed` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
);