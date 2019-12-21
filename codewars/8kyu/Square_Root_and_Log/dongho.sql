--https://www.codewars.com/kata/594a691720ac16a544000075/train/sql
--PostgreSQL 9.6
--Time: 1604ms Passed: 11 Failed: 0

-- |n : 제곱근, log() : 10로그. ln() : 로그
SELECT |/number1 AS ROOT, 
       log(number2) AS LOG
  FROM decimals
