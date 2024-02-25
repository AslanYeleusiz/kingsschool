-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Фев 25 2024 г., 16:46
-- Версия сервера: 10.6.17-MariaDB
-- Версия PHP: 8.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `kingssc1_kk`
--

-- --------------------------------------------------------

--
-- Структура таблицы `course_types`
--

CREATE TABLE `course_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `course_types`
--

INSERT INTO `course_types` (`id`, `name`) VALUES
(1, 'Базовый курс'),
(2, 'Интенсивный курс');

-- --------------------------------------------------------

--
-- Структура таблицы `edu_orders`
--

CREATE TABLE `edu_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `shift_id` int(2) NOT NULL,
  `train_type_id` bigint(20) UNSIGNED NOT NULL,
  `course_type_id` bigint(20) UNSIGNED NOT NULL,
  `teacher_id` bigint(20) UNSIGNED NOT NULL,
  `price` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `edu_orders`
--

INSERT INTO `edu_orders` (`id`, `user_id`, `subject_id`, `shift_id`, `train_type_id`, `course_type_id`, `teacher_id`, `price`, `start_date`, `end_date`) VALUES
(1, 3, 1, 0, 2, 2, 2, 31000, '2024-02-22', '2024-03-21');

-- --------------------------------------------------------

--
-- Структура таблицы `edu_paid_orders`
--

CREATE TABLE `edu_paid_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `edu_order_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `price` int(11) NOT NULL,
  `late_days` int(11) DEFAULT NULL,
  `late_date` date DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `edu_paid_orders`
--

INSERT INTO `edu_paid_orders` (`id`, `edu_order_id`, `date`, `price`, `late_days`, `late_date`, `status`, `created_at`, `updated_at`) VALUES
(11, 1, '2024-03-21', 31000, NULL, NULL, 1, '2024-02-25 13:09:10', '2024-02-25 13:09:10');

-- --------------------------------------------------------

--
-- Структура таблицы `filials`
--

CREATE TABLE `filials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `filials`
--

INSERT INTO `filials` (`id`, `name`) VALUES
(1, 'Первый Филиал'),
(2, 'Второй Филиал'),
(3, 'Третий Филиал');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2024_01_14_203003_create_roles_table', 1),
(3, '2024_01_20_183329_create_filials_table', 2),
(7, '2024_01_20_184455_create_users_table', 3),
(9, '2024_02_13_200503_create_subjects_table', 4),
(10, '2024_02_13_204229_create_train_types_table', 5),
(11, '2024_02_13_205824_create_course_types_table', 6),
(12, '2024_02_13_212246_create_edu_orders_table', 7),
(13, '2024_02_17_183739_create_teacher_salary_orders_table', 8),
(14, '2024_02_20_204754_create_subject_orders_table', 9);

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Старший Администратор'),
(2, 'Младший Администратор'),
(3, 'Преподаватель'),
(4, 'Студент');

-- --------------------------------------------------------

--
-- Структура таблицы `salaries`
--

CREATE TABLE `salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `minutes` int(11) NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `course_type_id` bigint(20) UNSIGNED NOT NULL,
  `train_type_id` bigint(20) UNSIGNED NOT NULL,
  `shift_id` int(11) NOT NULL,
  `teacher_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subjects`
--

INSERT INTO `subjects` (`id`, `name`) VALUES
(11, 'Түрік тілі (A1)'),
(12, 'Түрік тілі (А2)'),
(13, 'Түрік тілі (B1)'),
(14, 'Түрік тілі (B2)'),
(15, 'Түрік тілі (C1)'),
(16, 'Түрік тілі (C2)'),
(17, 'Ағылшын тілі (Begginer)'),
(18, 'Ағылшын тілі (Elementary)'),
(19, 'Ағылшын тілі (Pre-intermediate)'),
(20, 'Ағылшын тілі (Intermediate)'),
(21, 'Ағылшын тілі (Upper-intermediate)'),
(22, 'Ағылшын тілі (Advanced)'),
(23, 'Орыс тілі (A1)'),
(24, 'Орыс тілі (А2)'),
(25, 'Орыс тілі (B1)'),
(26, 'Орыс тілі (B2)'),
(27, 'Орыс тілі (C1)'),
(28, 'Орыс тілі (C2)'),
(29, 'Казахский язык (A1)'),
(30, 'Казахский язык(А2)'),
(31, 'Казахский язык (B1)'),
(32, 'Казахский язык (B2)'),
(33, 'Казахский язык (C1)'),
(34, 'Казахский язык (C2)'),
(35, 'Математика'),
(36, 'Математическая грамотность'),
(37, 'История Казахстана'),
(38, 'История'),
(39, 'Физика'),
(40, 'География'),
(41, 'Информатика'),
(42, 'Химия'),
(43, 'Биология'),
(44, 'Литература');

