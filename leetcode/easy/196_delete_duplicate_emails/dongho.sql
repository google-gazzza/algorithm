--https://leetcode.com/problems/delete-duplicate-emails/submissions/

--Runtime: 1060 ms, faster than 17.84% of MySQL online submissions for Delete Duplicate Emails.
--Memory Usage: 0B, less than 100.00% of MySQL online submissions for Delete Duplicate Emails.


DELETE 
  FROM Person 
 WHERE id NOT IN (
                  SELECT id
                    FROM (
                          SELECT MIN(id) AS ID
                            FROM Person
                           GROUP By email
                         ) 
                      AS p
                 )