-- leetcode/easy/1050. Actors and Directors Who Cooperated At Least Three Times
-- 1050-actors-and-directors-who-cooperated-at-least-three-times
-- URL: https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/description/
--
-- Input:
-- ActorDirector table:
-- +-------------+-------------+-------------+
-- | actor_id    | director_id | timestamp   |
-- +-------------+-------------+-------------+
-- | 1           | 1           | 0           |
-- | 1           | 1           | 1           |
-- | 1           | 1           | 2           |
-- | 1           | 2           | 3           |
-- | 1           | 2           | 4           |
-- | 2           | 1           | 5           |
-- | 2           | 1           | 6           |
-- +-------------+-------------+-------------+
-- Output:
-- +-------------+-------------+
-- | actor_id    | director_id |
-- +-------------+-------------+
-- | 1           | 1           |
-- +-------------+-------------+
-- Explanation: The only pair is (1, 1) where they cooperated exactly 3 times.

WITH CountTable AS (SELECT actor_id, director_id, COUNT(*) AS cnt
                    FROM ActorDirector
                    GROUP BY actor_id, director_id)

SELECT actor_id, director_id
FROM CountTable
WHERE cnt >= 3
