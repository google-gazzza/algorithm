--https://www.codewars.com/kata/582365c18917435ab3000020/train/sql
--Time: 1517ms Passed: 6 Failed: 0

-- 1. custard를 제외한 모든컬럼 출력
--PostgreSQL 9.6
SELECT custid, custname, custstate
  FROM customers
