--https://www.codewars.com/kata/sql-basics-repeat-and-reverse-1/train/sql
--PostgreSQL 9.6
--Time: 2062ms Passed: 11 Failed: 0

SELECT REPEAT(name,3) AS Name, 
       REVERSE(characteristics) AS Characteristics
  FROM monsters
