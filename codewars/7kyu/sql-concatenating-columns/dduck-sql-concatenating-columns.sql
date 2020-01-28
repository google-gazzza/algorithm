-- https://www.codewars.com/kata/59440034e94fae05b2000073/train/sql
-- https://www.w3schools.com/sql/func_sqlserver_concat.aspI
-- https://www.postgresql.org/docs/12/functions-string.html

SELECT concat_ws(' ', prefix, first, last, suffix) as title
FROM names
