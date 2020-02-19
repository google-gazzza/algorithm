--https://www.codewars.com/kata/594900e16fd782a607000059/train/sql
-- bit_length https://www.postgresql.org/docs/12/functions-string.html

SELECT id,
       bit_length(name) as name,
       birthday,
       bit_length(race) as race
FROM demographics
