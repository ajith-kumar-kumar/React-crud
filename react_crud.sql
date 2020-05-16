-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2020 at 09:03 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(34) NOT NULL,
  `email` varchar(80) NOT NULL,
  `pass` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `color` varchar(10) NOT NULL,
  `mobile` int(11) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `m_status` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`, `pass`, `dob`, `color`, `mobile`, `gender`, `m_status`, `address`, `image`) VALUES
(123, 'Raj kumar', 'raj@gmail.com', '93853c891c1694ec1972', '1999-02-01', '#800080', 2147483647, 'male', 'Unmarried', 'west chennai', '224031.jpg'),
(125, 'vignesh', 'vicky@gmail.com', 'b05a6f6cc338aac9b3b7', '2020-03-09', '#400040', 2147483647, 'male', 'Married', 'sivakasi east', '644685.jpg'),
(126, 'ajith', 'han@gmail.com', '5742c0a5b70a1b5f1f3d', '2019-02-12', '#495057', 1334834968, 'male', 'Married', 'xzxcxd', '918760.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
