-- // 3172-second-day-verification
-- // URL: https://leetcode.com/problems/second-day-verification/description/

-- Input:
--
-- emails table:
--
-- +----------+---------+---------------------+
-- | email_id | user_id | signup_date         |
-- +----------+---------+---------------------+
-- | 125      | 7771    | 2022-06-14 09:30:00|
-- | 433      | 1052    | 2022-07-09 08:15:00|
-- | 234      | 7005    | 2022-08-20 10:00:00|
-- +----------+---------+---------------------+
-- texts table:
--
-- +---------+----------+--------------+---------------------+
-- | text_id | email_id | signup_action| action_date         |
-- +---------+----------+--------------+---------------------+
-- | 1       | 125      | Verified     | 2022-06-15 08:30:00|
-- | 2       | 433      | Not Verified | 2022-07-10 10:45:00|
-- | 4       | 234      | Verified     | 2022-08-21 09:30:00|
-- +---------+----------+--------------+---------------------+
--
-- Output:
--
-- +---------+
-- | user_id |
-- +---------+
-- | 7005    |
-- | 7771    |
-- +---------+

SELECT e.user_id
FROM emails e
         LEFT JOIN texts t
                   ON e.email_id = t.email_id
WHERE t.signup_action = 'Verified'
  AND action_date = signup_date + INTERVAL '1 DAY'
ORDER BY e.user_id ASC;
