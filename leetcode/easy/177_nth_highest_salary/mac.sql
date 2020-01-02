--https://leetcode.com/problems/nth-highest-salary/
--Runtime: 948 ms, faster than 63.86% of Oracle online submissions for Nth Highest Salary.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Nth Highest Salary.
​
CREATE FUNCTION getNthHighestSalary(N IN NUMBER) RETURN NUMBER IS
result NUMBER;
BEGIN
   /* Write your PL/SQL query statement below */
   SELECT
       Salary
   INTO
       result
   FROM (
       SELECT
           Salary
           ,RANK() OVER (ORDER BY Salary DESC) RN
       FROM Employee
       GROUP BY Salary
   )
   WHERE RN = N;
   
   RETURN result;
END;