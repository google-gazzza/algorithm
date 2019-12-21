--https://www.codewars.com/kata/58113c03009b4fcc66000d29/train/sql
--PostgreSQL 9.6
--Time: 2151ms Passed: 10 Failed: 0

SELECT A.id, A.name
  FROM departments AS A
 WHERE id IN (SELECT department_id 
                FROM sales 
               WHERE price > 98.00)