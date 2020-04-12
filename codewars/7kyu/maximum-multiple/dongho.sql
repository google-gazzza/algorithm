--https://www.codewars.com/kata/5aba780a6a176b029800041c/train/sql
--Time: 1421ms Passed: 4 Failed: 0

--PostgreSQL 9.6

SELECT  FLOOR(bound/divisor)::integer * divisor AS res 
  FROM max_multiple
