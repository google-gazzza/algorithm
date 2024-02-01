--https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/sql
--Time: 1776ms Passed: 119 Failed: 0

--PostgreSQL 9.6
SELECT GREATEST(a*(b+c), a*b*c, a+b*c, (a+b)*c, a+b+c ) AS res 
  FROM expression_matter
