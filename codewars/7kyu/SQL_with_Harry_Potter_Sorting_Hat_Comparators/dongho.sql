--https://www.codewars.com/kata/5abcf0f930488ff1a6000b66/train/sql
--Time: 2145ms Passed: 10 Failed: 0

--PostgreSQL 9.6
SELECT id, name, quality1, quality2
  FROM students
 WHERE quality1 IN ('brave','studious','hufflepuff') 
    OR quality2 IN ('intelligent','hufflepuff')
ORDER BY id



