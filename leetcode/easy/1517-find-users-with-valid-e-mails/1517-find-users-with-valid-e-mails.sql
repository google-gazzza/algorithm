-- // 1517-find-users-with-valid-e-mails
-- // https://leetcode.com/problems/find-users-with-valid-e-mails/description/
--
--
-- Input:
-- Users table:
-- +---------+-----------+-------------------------+
-- | user_id | name      | mail                    |
-- +---------+-----------+-------------------------+
-- | 1       | Winston   | winston@leetcode.com    |
-- | 2       | Jonathan  | jonathanisgreat         |
-- | 3       | Annabelle | bella-@leetcode.com     |
-- | 4       | Sally     | sally.come@leetcode.com |
-- | 5       | Marwan    | quarz#2020@leetcode.com |
-- | 6       | David     | david69@gmail.com       |
-- | 7       | Shapiro   | .shapo@leetcode.com     |
-- +---------+-----------+-------------------------+
-- Output:
-- +---------+-----------+-------------------------+
-- | user_id | name      | mail                    |
-- +---------+-----------+-------------------------+
-- | 1       | Winston   | winston@leetcode.com    |
-- | 3       | Annabelle | bella-@leetcode.com     |
-- | 4       | Sally     | sally.come@leetcode.com |
-- +---------+-----------+-------------------------+
-- The prefix name is a string that may contain letters (upper or lower case), digits, underscore '_', period '.', and/or dash '-'. The prefix name must start with a letter.
-- The domain is '@leetcode.com'.

SELECT *
FROM Users
WHERE mail ~ '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode\.com$';

