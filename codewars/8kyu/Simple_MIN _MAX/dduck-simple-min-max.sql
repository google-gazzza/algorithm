-- https://www.codewars.com/kata/581113dce10b531b1d0000bd/train/sql
-- reference
-- min function http://www.postgresqltutorial.com/postgresql-min-function/
-- max function http://www.postgresqltutorial.com/postgresql-max-function/

select MIN(age) as age_min,
       MAX(age) as age_max
from people
