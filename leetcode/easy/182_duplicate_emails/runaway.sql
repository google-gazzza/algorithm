# https://leetcode.com/problems/duplicate-emails/submissions/
# Runtime: 218 ms, faster than 80.86% of MySQL online submissions for Duplicate Emails.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Duplicate Emails.

# Write your MySQL query statement below
SELECT Email FROM Person
GROUP BY Email
HAVING COUNT(*) > 1;