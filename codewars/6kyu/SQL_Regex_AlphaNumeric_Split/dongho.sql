--https://www.codewars.com/kata/594257d4db68b6e99200002c/train/sql
--PostgreSQL 9.6
--Time: 1452ms Passed: 14 Failed: 0

SELECT project, 
       REGEXP_REPLACE(address,'[0-9]','','g') AS letters, 
       REGEXP_REPLACE(address,'[a-zA-Z]','','g') AS numbers
  FROM repositories 
