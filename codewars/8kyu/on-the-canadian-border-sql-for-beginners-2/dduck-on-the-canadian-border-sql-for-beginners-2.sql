-- https://www.codewars.com/kata/590ba881fe13cfdcc20001b4/train/sql
-- IN operators https://www.w3schools.com/sql/sql_in.asp

SELECT name, country
FROM travelers
WHERE country NOT IN ('Canada', 'Mexico', 'USA');

