-- sql-basics-simple-table-totaling
-- SQL Basics: Simple table totaling.
-- difficulty: 6kyu
-- https://www.codewars.com/kata/5809575e166583acfa000083/

SELECT p.*,
       rank() OVER (
           ORDER BY p.total_points DESC
           ) rank
FROM (
         SELECT CASE
                    WHEN clan == '' THEN '[no clan specified]'
                    ELSE clan
                    END
                            AS clan,
                sum(points) AS total_points,
                count(name) AS total_people
         FROM people
         GROUP BY clan
     ) p;
