--https://www.codewars.com/kata/59401c25c15cbeb58d000028/train/sql
--Time: 2019ms Passed: 15 Failed: 0

--PostgreSQL 9.6
SELECT id, name, split_part(characteristics,',',1) AS characteristic
  FROM monsters 
 ORDER BY ID



