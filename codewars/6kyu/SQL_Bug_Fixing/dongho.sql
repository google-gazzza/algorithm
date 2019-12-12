--https://www.codewars.com/kata/582cba7d3be8ce3a8300007c/train/sql
--PostgreSQL 9.6
--Time: 4831ms Passed: 8 Failed: 0

SELECT date(s.transaction_date) as day,
       d.name as department,
       COUNT(s.id) as sale_count
 FROM department d
     JOIN sale s on d.id = s.department_id
 group by day, d.name
 order by day asc