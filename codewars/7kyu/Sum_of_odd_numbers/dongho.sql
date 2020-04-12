--https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/sql
--Time: 1555ms Passed: 4 Failed: 0

--PostgreSQL 9.6
/*
the table "nums" contains an integer "n", the number
return your result in a column "res"
*/

SELECT n * n * n AS res
  FROM nums