-- https://www.codewars.com/kata/580d08b5c049aef8f900007c/train/sql
-- schema https://www.postgresqltutorial.com/postgresql-sample-database/

-- The query should output the following columns:
-- customer_id [int4]
-- email [varchar]
-- payments_count [int]
-- total_amount [float]
-- only returns the 10 top customers, ordered by total amount spent


-- Time: 1454ms Passed: 9 Failed: 0
SELECT A.customer_id::int4,
       B.email::varchar,
       A.payments_count::int,
       A.total_amount::float
FROM (SELECT customer_id,
             COUNT(*)    AS payments_count,
             SUM(amount) AS total_amount
      FROM payment
      GROUP BY customer_id
      ORDER BY SUM(amount) DESC
      LIMIT 10) AS A
         LEFT JOIN customer AS B
                   ON A.customer_id = B.customer_id
ORDER BY A.total_amount DESC
