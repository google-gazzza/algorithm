--https://www.codewars.com/kata/5694cb0ec554589633000036/train/sql
--Time: 2122ms Passed: 7 Failed: 0

--PostgreSQL 9.6
WITH RECURSIVE r AS 
    (
      SELECT 0 AS n, CAST(1 AS bigint) AS fact
      
      UNION ALL
      
      SELECT n + 1 AS n, fact * (n + 1) AS fact 
       FROM r
      WHERE n < 16
    )

SELECT * FROM r