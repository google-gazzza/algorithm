--https://www.codewars.com/kata/581676828906324b8b00059e/train/sql
--Time: 3476ms Passed: 11 Failed: 0

--PostgreSQL 9.6

SELECT id, name, price
  FROM product 
 WHERE to_tsvector(name) @@ to_tsquery('Awesome');