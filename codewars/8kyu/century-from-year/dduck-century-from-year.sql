-- https://www.codewars.com/kata/century-from-year
-- reference - https://en.wikipedia.org/wiki/Century

select ceil(cast(yr as decimal)/100) as century
from years
