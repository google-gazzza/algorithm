-- Runtime: 566 ms, faster than 87.18% of MS SQL Server online submissions for Swap Salary.
-- Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Swap Salary.
-- Constraint condition : a single update statement and no intermediate temp table. 


UPDATE salary
   SET sex = CASE WHEN sex = 'm' then 'f' else 'm' end
  FROM salary

