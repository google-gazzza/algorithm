-- https://leetcode.com/problems/combine-two-tables
-- Runtime: 683 ms, faster than 19.95% of MySQL online submissions for Combine Two Tables.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Combine Two Tables.
# Write your MySQL query statement below
SELECT FirstName, LastName, City, State FROM Person p left join Address a on a.PersonId = p.PersonId;
