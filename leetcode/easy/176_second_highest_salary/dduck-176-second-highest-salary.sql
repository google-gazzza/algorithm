/*
176-second-highest-salary

# leetcode/easy/176. Second Highest Salary
Difficulty: easy
URL: https://leetcode.com/problems/second-highest-salary/
Tags:

## Approach

### en

### kr

## Solution
### SQL

*/

SELECT IFNULL(
               (SELECT Employee.Salary
                FROM Employee
                GROUP BY Employee.Salary
                ORDER BY Employee.Salary DESC
                LIMIT 1 OFFSET 1
               ),
               NULL)
           AS SecondHighestSalary
