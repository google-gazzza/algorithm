-- SQL: Regex String to Table
-- https://www.codewars.com/kata/59413d53f5c3947364000016/train/sql


SELECT regexp_split_to_table(text, 'a|e|i|o|u') AS results
FROM random_string;
