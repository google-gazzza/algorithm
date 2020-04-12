--https://www.codewars.com/kata/580fb94e12b34dd1c40001f0/train/sql
--Time: 2368ms Passed: 12 Failed: 0

--PostgreSQL 9.6
SELECT job_title ,
       round (AVG(salary)::DECIMAL, 2)::Float AS average_salary ,         
       count(people_id) AS total_people , 
       round (SUM(salary)::DECIMAL, 2)::Float AS total_salary  
  FROM job 
 GROUP BY Job_title 
 ORDER BY average_salary desc--, total_people, total_salary