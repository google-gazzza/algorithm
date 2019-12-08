--https://www.codewars.com/kata/591127cbe8b9fb05bd00004b/train/sql
--PostgreSQL 9.6

SELECT name, author, copies_sold
  FROM books  
 ORDER BY copies_sold desc
 LIMIT 5