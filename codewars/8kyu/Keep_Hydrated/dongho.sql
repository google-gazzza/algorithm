--https://www.codewars.com/kata/keep-hydrated-1/train/sql
--PostgreSQL 9.6
--Time: 1445ms Passed: 3 Failed: 0

SELECT id, hours, trunc(floor(hours/2)) AS liters
  FROM cycling