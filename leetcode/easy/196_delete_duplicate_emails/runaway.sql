# https://leetcode.com/problems/delete-duplicate-emails/submissions/
# Runtime: 946 ms, faster than 72.95% of MySQL online submissions for Delete Duplicate Emails.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Delete Duplicate Emails.

# Write your MySQL query statement below
DELETE p1 FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND p1.Id > p2.Id;