--https://www.codewars.com/kata/5809508cc47d327c12000084/train/sql
--PostgreSQL 9.6
--Time: 2008ms Passed: 52 Failed: 0

SELECT id, name, age
  FROM people
 WHERE age > 50
 ORDER BY age