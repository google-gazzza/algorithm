--https://www.codewars.com/kata/58113a64e10b53ec36000293/train/sql
--PostgreSQL 9.6

SELECT A.id, A.name
  FROM departments AS A
 WHERE EXISTS (SELECT 1 
                 FROM sales 
                WHERE department_id = A.id 
                  AND price > 98.00)