--https://www.codewars.com/kata/59be9f425227ddd60c00003b/train/sql
--PostgreSQL 9.6
--Time: 1317ms Passed: 7 Failed: 0

SELECT x as prime
  FROM generate_series(2, 99) AS A(x)
WHERE NOT EXISTS (
                    SELECT 1
                      FROM generate_series(2, A.x - 1) AS B(y)
                     WHERE A.x % B.y = 0
                  )
