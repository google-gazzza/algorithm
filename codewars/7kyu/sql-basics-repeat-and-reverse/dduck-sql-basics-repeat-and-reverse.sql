-- sql-basics-repeat-and-reverse
-- SQL Basics: Repeat and Reverse
-- difficulty: 7kyu
-- https://www.codewars.com/kata/59414360f5c3947364000070

SELECT repeat(m.name, 3)          AS name,
       reverse(m.characteristics) AS characteristics
FROM monsters AS m;
