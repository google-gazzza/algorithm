--https://www.codewars.com/kata/59440034e94fae05b2000073/train/sql
--PostgreSQL 9.6
SELECT prefix || ' ' || first || ' ' || last || ' ' || suffix AS title
  FROM names

-- sql server(1)
SELECT prefix + ' ' + first + ' ' + last + ' ' + suffix AS title
  FROM names

-- sql server(2)
SELECT prefix + space(1) + first + space(1) + last + space(1) + suffix AS title
  FROM names

