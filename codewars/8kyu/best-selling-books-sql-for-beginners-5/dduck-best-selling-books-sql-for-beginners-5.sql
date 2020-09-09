-- best-selling-books-sql-for-beginners-5
  -- Best-Selling Books (SQL for Beginners #5)
-- difficulty: 7kyu
-- https://www.codewars.com/kata/591127cbe8b9fb05bd00004b

SELECT *
FROM books
ORDER BY books.copies_sold DESC
LIMIT 5;
