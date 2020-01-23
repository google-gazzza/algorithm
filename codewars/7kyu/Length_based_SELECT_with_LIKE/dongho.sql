--https://www.codewars.com/kata/basics-length-based-select-with-like/train/sql
--PostgreSQL 9.6
--Time: 2475ms Passed: 8 Failed: 0

-- at least 6 character long 
SELECT first_name, last_name
  FROM names
 WHERE first_name like N'______%'