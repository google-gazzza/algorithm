-- sql-right-and-left
-- SQL: Right and Left
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5943a58f95d5f72cb900006a

SELECT left(project, commits)       AS project,
       right(address, contributors) AS address
FROM repositories;
