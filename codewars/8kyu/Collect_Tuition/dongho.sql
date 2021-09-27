--https://www.codewars.com/kata/5910b0d378cc2ba91400000b/train/sql
--Time: 1370ms Passed: 9 Failed: 0

--PostgreSQL 9.6
SELECT name, age, semester, mentor, tuition_received 
  FROM students
 WHERE tuition_received is false
  LIMIT 6

--SQL Server
SELECT TOP 6 name, age, semester, mentor, tuition_received 
  FROM students
 WHERE tuition_received is false