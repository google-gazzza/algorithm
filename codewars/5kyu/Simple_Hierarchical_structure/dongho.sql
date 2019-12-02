--https://www.codewars.com/kata/sql-basics-simple-hierarchical-structure/train/sql

-- PostgreSQL 9.6
WITH RECURSIVE employee_levels (level, id, first_name, last_name, manager_id)
AS
( SELECT 1, id, first_name, last_name, manager_id
    FROM employees
   WHERE manager_id is null
   
  UNION ALL
  
  SELECT B.level+1, A.id, A.first_name, A.last_name, A.manager_id
    FROM employees AS A
         JOIN employee_levels AS B ON A.manager_id = B.id )

SELECT *
  FROM employee_levels
