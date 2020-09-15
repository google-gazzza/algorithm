-- sql-basics-simple-join
-- algorithm-breaking/codewars/7kyu/sql-basics-simple-join
-- SQL Basics: Simple JOIN
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5802e32dd8c944e562000020
-- https://algorithm-breaking.blogspot.com/2020/09/algorithm-breakingcodewars7kyusql.html

SELECT products.*,
       companies.name AS company_name
FROM products
         LEFT JOIN companies
                   ON products.company_id = companies.id;
