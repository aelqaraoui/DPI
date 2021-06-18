-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 13, 2021 at 04:43 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patients`
--

-- --------------------------------------------------------

--
-- Table structure for table `infos`
--

CREATE TABLE `infos` (
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `age` int(11) NOT NULL,
  `cin` text NOT NULL,
  `phone` text NOT NULL,
  `sex` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medical`
--

CREATE TABLE `medical` (
  `cin` text NOT NULL,
  `hereditary_disease` text NOT NULL,
  `had_surgical_operation` tinyint(1) NOT NULL,
  `does_smoke` tinyint(1) NOT NULL,
  `does_drink` tinyint(1) NOT NULL,
  `have_kidney_disease` tinyint(1) NOT NULL,
  `have_hbp` tinyint(1) NOT NULL,
  `diabetic` tinyint(1) NOT NULL,
  `have_tuberculosis` tinyint(1) NOT NULL,
  `have_heart_disease` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `observations`
--

CREATE TABLE `observations` (
  `cin` text NOT NULL,
  `doctor` text NOT NULL,
  `speciality` text NOT NULL,
  `obsv` text NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `radios`
--

CREATE TABLE `radios` (
  `cin` text NOT NULL,
  `name` text NOT NULL,
  `filename` text NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
