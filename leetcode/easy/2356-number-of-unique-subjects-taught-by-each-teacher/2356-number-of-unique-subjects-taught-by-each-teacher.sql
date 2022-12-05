# 2356-number-of-unique-subjects-taught-by-each-teacher
# leetcode/easy/2356. Number of Unique Subjects Taught by Each Teacher
# URL: https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/
#
# +-------------+------+
# | Column Name | Type |
# +-------------+------+
# | teacher_id  | int  |
# | subject_id  | int  |
# | dept_id     | int  |
# +-------------+------+
# (subject_id, dept_id) is the primary key for this table.
# Each row in this table indicates that the teacher with teacher_id teaches the subject subject_id in the department dept_id.

SELECT teacher_id,
       count(DISTINCT subject_id) AS cnt
FROM Teacher
GROUP BY teacher_id
