--https://leetcode.com/problems/duplicate-emails/
--Runtime: 812 ms, faster than 75.53% of Oracle online submissions for Duplicate Emails.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Duplicate Emails.

/* Write your PL/SQL query statement below */
​
SELECT Email
FROM Person
GROUP BY Email
HAVING Count(*) > 1
​
;