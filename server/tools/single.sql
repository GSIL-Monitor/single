CREATE TABLE `basicInfo` (
  `id` int AUTO_INCREMENT NOT NULL,
  `open_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `personalInfo` (
  `id` int AUTO_INCREMENT NOT NULL,
  `open_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wxNumber` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `education` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `occupation` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `speciality` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hobby` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `signature` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;