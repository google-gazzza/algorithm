-- sql-easy-regex-extraction
-- SQL easy regex extraction
-- https://www.codewars.com/kata/5c0ae69d5f72394e130025f6

SELECT name,
       greeting,
       unnest(regexp_matches(greeting, '#(\d+)')) AS user_id
FROM greetings;
