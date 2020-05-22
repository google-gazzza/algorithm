--https://www.codewars.com/kata/5d50e3914861a500121e1958/train/sql
--Time: 1586ms Passed: 7 Failed: 0

--PostgreSQL 9.6

SELECT (CASE WHEN COUNT(1) = 0 THEN 'z'
             ELSE CHR(((sum(ascii(letter) - ascii('a') + 1) - 1) % 26 + ascii('a'))::int) END) AS letter 
  FROM letters