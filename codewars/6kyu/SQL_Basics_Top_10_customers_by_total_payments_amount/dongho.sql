--https://www.codewars.com/kata/580d08b5c049aef8f900007c/train/sql
--Time: 1733ms Passed: 9 Failed: 0

--PostgreSQL 9.6
SELECT A.customer_id, A.email, payments_count AS payments_count, total_amount AS total_amount
  FROM customer AS A 
       LEFT OUTER JOIN (SELECT customer_id,
                               COUNT(1) AS payments_count,
                               SUM(FLOAT8(amount)) AS total_amount
                          FROM payment 
                         GROUP BY customer_id)
                          AS B ON A.customer_id = b.customer_id
 ORDER BY total_amount desc
 LIMIT 10



