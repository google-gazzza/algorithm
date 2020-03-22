--https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/sql
--Time: 1432ms Passed: 5 Failed: 0

--PostgreSQL 9.6
SELECT id, CASE WHEN base % factor = 0 THEN true ELSE false END AS res
  FROM kata