-- --------------------------------------------------------

--
-- Структура таблицы `subject_orders`
--

CREATE TABLE `subject_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `course_type_id` bigint(20) UNSIGNED NOT NULL,
  `shift_id` int(11) NOT NULL,
  `train_type_id` bigint(20) UNSIGNED NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subject_orders`
--

INSERT INTO `subject_orders` (`id`, `subject_id`, `course_type_id`, `shift_id`, `train_type_id`, `price`) VALUES
(121, 11, 1, 1, 1, 12000),
(122, 11, 1, 1, 2, 19000),
(123, 11, 1, 1, 3, 15400),
(124, 11, 1, 2, 1, 15000),
(125, 11, 1, 2, 2, 23500),
(126, 11, 1, 2, 3, 15400),
(127, 11, 2, 1, 1, 12000),
(128, 11, 2, 1, 2, 15000),
(129, 11, 2, 1, 3, 16000),
(130, 11, 2, 2, 1, 15000),
(131, 11, 2, 2, 2, 12000),
(132, 11, 2, 2, 3, 12200),
(133, 12, 1, 1, 1, 12000),
(134, 12, 1, 1, 2, 19000),
(135, 12, 1, 1, 3, 15400),
(136, 12, 1, 2, 1, 15000),
(137, 12, 1, 2, 2, 23500),
(138, 12, 1, 2, 3, 15400),
(139, 12, 2, 1, 1, 12000),
(140, 12, 2, 1, 2, 15000),
(141, 12, 2, 1, 3, 16000),
(142, 12, 2, 2, 1, 15000),
(143, 12, 2, 2, 2, 12000),
(144, 12, 2, 2, 3, 12200),
(145, 13, 1, 1, 1, 12000),
(146, 13, 1, 1, 2, 19000),
(147, 13, 1, 1, 3, 15400),
(148, 13, 1, 2, 1, 15000),
(149, 13, 1, 2, 2, 23500),
(150, 13, 1, 2, 3, 15400),
(151, 13, 2, 1, 1, 12000),
(152, 13, 2, 1, 2, 15000),
(153, 13, 2, 1, 3, 16000),
(154, 13, 2, 2, 1, 15000),
(155, 13, 2, 2, 2, 12000),
(156, 13, 2, 2, 3, 12200),
(157, 14, 1, 1, 1, 12000),
(158, 14, 1, 1, 2, 19000),
(159, 14, 1, 1, 3, 15400),
(160, 14, 1, 2, 1, 15000),
(161, 14, 1, 2, 2, 23500),
(162, 14, 1, 2, 3, 15400),
(163, 14, 2, 1, 1, 12000),
(164, 14, 2, 1, 2, 15000),
(165, 14, 2, 1, 3, 16000),
(166, 14, 2, 2, 1, 15000),
(167, 14, 2, 2, 2, 12000),
(168, 14, 2, 2, 3, 12200),
(169, 15, 1, 1, 1, 12000),
(170, 15, 1, 1, 2, 19000),
(171, 15, 1, 1, 3, 15400),
(172, 15, 1, 2, 1, 15000),
(173, 15, 1, 2, 2, 23500),
(174, 15, 1, 2, 3, 15400),
(175, 15, 2, 1, 1, 12000),
(176, 15, 2, 1, 2, 15000),
(177, 15, 2, 1, 3, 16000),
(178, 15, 2, 2, 1, 15000),
(179, 15, 2, 2, 2, 12000),
(180, 15, 2, 2, 3, 12200),
(181, 16, 1, 1, 1, 12000),
(182, 16, 1, 1, 2, 19000),
(183, 16, 1, 1, 3, 15400),
(184, 16, 1, 2, 1, 15000),
(185, 16, 1, 2, 2, 23500),
(186, 16, 1, 2, 3, 15400),
(187, 16, 2, 1, 1, 12000),
(188, 16, 2, 1, 2, 15000),
(189, 16, 2, 1, 3, 16000),
(190, 16, 2, 2, 1, 15000),
(191, 16, 2, 2, 2, 12000),
(192, 16, 2, 2, 3, 12200),
(193, 17, 1, 1, 1, 12000),
(194, 17, 1, 1, 2, 19000),
(195, 17, 1, 1, 3, 15400),
(196, 17, 1, 2, 1, 15000),
(197, 17, 1, 2, 2, 23500),
(198, 17, 1, 2, 3, 15400),
(199, 17, 2, 1, 1, 12000),
(200, 17, 2, 1, 2, 15000),
(201, 17, 2, 1, 3, 16000),
(202, 17, 2, 2, 1, 15000),
(203, 17, 2, 2, 2, 12000),
(204, 17, 2, 2, 3, 12200),
(205, 18, 1, 1, 1, 12000),
(206, 18, 1, 1, 2, 19000),
(207, 18, 1, 1, 3, 15400),
(208, 18, 1, 2, 1, 15000),
(209, 18, 1, 2, 2, 23500),
(210, 18, 1, 2, 3, 15400),
(211, 18, 2, 1, 1, 12000),
(212, 18, 2, 1, 2, 15000),
(213, 18, 2, 1, 3, 16000),
(214, 18, 2, 2, 1, 15000),
(215, 18, 2, 2, 2, 12000),
(216, 18, 2, 2, 3, 12200),
(217, 19, 1, 1, 1, 12000),
(218, 19, 1, 1, 2, 19000),
(219, 19, 1, 1, 3, 15400),
(220, 19, 1, 2, 1, 15000),
(221, 19, 1, 2, 2, 23500),
(222, 19, 1, 2, 3, 15400),
(223, 19, 2, 1, 1, 12000),
(224, 19, 2, 1, 2, 15000),
(225, 19, 2, 1, 3, 16000),
(226, 19, 2, 2, 1, 15000),
(227, 19, 2, 2, 2, 12000),
(228, 19, 2, 2, 3, 12200),
(229, 20, 1, 1, 1, 12000),
(230, 20, 1, 1, 2, 19000),
(231, 20, 1, 1, 3, 15400),
(232, 20, 1, 2, 1, 15000),
(233, 20, 1, 2, 2, 23500),
(234, 20, 1, 2, 3, 15400),
(235, 20, 2, 1, 1, 12000),
(236, 20, 2, 1, 2, 15000),
(237, 20, 2, 1, 3, 16000),
(238, 20, 2, 2, 1, 15000),
(239, 20, 2, 2, 2, 12000),
(240, 20, 2, 2, 3, 12200),
(241, 21, 1, 1, 1, 12000),
(242, 21, 1, 1, 2, 19000),
(243, 21, 1, 1, 3, 15400),
(244, 21, 1, 2, 1, 15000),
(245, 21, 1, 2, 2, 23500),
(246, 21, 1, 2, 3, 15400),
(247, 21, 2, 1, 1, 12000),
(248, 21, 2, 1, 2, 15000),
(249, 21, 2, 1, 3, 16000),
(250, 21, 2, 2, 1, 15000),
(251, 21, 2, 2, 2, 12000),
(252, 21, 2, 2, 3, 12200),
(253, 22, 1, 1, 1, 12000),
(254, 22, 1, 1, 2, 19000),
(255, 22, 1, 1, 3, 15400),
(256, 22, 1, 2, 1, 15000),
(257, 22, 1, 2, 2, 23500),
(258, 22, 1, 2, 3, 15400),
(259, 22, 2, 1, 1, 12000),
(260, 22, 2, 1, 2, 15000),
(261, 22, 2, 1, 3, 16000),
(262, 22, 2, 2, 1, 15000),
(263, 22, 2, 2, 2, 12000),
(264, 22, 2, 2, 3, 12200),
(265, 23, 1, 1, 1, 12000),
(266, 23, 1, 1, 2, 19000),
(267, 23, 1, 1, 3, 15400),
(268, 23, 1, 2, 1, 15000),
(269, 23, 1, 2, 2, 23500),
(270, 23, 1, 2, 3, 15400),
(271, 23, 2, 1, 1, 12000),
(272, 23, 2, 1, 2, 15000),
(273, 23, 2, 1, 3, 16000),
(274, 23, 2, 2, 1, 15000),
(275, 23, 2, 2, 2, 12000),
(276, 23, 2, 2, 3, 12200),
(277, 24, 1, 1, 1, 12000),
(278, 24, 1, 1, 2, 19000),
(279, 24, 1, 1, 3, 15400),
(280, 24, 1, 2, 1, 15000),
(281, 24, 1, 2, 2, 23500),
(282, 24, 1, 2, 3, 15400),
(283, 24, 2, 1, 1, 12000),
(284, 24, 2, 1, 2, 15000),
(285, 24, 2, 1, 3, 16000),
(286, 24, 2, 2, 1, 15000),
(287, 24, 2, 2, 2, 12000),
(288, 24, 2, 2, 3, 12200),
(289, 25, 1, 1, 1, 12000),
(290, 25, 1, 1, 2, 19000),
(291, 25, 1, 1, 3, 15400),
(292, 25, 1, 2, 1, 15000),
(293, 25, 1, 2, 2, 23500),
(294, 25, 1, 2, 3, 15400),
(295, 25, 2, 1, 1, 12000),
(296, 25, 2, 1, 2, 15000),
(297, 25, 2, 1, 3, 16000),
(298, 25, 2, 2, 1, 15000),
(299, 25, 2, 2, 2, 12000),
(300, 25, 2, 2, 3, 12200),
(301, 26, 1, 1, 1, 12000),
(302, 26, 1, 1, 2, 19000),
(303, 26, 1, 1, 3, 15400),
(304, 26, 1, 2, 1, 15000),
(305, 26, 1, 2, 2, 23500),
(306, 26, 1, 2, 3, 15400),
(307, 26, 2, 1, 1, 12000),
(308, 26, 2, 1, 2, 15000),
(309, 26, 2, 1, 3, 16000),
(310, 26, 2, 2, 1, 15000),
(311, 26, 2, 2, 2, 12000),
(312, 26, 2, 2, 3, 12200),
(313, 27, 1, 1, 1, 12000),
(314, 27, 1, 1, 2, 19000),
(315, 27, 1, 1, 3, 15400),
(316, 27, 1, 2, 1, 15000),
(317, 27, 1, 2, 2, 23500),
(318, 27, 1, 2, 3, 15400),
(319, 27, 2, 1, 1, 12000),
(320, 27, 2, 1, 2, 15000),
(321, 27, 2, 1, 3, 16000),
(322, 27, 2, 2, 1, 15000),
(323, 27, 2, 2, 2, 12000),
(324, 27, 2, 2, 3, 12200),
(325, 28, 1, 1, 1, 12000),
(326, 28, 1, 1, 2, 19000),
(327, 28, 1, 1, 3, 15400),
(328, 28, 1, 2, 1, 15000),
(329, 28, 1, 2, 2, 23500),
(330, 28, 1, 2, 3, 15400),
(331, 28, 2, 1, 1, 12000),
(332, 28, 2, 1, 2, 15000),
(333, 28, 2, 1, 3, 16000),
(334, 28, 2, 2, 1, 15000),
(335, 28, 2, 2, 2, 12000),
(336, 28, 2, 2, 3, 12200),
(337, 29, 1, 1, 1, 12000),
(338, 29, 1, 1, 2, 19000),
(339, 29, 1, 1, 3, 15400),
(340, 29, 1, 2, 1, 15000),
(341, 29, 1, 2, 2, 23500),
(342, 29, 1, 2, 3, 15400),
(343, 29, 2, 1, 1, 12000),
(344, 29, 2, 1, 2, 15000),
(345, 29, 2, 1, 3, 16000),
(346, 29, 2, 2, 1, 15000),
(347, 29, 2, 2, 2, 12000),
(348, 29, 2, 2, 3, 12200),
(349, 30, 1, 1, 1, 12000),
(350, 30, 1, 1, 2, 19000),
(351, 30, 1, 1, 3, 15400),
(352, 30, 1, 2, 1, 15000),
(353, 30, 1, 2, 2, 23500),
(354, 30, 1, 2, 3, 15400),
(355, 30, 2, 1, 1, 12000),
(356, 30, 2, 1, 2, 15000),
(357, 30, 2, 1, 3, 16000),
(358, 30, 2, 2, 1, 15000),
(359, 30, 2, 2, 2, 12000),
(360, 30, 2, 2, 3, 12200),
(361, 31, 1, 1, 1, 12000),
(362, 31, 1, 1, 2, 19000),
(363, 31, 1, 1, 3, 15400),
(364, 31, 1, 2, 1, 15000),
(365, 31, 1, 2, 2, 23500),
(366, 31, 1, 2, 3, 15400),
(367, 31, 2, 1, 1, 12000),
(368, 31, 2, 1, 2, 15000),
(369, 31, 2, 1, 3, 16000),
(370, 31, 2, 2, 1, 15000),
(371, 31, 2, 2, 2, 12000),
(372, 31, 2, 2, 3, 12200),
(373, 32, 1, 1, 1, 12000),
(374, 32, 1, 1, 2, 19000),
(375, 32, 1, 1, 3, 15400),
(376, 32, 1, 2, 1, 15000),
(377, 32, 1, 2, 2, 23500),
(378, 32, 1, 2, 3, 15400),
(379, 32, 2, 1, 1, 12000),
(380, 32, 2, 1, 2, 15000),
(381, 32, 2, 1, 3, 16000),
(382, 32, 2, 2, 1, 15000),
(383, 32, 2, 2, 2, 12000),
(384, 32, 2, 2, 3, 12200),
(385, 33, 1, 1, 1, 12000),
(386, 33, 1, 1, 2, 19000),
(387, 33, 1, 1, 3, 15400),
(388, 33, 1, 2, 1, 15000),
(389, 33, 1, 2, 2, 23500),
(390, 33, 1, 2, 3, 15400),
(391, 33, 2, 1, 1, 12000),
(392, 33, 2, 1, 2, 15000),
(393, 33, 2, 1, 3, 16000),
(394, 33, 2, 2, 1, 15000),
(395, 33, 2, 2, 2, 12000),
(396, 33, 2, 2, 3, 12200),
(397, 34, 1, 1, 1, 12000),
(398, 34, 1, 1, 2, 19000),
(399, 34, 1, 1, 3, 15400),
(400, 34, 1, 2, 1, 15000),
(401, 34, 1, 2, 2, 23500),
(402, 34, 1, 2, 3, 15400),
(403, 34, 2, 1, 1, 12000),
(404, 34, 2, 1, 2, 15000),
(405, 34, 2, 1, 3, 16000),
(406, 34, 2, 2, 1, 15000),
(407, 34, 2, 2, 2, 12000),
(408, 34, 2, 2, 3, 12200),
(409, 35, 1, 1, 1, 12000),
(410, 35, 1, 1, 2, 19000),
(411, 35, 1, 1, 3, 15400),
(412, 35, 1, 2, 1, 15000),
(413, 35, 1, 2, 2, 23500),
(414, 35, 1, 2, 3, 15400),
(415, 35, 2, 1, 1, 12000),
(416, 35, 2, 1, 2, 15000),
(417, 35, 2, 1, 3, 16000),
(418, 35, 2, 2, 1, 15000),
(419, 35, 2, 2, 2, 12000),
(420, 35, 2, 2, 3, 12200),
(421, 36, 1, 1, 1, 12000),
(422, 36, 1, 1, 2, 19000),
(423, 36, 1, 1, 3, 15400),
(424, 36, 1, 2, 1, 15000),
(425, 36, 1, 2, 2, 23500),
(426, 36, 1, 2, 3, 15400),
(427, 36, 2, 1, 1, 12000),
(428, 36, 2, 1, 2, 15000),
(429, 36, 2, 1, 3, 16000),
(430, 36, 2, 2, 1, 15000),
(431, 36, 2, 2, 2, 12000),
(432, 36, 2, 2, 3, 12200),
(433, 37, 1, 1, 1, 12000),
(434, 37, 1, 1, 2, 19000),
(435, 37, 1, 1, 3, 15400),
(436, 37, 1, 2, 1, 15000),
(437, 37, 1, 2, 2, 23500),
(438, 37, 1, 2, 3, 15400),
(439, 37, 2, 1, 1, 12000),
(440, 37, 2, 1, 2, 15000),
(441, 37, 2, 1, 3, 16000),
(442, 37, 2, 2, 1, 15000),
(443, 37, 2, 2, 2, 12000),
(444, 37, 2, 2, 3, 12200),
(445, 38, 1, 1, 1, 12000),
(446, 38, 1, 1, 2, 19000),
(447, 38, 1, 1, 3, 15400),
(448, 38, 1, 2, 1, 15000),
(449, 38, 1, 2, 2, 23500),
(450, 38, 1, 2, 3, 15400),
(451, 38, 2, 1, 1, 12000),
(452, 38, 2, 1, 2, 15000),
(453, 38, 2, 1, 3, 16000),
(454, 38, 2, 2, 1, 15000),
(455, 38, 2, 2, 2, 12000),
(456, 38, 2, 2, 3, 12200),
(457, 39, 1, 1, 1, 12000),
(458, 39, 1, 1, 2, 19000),
(459, 39, 1, 1, 3, 15400),
(460, 39, 1, 2, 1, 15000),
(461, 39, 1, 2, 2, 23500),
(462, 39, 1, 2, 3, 15400),
(463, 39, 2, 1, 1, 12000),
(464, 39, 2, 1, 2, 15000),
(465, 39, 2, 1, 3, 16000),
(466, 39, 2, 2, 1, 15000),
(467, 39, 2, 2, 2, 12000),
(468, 39, 2, 2, 3, 12200),
(469, 40, 1, 1, 1, 12000),
(470, 40, 1, 1, 2, 19000),
(471, 40, 1, 1, 3, 15400),
(472, 40, 1, 2, 1, 15000),
(473, 40, 1, 2, 2, 23500),
(474, 40, 1, 2, 3, 15400),
(475, 40, 2, 1, 1, 12000),
(476, 40, 2, 1, 2, 15000),
(477, 40, 2, 1, 3, 16000),
(478, 40, 2, 2, 1, 15000),
(479, 40, 2, 2, 2, 12000),
(480, 40, 2, 2, 3, 12200),
(481, 41, 1, 1, 1, 12000),
(482, 41, 1, 1, 2, 19000),
(483, 41, 1, 1, 3, 15400),
(484, 41, 1, 2, 1, 15000),
(485, 41, 1, 2, 2, 23500),
(486, 41, 1, 2, 3, 15400),
(487, 41, 2, 1, 1, 12000),
(488, 41, 2, 1, 2, 15000),
(489, 41, 2, 1, 3, 16000),
(490, 41, 2, 2, 1, 15000),
(491, 41, 2, 2, 2, 12000),
(492, 41, 2, 2, 3, 12200),
(493, 42, 1, 1, 1, 12000),
(494, 42, 1, 1, 2, 19000),
(495, 42, 1, 1, 3, 15400),
(496, 42, 1, 2, 1, 15000),
(497, 42, 1, 2, 2, 23500),
(498, 42, 1, 2, 3, 15400),
(499, 42, 2, 1, 1, 12000),
(500, 42, 2, 1, 2, 15000),
(501, 42, 2, 1, 3, 16000),
(502, 42, 2, 2, 1, 15000),
(503, 42, 2, 2, 2, 12000),
(504, 42, 2, 2, 3, 12200),
(505, 43, 1, 1, 1, 12000),
(506, 43, 1, 1, 2, 19000),
(507, 43, 1, 1, 3, 15400),
(508, 43, 1, 2, 1, 15000),
(509, 43, 1, 2, 2, 23500),
(510, 43, 1, 2, 3, 15400),
(511, 43, 2, 1, 1, 12000),
(512, 43, 2, 1, 2, 15000),
(513, 43, 2, 1, 3, 16000),
(514, 43, 2, 2, 1, 15000),
(515, 43, 2, 2, 2, 12000),
(516, 43, 2, 2, 3, 12200),
(517, 44, 1, 1, 1, 12000),
(518, 44, 1, 1, 2, 19000),
(519, 44, 1, 1, 3, 15400),
(520, 44, 1, 2, 1, 15000),
(521, 44, 1, 2, 2, 23500),
(522, 44, 1, 2, 3, 15400),
(523, 44, 2, 1, 1, 12000),
(524, 44, 2, 1, 2, 15000),
(525, 44, 2, 1, 3, 16000),
(526, 44, 2, 2, 1, 15000),
(527, 44, 2, 2, 2, 12000),
(528, 44, 2, 2, 3, 12200);

