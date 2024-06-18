-- // 1809-ad-free-sessions
-- // URL: https://leetcode.com/problems/ad-free-sessions/description/
--
--
-- Input:
-- Playback table:
-- +------------+-------------+------------+----------+
-- | session_id | customer_id | start_time | end_time |
-- +------------+-------------+------------+----------+
-- | 1          | 1           | 1          | 5        |
-- | 2          | 1           | 15         | 23       |
-- | 3          | 2           | 10         | 12       |
-- | 4          | 2           | 17         | 28       |
-- | 5          | 2           | 2          | 8        |
-- +------------+-------------+------------+----------+
-- Ads table:
-- +-------+-------------+-----------+
-- | ad_id | customer_id | timestamp |
-- +-------+-------------+-----------+
-- | 1     | 1           | 5         |
-- | 2     | 2           | 17        |
-- | 3     | 2           | 20        |
-- +-------+-------------+-----------+
-- Output:
-- +------------+
-- | session_id |
-- +------------+
-- | 2          |
-- | 3          |
-- | 5          |
-- +------------+

-- TODO: select session_id form Playback table that start_time and end_time not exist on Ads table's timestamp

SELECT DISTINCT p.session_id
FROM Playback p
         LEFT JOIN Ads a ON p.customer_id = a.customer_id
    AND a.timestamp BETWEEN p.start_time AND p.end_time
WHERE a.timestamp IS NULL;
