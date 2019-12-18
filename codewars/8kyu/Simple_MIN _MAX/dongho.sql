--https://www.codewars.com/kata/581113dce10b531b1d0000bd/train/sql
--PostgreSQL 9.6
--Time: 2108ms Passed: 4 Failed: 0

SELECT MIN(age) AS age_min,
       MAX(age) AS age_max
  FROM people