-- sql-basics-simple-exists
-- SQL Basics: Simple EXISTS
-- difficulty: 6kyu
-- https://www.codewars.com/kata/58113a64e10b53ec36000293/

SELECT d.id,
       d.name
FROM departments AS d
WHERE EXISTS(SELECT department_id FROM sales WHERE d.id = department_id AND price > 98);
