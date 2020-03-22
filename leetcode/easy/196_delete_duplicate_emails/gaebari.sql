# https://leetcode.com/problems/delete-duplicate-emails
# Runtime: 1387 ms, faster than 41.68% of MySQL online submissions for Delete Duplicate Emails.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Delete Duplicate Emails.
DELETE FROM Person
WHERE Id IN (
    SELECT Id FROM (
        SELECT P.Id as Id
        FROM Person AS P, Person AS P2
	    WHERE P.Id > P2.Id AND P.Email = P2.Email
    ) t
);