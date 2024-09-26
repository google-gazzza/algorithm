-- sql-basics-create-a-function
-- SQL Basics: Create a FUNCTION
-- difficulty: 7kyu
-- https://www.codewars.com/kata/580fe518cefeff16d00000c0/

CREATE OR REPLACE FUNCTION inrement(input integer) RETURNS integer AS
$$
SELECT input + 1
$$ LANGUAGE SQL;
