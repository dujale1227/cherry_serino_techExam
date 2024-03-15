-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 02:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `serino_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `money_values`
--

CREATE TABLE `money_values` (
  `id` int(11) NOT NULL,
  `treasure_id` int(255) NOT NULL,
  `amt` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `money_values`
--

INSERT INTO `money_values` (`id`, `treasure_id`, `amt`) VALUES
(1, 100, 15),
(2, 101, 10),
(3, 102, 15),
(4, 103, 15),
(5, 104, 10),
(6, 105, 15),
(7, 106, 15),
(8, 107, 10),
(9, 108, 15),
(10, 109, 15),
(11, 110, 10),
(12, 111, 15),
(13, 112, 15),
(14, 113, 10),
(15, 114, 15),
(16, 115, 15),
(17, 116, 10),
(18, 117, 15),
(19, 100, 20),
(20, 101, 25),
(21, 102, 20),
(22, 103, 25),
(23, 107, 30),
(24, 108, 30),
(25, 109, 30),
(26, 107, 30),
(27, 108, 30),
(28, 109, 30);

-- --------------------------------------------------------

--
-- Table structure for table `treasures`
--

CREATE TABLE `treasures` (
  `id` int(255) NOT NULL,
  `latitude` double NOT NULL,
  `longtitude` double NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `treasures`
--

INSERT INTO `treasures` (`id`, `latitude`, `longtitude`, `name`) VALUES
(100, 14.5437648051331, 121.019911678311, 'T1'),
(101, 14.5532076554883, 121.055774532421, 'T2'),
(102, 14.5446435656183, 121.020365629871, 'T3'),
(103, 14.5872615919051, 120.979504794655, 'T4'),
(104, 14.5732032723718, 121.023090376156, 'T5'),
(105, 14.5231131289849, 121.019457319516, 'T6'),
(106, 14.6024229153284, 121.011513378939, 'T7'),
(107, 14.6085746293116, 121.018551395794, 'T8'),
(108, 14.4911143426092, 121.043748206197, 'T9'),
(109, 14.5445595272478, 121.106088282234, 'T10'),
(110, 14.5879814117365, 121.058208029763, 'T11'),
(111, 14.5488649285797, 121.03363929755, 'T12'),
(112, 14.5371505894201, 120.990430237915, 'T13'),
(113, 14.5257966600328, 121.020868844103, 'T14'),
(114, 14.5170998780454, 120.981002106201, 'T15'),
(115, 14.502006871058, 120.991618127534, 'T16'),
(116, 14.521124409049, 121.042771368704, 'T17'),
(117, 14.4772076562187, 120.986792724064, 'T18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` int(3) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `password`, `email`) VALUES
(300, 'U1', 21, '*E56A114692FE0DE073F9A1DD68A00EEB9703F3F1', 'u1@kitra.abc'),
(3001, 'U2', 51, '*119C95A1D7BFF4D9B4AD607CA8A54607A2EC2DE1', 'u2@kitra.abc'),
(3002, 'U3', 31, '*84CF3D10A39CA51FCA41E11DFCDC05CADBB4034A', 'u3@kitra.abc'),
(3003, 'U4', 18, '*CF6E1674E36B571CA309370F6613C85CFD8ABE08', 'u4@kitra.abc'),
(3004, 'U5', 21, '*C0DB134CA887B116A507052B22D079FBF2DF47EE', 'u5@kitra.abc'),
(3005, 'U6', 35, '*2E3A12CC92B01C3795F7ADA23369F77C978BDB27', 'u6@kitra.abc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `money_values`
--
ALTER TABLE `money_values`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `treasures`
--
ALTER TABLE `treasures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `money_values`
--
ALTER TABLE `money_values`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `treasures`
--
ALTER TABLE `treasures`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3006;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
