-- https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/sql
--# write your statement here: you will be given a table 'moves' with columns 'position' and 'roll'. return a table with a column 'res'. #--


SELECT position, roll, (position + roll * 2) AS res
FROM moves;
