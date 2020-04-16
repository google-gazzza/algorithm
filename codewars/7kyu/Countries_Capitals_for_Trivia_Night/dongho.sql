--https://www.codewars.com/kata/5e5f09dc0a17be0023920f6f/train/sql
--Time: 1633ms Passed: 9 Failed: 0

--PostgreSQL 9.6
SELECT capital 
  FROM countries   
 WHERE continent LIKE 'Afri%'
   AND country   LIKE 'E%'
 ORDER BY capital 
 LIMIT 3