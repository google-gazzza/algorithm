-- sql-basics-simple-in
-- SQL Basics: Simple IN
-- difficulty: 6kyu
-- https://www.codewars.com/kata/58113c03009b4fcc66000d29

SELECT departments.id,
       departments.name
FROM departments
WHERE departments.id IN (SELECT sales.department_id FROM sales WHERE sales.price > 98);
