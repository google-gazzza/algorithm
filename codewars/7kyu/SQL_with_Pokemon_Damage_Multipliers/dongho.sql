--https://www.codewars.com/kata/5ab828bcedbcfc65ea000099/train/sql
--Time: 2129ms Passed: 8 Failed: 0

--PostgreSQL 9.6


SELECT A.pokemon_name, 
       A.str * B.multiplier AS modifiedStrength, 
       B.element
  FROM pokemon AS A 
       JOIN multipliers AS B ON A.element_id = B.id
 WHERE A.str * B.multiplier >= 40
 ORDER BY 2 DESC