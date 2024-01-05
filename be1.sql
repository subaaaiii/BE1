-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2024 at 03:48 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `be1`
--

-- --------------------------------------------------------

--
-- Table structure for table `cuti`
--

CREATE TABLE `cuti` (
  `id` int(11) NOT NULL,
  `no_induk` varchar(7) NOT NULL,
  `tanggal_cuti` date NOT NULL,
  `lama_cuti` int(2) NOT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cuti`
--

INSERT INTO `cuti` (`id`, `no_induk`, `tanggal_cuti`, `lama_cuti`, `keterangan`) VALUES
(3, 'IP06001', '2020-08-02', 2, 'Acara Keluarga'),
(4, 'IP06006', '2020-08-19', 1, 'Nenek Sakit'),
(5, 'IP06007', '2020-08-23', 1, 'Sakit'),
(6, 'IP06004', '2020-08-29', 5, 'Menikah'),
(7, 'IP06003', '2020-08-30', 2, 'Acara Keluarga'),
(8, 'IP06001', '2020-08-02', 1, 'Sakit ');

-- --------------------------------------------------------

--
-- Table structure for table `karyawan`
--

CREATE TABLE `karyawan` (
  `no_induk` varchar(7) NOT NULL,
  `nama` varchar(256) NOT NULL,
  `alamat` varchar(256) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `tanggal_bergabung` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `karyawan`
--

INSERT INTO `karyawan` (`no_induk`, `nama`, `alamat`, `tanggal_lahir`, `tanggal_bergabung`) VALUES
('IP06001', 'Agus', 'Jln Gaja Mada no 12, Surabaya', '1980-01-11', '2005-08-07'),
('IP06002', 'Amin', 'Jln Imam Bonjol no 11, Mojokerto', '1977-09-03', '2005-08-07'),
('IP06003', 'Yusuf', 'Jln A Yani Raya 15 No 14 Malang', '1973-08-09', '2006-08-07'),
('IP06004', 'Alyssa', 'Jln Bungur Sari V no 166, Bandung', '1983-03-18', '2006-09-06'),
('IP06005', 'Maulana', 'Jln Candi Agung, No 78 Gg 5, Jakarta', '1978-11-10', '2006-09-10'),
('IP06006', 'Afgika', 'Jln Nangka, Jakarta Timur', '1979-02-07', '2002-01-07'),
('IP06007', 'James', 'Jln Merpati, 8 Surabaya', '1989-03-18', '2007-04-04'),
('IP06008', 'Octavanus', 'Jln A Yani 17, B 08 Sidoarjo', '1985-04-14', '2007-03-19'),
('IP06009', 'Octavanus', 'Jln Duren tiga 167, Jakarta Selatan', '1984-01-01', '2008-01-16'),
('IP06010', 'Raisa', 'Jln Kelapa Sawit, Jakarta Selatan', '1990-12-17', '2008-08-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cuti`
--
ALTER TABLE `cuti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuti_karyawan` (`no_induk`);

--
-- Indexes for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`no_induk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cuti`
--
ALTER TABLE `cuti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cuti`
--
ALTER TABLE `cuti`
  ADD CONSTRAINT `cuti_karyawan` FOREIGN KEY (`no_induk`) REFERENCES `karyawan` (`no_induk`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
