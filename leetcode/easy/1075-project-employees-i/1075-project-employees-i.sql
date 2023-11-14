# leetcode/easy/1075. Project Employees I
# 1075-project-employees-i
# URL: https://leetcode.com/problems/project-employees-i/description/

# Input:
# Project table:
# +-------------+-------------+
# | project_id  | employee_id |
# +-------------+-------------+
# | 1           | 1           |
# | 1           | 2           |
# | 1           | 3           |
# | 2           | 1           |
# | 2           | 4           |
# +-------------+-------------+
# Employee table:
# +-------------+--------+------------------+
# | employee_id | name   | experience_years |
# +-------------+--------+------------------+
# | 1           | Khaled | 3                |
# | 2           | Ali    | 2                |
# | 3           | John   | 1                |
# | 4           | Doe    | 2                |
# +-------------+--------+------------------+
# Output:
# +-------------+---------------+
# | project_id  | average_years |
# +-------------+---------------+
# | 1           | 2.00          |
# | 2           | 2.50          |
# +-------------+---------------+

SELECT project_id,
       ROUND(AVG(experience_years), 2) AS average_years
FROM Project p
         LEFT JOIN Employee e ON p.employee_id = e.employee_id
GROUP BY project_id
