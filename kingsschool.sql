-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 22 2024 г., 11:13
-- Версия сервера: 10.5.17-MariaDB
-- Версия PHP: 8.0.22

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
-- Структура таблицы `course_types`
--

CREATE TABLE `course_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
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

INSERT INTO `edu_orders` (`id`, `user_id`, `subject_id`, `train_type_id`, `course_type_id`, `teacher_id`, `price`, `start_date`, `end_date`) VALUES
(1, 3, 1, 2, 2, 2, 31000, '2024-02-22', '2024-03-21');

-- --------------------------------------------------------

--
-- Структура таблицы `filials`
--

CREATE TABLE `filials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
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
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
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
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subjects`
--

INSERT INTO `subjects` (`id`, `name`) VALUES
(1, 'Информатика');

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
(1, 1, 1, 1, 1, 19000),
(2, 1, 1, 1, 2, 24000),
(3, 1, 1, 1, 3, 21000),
(4, 1, 1, 2, 1, 27000),
(5, 1, 1, 2, 2, 31000),
(6, 1, 1, 2, 3, 28500),
(7, 1, 2, 1, 1, 27000),
(8, 1, 2, 1, 2, 31000),
(9, 1, 2, 1, 3, 28500),
(10, 1, 2, 2, 1, 31000),
(11, 1, 2, 2, 2, 35000),
(12, 1, 2, 2, 3, 32500);

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
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
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
  `iin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `s_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date NOT NULL,
  `tel_num` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `real_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tel_num_family` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `filial_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `iin`, `name`, `s_name`, `fio`, `birthday`, `tel_num`, `password`, `real_password`, `tel_num_family`, `avatar`, `is_deleted`, `filial_id`, `role_id`) VALUES
(1, '020914500302', 'Аслан', 'Асанұлы', 'Асанұлы Аслан', '2002-09-14', '+7(775) 549-89-11', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'password', '+7(775) 549-89-12', 'avatars/1708538723_tST2D.jpg', 0, 1, 1),
(2, '030121501119', 'Бексұлтан', 'Үсен', 'Үсен Бексұлтан', '2003-03-04', '+7(775) 459-59-59', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'password', '+7(775) 549-89-12', 'avatars/1708538820_Gd5op.jpg', 0, 1, 3),
(3, '040210600375', 'Карина', 'Абдуллаева', 'Абдуллаева Карина', '2004-02-10', '87001418004', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'password', '87001418004', 'avatars/1708538925_hI0sJ.jpg', 0, 1, 4);

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
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `subject_orders`
--
ALTER TABLE `subject_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
