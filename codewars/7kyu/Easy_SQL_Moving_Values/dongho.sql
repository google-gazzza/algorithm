--https://www.codewars.com/kata/594a389387a7c6a77a000005/train/sql
--Time: 2003ms Passed: 18 Failed: 0

--PostgreSQL 9.6
SELECT LENGTH(NAME) AS id,
       LENGTH(CAST(legs            AS TEXT)) AS name,
       LENGTH(CAST(arms            AS TEXT)) as legs,
       LENGTH(CAST(characteristics AS TEXT)) as arms,
       LENGTH(CAST(id AS TEXT))    AS characteristics
  FROM monsters



