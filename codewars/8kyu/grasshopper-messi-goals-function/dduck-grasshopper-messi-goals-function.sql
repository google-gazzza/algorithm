-- https://www.codewars.com/kata/55f73be6e12baaa5900000d4

SELECT (la_liga_goals::integer +
        copa_del_rey_goals::integer +
        champions_league_goals::integer
           ) AS res
FROM goals
