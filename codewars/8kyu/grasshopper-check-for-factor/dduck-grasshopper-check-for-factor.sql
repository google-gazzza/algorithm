-- https://www.codewars.com/kata/55cbc3586671f6aa070000fb
-- you will be given a table 'kata' with columns 'id', 'base', and 'factor'.
-- return the 'id' and your result in a column named 'res'.

SELECT id,
       CASE
           WHEN MOD(base, factor) = 0
               THEN true
           ELSE false
           END as res
FROM kata
