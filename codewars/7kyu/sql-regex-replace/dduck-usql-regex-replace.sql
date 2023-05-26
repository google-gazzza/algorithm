-- sql-regex-replace
-- SQL: Regex Replace
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5942b066db68b6f35f000084

SELECT project,
       commits,
       contributors,
       regexp_replace(address, '[0-9]', '!', 'g') AS address
FROM repositories;
