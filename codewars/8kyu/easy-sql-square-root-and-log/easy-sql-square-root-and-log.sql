-- easy-sql-square-root-and-log
-- Easy SQL: Square Root and Log
-- https://www.codewars.com/kata/594a691720ac16a544000075

SELECT sqrt(number1)::FLOAT AS root,
       log(number2)         AS log
FROM decimals;
