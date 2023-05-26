-- sql-basics-simple-join-and-rank
-- SQL Basics: Simple JOIN and RANK
-- difficulty: 6kyu
-- https://www.codewars.com/kata/58094559c47d323ebd000035

SELECT people.id,
       people.name,
       count(sales.sale) AS sale_count,
       rank() OVER (
           order by count(sales.sale) DESC
           )                sale_rank
FROM people
         FULL OUTER JOIN sales
                         ON people.id = sales.people_id
GROUP BY people.id;
