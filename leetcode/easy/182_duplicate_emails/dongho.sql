--https://leetcode.com/problems/duplicate-emails/
--Runtime: 680 ms, faster than 92.15% of MS SQL Server online submissions for Duplicate Emails.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Duplicate Emails.

SELECT Email
  FROM Person
 GROUP BY Email
HAVING COUNT(Email) > 1