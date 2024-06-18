-- // 1435-create-a-session-bar-chart
-- // https://leetcode.com/problems/create-a-session-bar-chart/description/
--
--
-- Input:
-- Sessions table:
-- +-------------+---------------+
-- | session_id  | duration      |
-- +-------------+---------------+
-- | 1           | 30            |
-- | 2           | 199           |
-- | 3           | 299           |
-- | 4           | 580           |
-- | 5           | 1000          |
-- +-------------+---------------+
-- Output:
-- +--------------+--------------+
-- | bin          | total        |
-- +--------------+--------------+
-- | [0-5>        | 3            |
-- | [5-10>       | 1            |
-- | [10-15>      | 0            |
-- | 15 or more   | 1            |
-- +--------------+--------------+

-- TODO: i need to counting and gouping for duration 0-299, 300-599,600-899, 900~
-- TODO: count must be from sessions table and default value must be 0 in result


SELECT COALESCE(sub.bin, '[0-5>')     AS bin,
       COALESCE(COUNT(s.duration), 0) AS total
FROM (SELECT '[0-5>' AS bin
      UNION ALL
      SELECT '[5-10>'
      UNION ALL
      SELECT '[10-15>'
      UNION ALL
      SELECT '15 or more') sub
         LEFT JOIN sessions s ON
    CASE
        WHEN s.duration < 300 THEN '[0-5>'
        WHEN s.duration < 600 THEN '[5-10>'
        WHEN s.duration < 900 THEN '[10-15>'
        ELSE '15 or more'
        END = sub.bin
GROUP BY sub.bin
ORDER BY sub.bin;



-- SELECT CASE
--            WHEN duration < 300 THEN '[0-5>'
--            WHEN duration < 600 THEN '[5-10>'
--            WHEN duration < 900 THEN '[10-15>'
--            ELSE '15 or more~'
--            END               AS bin,
--        COALESCE(COUNT(*), 0) AS total
-- FROM sessions
-- GROUP BY bin
