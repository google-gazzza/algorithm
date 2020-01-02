--https://www.codewars.com/kata/58111f4ee10b5301a7000175/train/sql
--PostgreSQL 9.6
--Time: 1991ms Passed: 6 Failed: 0

SELECT age, count(name) AS people_count
  FROM people
 GROUP BY age