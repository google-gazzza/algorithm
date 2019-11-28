--https://www.codewars.com/kata/sql-statistics-min-median-max/train/sql

--PostgreSQL 9.6
SELECT MAX(score) AS max,
       PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY score) AS median,
       MIN(score) AS min       
  FROM result