-- easy-sql-counting-and-grouping
-- Easy SQL: Counting and Grouping
-- https://www.codewars.com/kata/594633020a561e329a0000a2

SELECT d.race,
       count(d.name)
FROM demographics AS d
GROUP BY d.race
ORDER BY d.race DESC;
