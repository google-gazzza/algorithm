--https://leetcode.com/problems/nth-highest-salary/
--Runtime: 761 ms, faster than 54.32% of MS SQL Server online submissions for Nth Highest Salary.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Nth Highest Salary.

CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (SELECT TOP 1 rn.Salary 
              FROM (SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank, Salary 
                      FROM Employee) AS rn 
             WHERE rn.Rank = @n
        /* Write your T-SQL query statement below. */
        
    );
END
