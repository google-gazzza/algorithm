--https://www.codewars.com/kata/594633020a561e329a0000a2/train/sql
--PostgreSQL 9.6

SELECT race, count(*) AS count
  FROM  demographics
 GROUP BY race
 ORDER BY 2 DESC