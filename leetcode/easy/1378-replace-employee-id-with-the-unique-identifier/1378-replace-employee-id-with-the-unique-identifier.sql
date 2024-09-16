# 1378-replace-employee-id-with-the-unique-identifier
# leetcode/easy/1378. Replace Employee ID With The Unique Identifier
# Difficulty: easy
# URL: https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/

# Input:
# Employees table:
# +----+----------+
# | id | name     |
# +----+----------+
# | 1  | Alice    |
# | 7  | Bob      |
# | 11 | Meir     |
# | 90 | Winston  |
# | 3  | Jonathan |
# +----+----------+
# EmployeeUNI table:
# +----+-----------+
# | id | unique_id |
# +----+-----------+
# | 3  | 1         |
# | 11 | 2         |
# | 90 | 3         |
# +----+-----------+
# Output:
# +-----------+----------+
# | unique_id | name     |
# +-----------+----------+
# | null      | Alice    |
# | null      | Bob      |
# | 2         | Meir     |
# | 3         | Winston  |
# | 1         | Jonathan |
# +-----------+----------+
# Explanation:
# Alice and Bob do not have a unique ID, We will show null instead.
# The unique ID of Meir is 2.
# The unique ID of Winston is 3.
# The unique ID of Jonathan is 1.

# Write your MySQL query statement below

SELECT eu.unique_id, e.name
FROM Employees AS e
         LEFT JOIN EmployeeUNI AS eu
                   on e.id = eu.id
