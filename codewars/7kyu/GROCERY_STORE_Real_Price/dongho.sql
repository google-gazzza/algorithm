--https://www.codewars.com/kata/5a8f00745084d718940000c5/train/sql
--Time: 3460ms Passed: 9 Failed: 0

--PostgreSQL 9.6
SELECT name, weight, price, 
       ROUND((price * 1000 / weight)::numeric, 2)::float AS price_per_kg
  FROM products
ORDER BY 4, 1