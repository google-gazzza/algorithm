-- sql-basics-simple-union-all
-- SQL Basics: Simple UNION ALL
-- difficulty: 6kyu
-- https://www.codewars.com/kata/58112f8004adbbdb500004fe

SELECT r.*
FROM (SELECT 'US' AS location,
             *
      FROM ussales
      UNION ALL
      SELECT 'EU' AS location,
             *
      FROM eusales) AS r
WHERE price > 50
ORDER BY r.location DESC, r.id
