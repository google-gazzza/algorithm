-- https://www.codewars.com/kata/5ab7a736edbcfc8e62000007/train/sql

-- https://www.postgresql.org/docs/12/tutorial-join.html
-- https://www.w3schools.com/sql/sql_join.asp

SELECT s.senshi_name   AS sailor_senshi,
       s.real_name_jpn AS real_name,
       cats.name       AS cat,
       schools.school
FROM sailorsenshi AS s
         LEFT OUTER JOIN cats ON s.cat_id = cats.id
         LEFT OUTER JOIN schools ON s.school_id = schools.id;
