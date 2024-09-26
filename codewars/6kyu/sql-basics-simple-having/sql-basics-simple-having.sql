-- sql-basics-simple-having
-- SQL Basics: Simple HAVING
-- difficulty: 6kyu
-- https://www.codewars.com/kata/58164ddf890632ce00000220

SELECT people.age,
       count(people.id) AS total_people
FROM people
GROUP BY people.age
HAVING count(people.id) >= 10;
