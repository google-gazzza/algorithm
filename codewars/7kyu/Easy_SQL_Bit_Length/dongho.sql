--https://www.codewars.com/kata/594900e16fd782a607000059/train/sql
--Time: 2124ms Passed: 15 Failed: 0

--1. bit_length
--2. Order by id

SELECT id, bit_length(name) AS name, birthday, bit_length(race) AS race
  FROM demographics 
 ORDER BY id