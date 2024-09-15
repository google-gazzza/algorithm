-- leetcode/easy/1667. Fix Names in a Table
-- 1667-fix-names-in-a-table
-- https://leetcode.com/problems/fix-names-in-a-table/description/


SELECT user_id,
       CONCAT(UPPER(SUBSTRING(name FROM 1 FOR 1)), LOWER(SUBSTRING(name FROM 2))) AS name
FROM Users
ORDER BY user_id ASC;
