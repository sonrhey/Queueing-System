-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2018 at 03:55 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `queueddb`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int(11) NOT NULL,
  `img_path` varchar(100) NOT NULL,
  `dateTime_` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `queued_numbers`
--

CREATE TABLE `queued_numbers` (
  `id` int(11) NOT NULL,
  `queued_number` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `dateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `queued_numbers`
--

INSERT INTO `queued_numbers` (`id`, `queued_number`, `status`, `dateTime`) VALUES
(1, '006', 0, '2018-02-16 10:37:39'),
(2, '054', 0, '2018-02-16 13:28:18'),
(3, '008', 0, '2018-02-16 05:22:23'),
(4, '065', 0, '2018-02-17 00:00:00'),
(5, '058', 0, '2018-02-17 14:30:09'),
(6, '041', 0, '2018-02-17 00:00:00'),
(7, '004', 1, '2018-02-17 10:05:12');

-- --------------------------------------------------------

--
-- Table structure for table `queued_numbers_display`
--

CREATE TABLE `queued_numbers_display` (
  `id` int(11) NOT NULL,
  `qn_queued_number` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `dateTime_` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `queued_numbers_display`
--

INSERT INTO `queued_numbers_display` (`id`, `qn_queued_number`, `status`, `dateTime_`) VALUES
(1, '041', 1, '2018-02-18 22:16:21'),
(2, '041', 1, '2018-02-18 22:27:18'),
(3, '054', 0, '2018-02-18 22:30:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queued_numbers`
--
ALTER TABLE `queued_numbers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queued_numbers_display`
--
ALTER TABLE `queued_numbers_display`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `queued_numbers`
--
ALTER TABLE `queued_numbers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `queued_numbers_display`
--
ALTER TABLE `queued_numbers_display`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
