--https://www.codewars.com/kata/5809b9ef88b750ab180001ec/train/sql
--Time: 2169ms Passed: 1 Failed: 0

--PostgreSQL 9.6
SELECT id, FirstName, LastName, IsActive
  FROM students
 WHERE IsActive = true