-- https://www.codewars.com/kata/58111f4ee10b5301a7000175

-- SQL group by w3schools - https://www.w3schools.com/sql/sql_groupby.asp


SELECT age,
       COUNT(age) as people_count
FROM people
GROUP BY age
