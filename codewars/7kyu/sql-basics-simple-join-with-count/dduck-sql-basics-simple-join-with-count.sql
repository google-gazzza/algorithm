-- sql-basics-simple-join-with-count
-- SQL Basics: Simple JOIN with COUNT
-- codewars.com/kata/580918e24a85b05ad000010c

SELECT people.*,
       count(toys.id) AS toy_count
FROM people
         LEFT JOIN toys
                   ON people.id = toys.people_id
GROUP BY people.id;
