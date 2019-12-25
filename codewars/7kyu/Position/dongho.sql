--https://www.codewars.com/kata/59401e0e54a655a298000040/train/sql
--PostgreSQL 9.6
--Time: 2125ms Passed: 16 Failed: 0

SELECT id, name, 
       POSITION(',' IN characteristics) AS comma
  FROM monsters
 ORDER BY comma 