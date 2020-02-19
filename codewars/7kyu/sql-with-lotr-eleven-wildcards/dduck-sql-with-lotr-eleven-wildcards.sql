--https://www.codewars.com/kata/5ad90fb688a0b74111000055/train/sql

SELECT initcap(firstname || ' ' || lastname) AS shortlist
FROM Elves
WHERE firstname LIKE '%tegil%'
   OR lastname LIKE '%astar%'
