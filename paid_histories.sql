-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 26 2024 г., 18:54
-- Версия сервера: 10.5.17-MariaDB
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `kingsschool`
--

-- --------------------------------------------------------

--
-- Структура таблицы `paid_histories`
--

CREATE TABLE `paid_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `edu_paid_order_id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `paid_histories`
--

INSERT INTO `paid_histories` (`id`, `edu_paid_order_id`, `status`, `created_at`, `updated_at`) VALUES
(7, 3, 1, '2024-02-26 18:33:48', '2024-02-26 18:33:48'),
(8, 11, 1, '2024-02-26 18:33:56', '2024-02-26 18:33:56'),
(9, 9, 1, '2024-02-26 18:34:04', '2024-02-26 18:34:04');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `paid_histories`
--
ALTER TABLE `paid_histories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `paid_histories`
--
ALTER TABLE `paid_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
