-- sql-bug-fixing-fix-the-query-totaling
-- SQL Bug Fixing: Fix the QUERY - Totaling
-- difficulty: 6kyu
-- https://www.codewars.com/kata/582cba7d3be8ce3a8300007c

SELECT DATE(s.transaction_date) AS day,
       d.name                   AS department,
       COUNT(s.id)              AS sale_count
FROM department d
         JOIN sale s on d.id = s.department_id
GROUP BY day, department
ORDER BY day ASC;
