-- sql-basics-trimming-the-field
-- SQL Basics - Trimming the Field
-- difficulty: 7kyu
-- https://www.codewars.com/kata/59401c25c15cbeb58d000028/

SELECT id,
       name,
       split_part(characteristics, ',', 1) AS characteristic
FROM monsters
ORDER BY id;
