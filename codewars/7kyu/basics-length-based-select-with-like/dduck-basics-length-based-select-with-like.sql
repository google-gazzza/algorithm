-- basics-length-based-select-with-like
-- BASICS: Length based SELECT with LIKE
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5a8d94d3ba1bb569e5000198

SELECT n.first_name,
       n.last_name
FROM names AS n
WHERE n.first_name LIKE '______%';
