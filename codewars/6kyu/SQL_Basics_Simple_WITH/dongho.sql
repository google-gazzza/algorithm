--https://www.codewars.com/kata/5811501c2d35672d4f000146/train/sql
--PostgreSQL 9.6
--Time: 2169ms Passed: 11 Failed: 0

WITH SPECIAL_SALES 
AS ( SELECT * FROM sales )

SELECT DISTINCT B.id, B.name
  FROM sales AS A JOIN departments  AS B ON A.department_id  = B.id 
 WHERE A.price > 90.00
   AND A.name IN (SELECT name FROM SPECIAL_SALES)
 ORDER BY B.id

