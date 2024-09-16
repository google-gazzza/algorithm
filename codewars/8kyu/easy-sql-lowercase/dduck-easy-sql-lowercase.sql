-- easy-sql-lowercase
-- Easy SQL: LowerCase
-- https://www.codewars.com/kata/594800ba6fb152624300006d/

SELECT id, name, birthday, lower(race) as race
FROM demographics;
