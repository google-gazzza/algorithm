-- https://leetcode.com/problems/combine-two-tables/
-- Runtime: 956 ms, faster than 53.57% of Oracle online submissions for Combine Two Tables.
-- Memory Usage: 0B, less than 100.00% of Oracle online submissions for Combine Two Tables.

/* Write your PL/SQL query statement below */

SELECT 
    PE.FirstName
    ,PE.LastName
    ,AD.City
    ,AD.State
FROM Person PE
LEFT OUTER JOIN Address AD
    ON (PE.PersonId = AD.PersonId)

;