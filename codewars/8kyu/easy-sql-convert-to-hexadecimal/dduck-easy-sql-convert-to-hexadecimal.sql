-- easy-sql-convert-to-hexadecimal
-- Easy SQL: Convert to Hexadecimal
-- https://www.codewars.com/kata/594a50bafd3b7031c1000013

SELECT to_hex(legs) as legs,
       to_hex(arms) as arms
FROM monsters;
