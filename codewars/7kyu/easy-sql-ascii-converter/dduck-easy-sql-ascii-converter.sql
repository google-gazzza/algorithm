-- easy-sql-ascii-converter
-- Easy SQL: ASCII Converter
-- difficulty: 7kyu
-- https://www.codewars.com/kata/594804a218e96caa8d00051b/

SELECT id,
       ascii(left(name, 1)) AS name,
       birthday,
       ascii(left(race, 1)) AS race
FROM demographics;
