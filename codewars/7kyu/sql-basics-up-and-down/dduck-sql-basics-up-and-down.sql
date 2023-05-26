-- sql-basics-up-and-down
-- SQL Basics: Up and Down
-- difficulty: 7kyu
-- https://www.codewars.com/kata/595a3ba3843b0cbf8e00000

SELECT CASE
           WHEN (sum(number1) % 2) = 0 THEN max(number1)
           ELSE min(number1)
           END AS number1,
       CASE
           WHEN (sum(number2) % 2) = 0 THEN max(number2)
           ELSE min(number2)
           END AS number2
FROM numbers;
