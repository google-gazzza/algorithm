-- countries-capitals-for-trivia-night-sql-for-beginners-6
-- Countries Capitals for Trivia Night (SQL for Beginners #6)
-- https://www.codewars.com/kata/5e5f09dc0a17be0023920f6f/solutions/sql

SELECT capital
FROM countries
WHERE continent LIKE 'Afri_a'
  AND country LIKE 'E%'
ORDER BY capital ASC
LIMIT 3;
