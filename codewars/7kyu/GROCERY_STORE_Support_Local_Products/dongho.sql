--https://www.codewars.com/kata/5a8ed96bfd8c066e7f00011a/train/sql
--Time: 3873ms Passed: 9 Failed: 0

--PostgreSQL 9.6
SELECT count(1) AS products, country
  FROM products 
 WHERE country IN ('United States of America', 'Canada')
 GROUP BY country
 ORDER BY country
  