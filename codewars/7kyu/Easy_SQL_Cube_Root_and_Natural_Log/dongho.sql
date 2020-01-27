--https://www.codewars.com/kata/594a6ad320ac16a54400007f/train/sql
--Time: 1392ms Passed: 11 Failed: 0

--PostgreSQL 9.6
-- cbrt : 세제곱 근, ln : 자연로그

SELECT CBRT(number1) AS cuberoot,
       LN(number2)   AS logarithm
  FROM decimals 
