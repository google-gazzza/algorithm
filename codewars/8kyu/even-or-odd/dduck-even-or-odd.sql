-- https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/sql

SELECT (CASE WHEN number % 2 = 0 THEN 'Even' ELSE 'Odd' END) AS is_even
FROM numbers
