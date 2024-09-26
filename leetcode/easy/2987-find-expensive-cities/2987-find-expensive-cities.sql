-- leetcode/easy/2987. Find Expensive Cities
-- 2987-find-expensive-cities
-- URL: https://leetcode.com/problems/find-expensive-cities/description/

-- Input:
-- Listings table:
-- +------------+--------------+---------+
-- | listing_id | city         | price   |
-- +------------+--------------+---------+
-- | 113        | LosAngeles   | 7560386 |
-- | 136        | SanFrancisco | 2380268 |
-- | 92         | Chicago      | 9833209 |
-- | 60         | Chicago      | 5147582 |
-- | 8          | Chicago      | 5274441 |
-- | 79         | SanFrancisco | 8372065 |
-- | 37         | Chicago      | 7939595 |
-- | 53         | LosAngeles   | 4965123 |
-- | 178        | SanFrancisco | 999207  |
-- | 51         | NewYork      | 5951718 |
-- | 121        | NewYork      | 2893760 |
-- +------------+--------------+---------+
-- Output
-- +------------+
-- | city       |
-- +------------+
-- | Chicago    |
-- | LosAngeles |
-- +------------+

WITH average AS (SELECT city,
                        AVG(price) AS avg_price
                 FROM Listings
                 GROUP BY city)

SELECT city
FROM average
WHERE average.avg_price > (SELECT AVG(price) FROM Listings)
ORDER BY city ASC;
