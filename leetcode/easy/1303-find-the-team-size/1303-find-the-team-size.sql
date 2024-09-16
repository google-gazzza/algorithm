# 1303-find-the-team-size
# leetcode/easy/1303. Find the Team Size
# Difficulty: easy
# URL: https://leetcode.com/problems/find-the-team-size/
#
#
# Example 1:
#
# Input:
# Employee Table:
# +-------------+------------+
# | employee_id | team_id    |
# +-------------+------------+
# |     1       |     8      |
# |     2       |     8      |
# |     3       |     8      |
# |     4       |     7      |
# |     5       |     9      |
# |     6       |     9      |
# +-------------+------------+
# Output:
# +-------------+------------+
# | employee_id | team_size  |
# +-------------+------------+
# |     1       |     3      |
# |     2       |     3      |
# |     3       |     3      |
# |     4       |     1      |
# |     5       |     2      |
# |     6       |     2      |
# +-------------+------------+
# Explanation:
# Employees with Id 1,2,3 are part of a team with team_id = 8.
# Employee with Id 4 is part of a team with team_id = 7.
# Employees with Id 5,6 are part of a team with team_id = 9.

SELECT e.employee_id,
       (SELECT Count(*) FROM Employee AS e2 WHERE e2.team_id = e.team_id) AS team_size
FROM Employee AS e

