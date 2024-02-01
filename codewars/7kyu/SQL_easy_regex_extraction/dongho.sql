--https://www.codewars.com/kata/5c0ae69d5f72394e130025f6/train/sql
--Time: 1957ms Passed: 4 Failed: 0

--PostgreSQL 9.6
SELECT name, 
       greeting, 
       REPLACE(substring(greeting, '#\d+'),'#','') AS user_id
  FROM greetings;