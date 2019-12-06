--https://www.codewars.com/kata/sql-basics-simple-join/train/sql
--SQLite 3.2.8

SELECT A.*, B.name AS company_name
  FROM products AS A
       JOIN companies AS B ON A.company_id = B.id