--https://leetcode.com/problems/department-top-three-salaries/
--Runtime: 584 ms, faster than 99.58% of MS SQL Server online submissions for Department Top Three Salaries.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Department Top Three Salaries.

 SELECT DN AS Department, EN AS Employee, Sa AS Salary
  FROM (
            SELECT DENSE_RANK () OVER (PARTITION BY B.Name  ORDER BY A.Salary DESC) AS DS,
                   A.Name   AS EN,
                   A.Salary AS Sa,
                   B.Name   AS DN                    
              FROM Employee AS A
                   JOIN Department AS B ON A.DepartmentId = B.ID
        ) AS rn
WHERE rn.DS <= 3
