--https://www.codewars.com/kata/58941fec8afa3618c9000184/train/sql
--Time: 1625ms Passed: 6 Failed: 0

SELECT id,
       CASE WHEN up_Speed >= desired_Height THEN 1
            ELSE ceil((desired_Height - up_Speed)::numeric/(up_Speed - down_Speed))::int +1
            END AS num_days 
FROM growing_plant
