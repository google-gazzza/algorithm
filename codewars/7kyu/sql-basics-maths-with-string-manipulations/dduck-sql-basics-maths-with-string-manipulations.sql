-- sql-basics-maths-with-string-manipulations
-- SQL Basics: Maths with String Manipulations
-- difficulty: 7kyu
-- https://www.codewars.com/kata/594901ba44645fd7bd00005f

SELECT (bit_length(name) + length(race)) AS calculation
FROM demographics;
