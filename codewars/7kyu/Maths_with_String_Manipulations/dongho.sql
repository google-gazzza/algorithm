--https://www.codewars.com/kata/sql-basics-maths-with-string-manipulations/train/sql
--PostgreSQL 9.6


       -- bit길이          -- char길이
SELECT bit_length(name) + char_length(race) AS calculation
  FROM demographics
