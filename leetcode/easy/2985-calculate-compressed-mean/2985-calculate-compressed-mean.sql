-- leetcode/easy/2985. Calculate Compressed Mean
-- 2985-calculate-compressed-mean
-- URL: https://leetcode.com/problems/calculate-compressed-mean/description/

-- Input:
-- Orders table:
-- +----------+------------+-------------------+
-- | order_id | item_count | order_occurrences |
-- +----------+------------+-------------------+
-- | 10       | 1          | 500               |
-- | 11       | 2          | 1000              |
-- | 12       | 3          | 800               |
-- | 13       | 4          | 1000              |
-- +----------+------------+-------------------+
-- Output
-- +-------------------------+
-- | average_items_per_order |
-- +-------------------------+
-- | 2.70                    |
-- +-------------------------+

SELECT ROUND(SUM(item_count * order_occurrences) / SUM(order_occurrences), 2) AS average_items_per_order
FROM Orders;
