--https://www.codewars.com/kata/5982020284a83baf2f00001c/train/sql
--PostgreSQL 9.6
--Time: 3069ms Passed: 14 Failed: 0

/*  SQL  */
SELECT A.name,
       (SELECT count(1) FROM details WHERE A.id = product_id AND detail = 'good') AS good,
       (SELECT count(1) FROM details WHERE A.id = product_id AND detail = 'ok'  ) AS ok,
       (SELECT count(1) FROM details WHERE A.id = product_id AND detail = 'bad' ) AS bad
  FROM products AS A
 ORDER BY A.name