--https://www.codewars.com/kata/582cba7d3be8ce3a8300007c/train/sql
--PostgreSQL 9.6
--Time: 4831ms Passed: 8 Failed: 0

SELECT date(s.transaction_date) AS Day,
       d.Name AS Department,
       COUNT(s.id) AS Sale_count
 FROM department d
      JOIN sale s ON d.id = s.department_id
GROUP BY Day, d.name
ORDER BY Day ASC
