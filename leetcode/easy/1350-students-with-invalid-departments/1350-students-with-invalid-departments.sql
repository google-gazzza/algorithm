# 1350-students-with-invalid-departments
# leetcode/easy/1350. Students With Invalid Departments
# Difficulty: easy
# URL: https://leetcode.com/problems/students-with-invalid-departments/

SELECT id, name
FROM Students
WHERE department_id NOT IN (
    SELECT id
    FROM Departments
)
