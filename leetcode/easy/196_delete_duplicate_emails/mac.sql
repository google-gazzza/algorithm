--https://leetcode.com/problems/delete-duplicate-emails/
--Runtime: 1715 ms, faster than 8.34% of MySQL online submissions for Delete Duplicate Emails.
--Memory Usage: 0B, less than 100.00% of MySQL online submissions for Delete Duplicate Emails.

# Write your MySQL query statement below

DELETE FROM Person 
WHERE Id NOT IN (
    SELECT 
        MIN(Ps.Id) 
    FROM (
        SELECT 
            Id, Email
        FROM Person
    ) Ps
    GROUP BY Ps.Email
)

;