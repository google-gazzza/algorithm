--https://www.codewars.com/kata/sql-basics-simple-having/train/sql

SELECT age, count(1) AS total_people
  FROM people
 GROUP BY age 
 HAVING COUNT(1) >= 10 