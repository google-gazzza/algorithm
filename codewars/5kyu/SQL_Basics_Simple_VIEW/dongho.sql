--https://www.codewars.com/kata/5811527d9d278b242f000006/train/sql
--Time: 3321ms Passed: 13 Failed: 0

CREATE VIEW members_approved_for_voucher AS
SELECT M.id, M.name, M.email, SUM(P.price) total_spending
  FROM sales AS S
      JOIN products AS P ON S.product_id = P.id
      JOIN members  AS M ON S.member_id = M.id
 WHERE S.department_id IN (SELECT S.department_id 
                             FROM sales S
                                  JOIN products P ON S.product_id = P.id
                            GROUP BY S.department_id
                           HAVING SUM(P.price) > 10000)
 GROUP BY M.id, M.name, M.email
HAVING SUM(P.price) > 1000
 ORDER BY M.id;


SELECT * FROM members_approved_for_voucher;