-- sql-basics-monsters-using-case
-- SQL Basics - Monsters using CASE
-- difficulty: 6kyu
-- https://www.codewars.com/kata/593ef0e98b90525e090000b9

SELECT top_half.id,
       heads,
       legs,
       arms,
       tails,
       CASE
           WHEN heads > LEAST(arms, tails, legs) THEN 'BEAST'
           ELSE 'WEIRDO'
END AS species
FROM top_half
         LEFT JOIN bottom_half ON top_half.id = bottom_half.id
ORDER BY species;
