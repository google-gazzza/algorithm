--https://leetcode.com/problems/swap-salary/
--Runtime: 752 ms, faster than 75.72% of Oracle online submissions for Swap Salary.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Swap Salary.

/* Write your PL/SQL query statement below */

UPDATE salary 
SET sex = CASE WHEN SEX= 'f' THEN 'm' ELSE 'f' END

;