-- --------------------------------------------------------

--
-- Структура таблицы `teacher_salary_orders`
--

CREATE TABLE `teacher_salary_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `train_type_id` bigint(20) UNSIGNED NOT NULL,
  `percent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `teacher_salary_orders`
--

INSERT INTO `teacher_salary_orders` (`id`, `user_id`, `train_type_id`, `percent`) VALUES
(1, 2, 1, 40),
(2, 2, 2, 50),
(3, 2, 3, 45);

-- --------------------------------------------------------

--
-- Структура таблицы `train_types`
--

CREATE TABLE `train_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `train_types`
--

INSERT INTO `train_types` (`id`, `name`) VALUES
(1, 'Групповое обучение'),
(2, 'Индивидуальное обучение'),
(3, 'Мини группа');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `iin` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `s_name` varchar(255) NOT NULL,
  `fio` varchar(255) DEFAULT NULL,
  `birthday` date NOT NULL,
  `tel_num` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `real_password` varchar(255) DEFAULT NULL,
  `tel_num_family` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `filial_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `iin`, `name`, `s_name`, `fio`, `birthday`, `tel_num`, `password`, `real_password`, `tel_num_family`, `avatar`, `is_deleted`, `filial_id`, `role_id`) VALUES
(1, '020914500302', 'Аслан', 'Асанұлы', 'Асанұлы Аслан', '2002-09-14', '+7(775) 549-89-11', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'password', '+7(775) 549-89-12', 'avatars/1708845568_I81gm.jpg', 0, 1, 1),
(2, '030304500823', 'Бексұлтан', 'Үсен', 'Үсен Бексұлтан', '2003-03-04', '+7(775) 459-59-59', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'password', '+7(775) 549-89-12', 'avatars/1708538820_Gd5op.jpg', 0, 1, 1),
(3, '040210600375', 'Карина', 'Абдуллаева', 'Абдуллаева Карина', '2004-02-10', '87001418004', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'password', '87001418004', 'avatars/1708845243_g2qha.png', 0, 1, 4),
(4, '021104500708', 'NURSAID', 'NURIDDINOV', 'NURIDDINOV NURSAID', '2002-11-04', '+77073130070', '8ed3a5465b12b1e3b2021c3bb812e803f03af800', 'passsword', NULL, 'avatars/1708666163_c3WqA.png', 0, 2, 1),
(5, '021104500708', 'NURSAID', 'NURIDDINOV', 'NURIDDINOV NURSAID', '2002-11-04', '+77073130070', '8ed3a5465b12b1e3b2021c3bb812e803f03af800', 'passsword', NULL, 'avatars/1708666164_uYVD1.png', 1, 2, 1),
(6, '021104500708', 'NURSAID', 'NURIDDINOV', 'NURIDDINOV NURSAID', '2002-11-04', '+77073130070', '8ed3a5465b12b1e3b2021c3bb812e803f03af800', 'passsword', NULL, 'avatars/1708666165_65vON.png', 1, 2, 1),
(7, '021104500708', 'NURSAID', 'NURIDDINOV', 'NURIDDINOV NURSAID', '2002-11-04', '+77073130070', '8ed3a5465b12b1e3b2021c3bb812e803f03af800', 'passsword', NULL, 'avatars/1708666166_dZMkH.png', 1, 2, 1),
(8, '021104500709', 'NURSAID', 'NURIDDINOV', 'NURIDDINOV NURSAID', '2024-02-23', '+77786402418', '8ed3a5465b12b1e3b2021c3bb812e803f03af800', 'passsword', '+77786402418', 'avatars/1708667252_iDQt0.png', 1, 2, 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `course_types`
--
ALTER TABLE `course_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `edu_orders`
--
ALTER TABLE `edu_orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `edu_paid_orders`
--
ALTER TABLE `edu_paid_orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `filials`
--
ALTER TABLE `filials`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `salaries`
--
ALTER TABLE `salaries`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subject_orders`
--
ALTER TABLE `subject_orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `teacher_salary_orders`
--
ALTER TABLE `teacher_salary_orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `train_types`
--
ALTER TABLE `train_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `course_types`
--
ALTER TABLE `course_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `edu_orders`
--
ALTER TABLE `edu_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `edu_paid_orders`
--
ALTER TABLE `edu_paid_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `filials`
--
ALTER TABLE `filials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `salaries`
--
ALTER TABLE `salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT для таблицы `subject_orders`
--
ALTER TABLE `subject_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=529;

--
-- AUTO_INCREMENT для таблицы `teacher_salary_orders`
--
ALTER TABLE `teacher_salary_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `train_types`
--
ALTER TABLE `train_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
