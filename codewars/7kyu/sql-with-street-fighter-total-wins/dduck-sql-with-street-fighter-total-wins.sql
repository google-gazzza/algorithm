-- sql-with-street-fighter-total-wins
-- SQL with Street Fighter: Total Wins
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5ac698cdd325ad18a3000170


SELECT f.name,
       sum(f.won)  AS won,
       sum(f.lost) AS lost
FROM fighters as f
         LEFT JOIN winning_moves
                   ON f.move_id = winning_moves.id
WHERE winning_moves.move NOT IN ('Hadoken', 'Shouoken', 'Kikoken')
GROUP BY f.name
ORDER BY won DESC
LIMIT 6;
