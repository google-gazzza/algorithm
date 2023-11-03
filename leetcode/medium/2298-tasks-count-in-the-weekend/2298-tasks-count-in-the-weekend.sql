# leetcode/medium/2298. Tasks Count in the Weekend
# 2298-tasks-count-in-the-weekend
# URL: https://leetcode.com/problems/tasks-count-in-the-weekend/description/


# Input:
# Tasks table:
# +---------+-------------+-------------+
# | task_id | assignee_id | submit_date |
# +---------+-------------+-------------+
# | 1       | 1           | 2022-06-13  |
# | 2       | 6           | 2022-06-14  |
# | 3       | 6           | 2022-06-15  |
# | 4       | 3           | 2022-06-18  |
# | 5       | 5           | 2022-06-19  |
# | 6       | 7           | 2022-06-19  |
# +---------+-------------+-------------+
# Output:
# +-------------+-------------+
# | weekend_cnt | working_cnt |
# +-------------+-------------+
# | 3           | 3           |
# +-------------+-------------+
# Explanation:
# Task 1 was submitted on Monday.
# Task 2 was submitted on Tuesday.
# Task 3 was submitted on Wednesday.
# Task 4 was submitted on Saturday.
# Task 5 was submitted on Sunday.
# Task 6 was submitted on Sunday.
# 3 tasks were submitted during the weekend.
# 3 tasks were submitted during the working days.

SELECT
  SUM(CASE WHEN DAYOFWEEK(submit_date) IN (1, 7) THEN 1 ELSE 0 END) AS weekend_cnt,
  SUM(CASE WHEN DAYOFWEEK(submit_date) BETWEEN 2 AND 6 THEN 1 ELSE 0 END) AS working_cnt
FROM
    Tasks;
