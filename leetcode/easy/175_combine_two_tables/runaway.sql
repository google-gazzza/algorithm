-- https://leetcode.com/problems/combine-two-tables/submissions/
-- Runtime: 194 ms, faster than 99.85% of MySQL online submissions for Combine Two Tables.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Combine Two Tables.
# Write your MySQL query statement below
SELECT
    FirstName, LastName, City, State
FROM Person p
LEFT JOIN Address a ON p.PersonId = a.PersonId;