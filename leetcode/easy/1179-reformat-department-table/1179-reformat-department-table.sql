# leetcode/easy/1179. Reformat Department Table
# 1179-reformat-department-table
# URL: https://leetcode.com/problems/reformat-department-table/

# Input:
# Department table:
# +------+---------+-------+
# | id   | revenue | month |
# +------+---------+-------+
# | 1    | 8000    | Jan   |
# | 2    | 9000    | Jan   |
# | 3    | 10000   | Feb   |
# | 1    | 7000    | Feb   |
# | 1    | 6000    | Mar   |
# +------+---------+-------+
# Output:
# +------+-------------+-------------+-------------+-----+-------------+
# | id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
# +------+-------------+-------------+-------------+-----+-------------+
# | 1    | 8000        | 7000        | 6000        | ... | null        |
# | 2    | 9000        | null        | null        | ... | null        |
# | 3    | null        | 10000       | null        | ... | null        |
# +------+-------------+-------------+-------------+-----+-------------+
# Explanation: The revenue from Apr to Dec is null.
# Note that the result table has 13 columns (1 for the department id + 12 for the months).

SELECT id,
       SUM(CASE WHEN month = 'Jan' THEN revenue ELSE NULL END) AS Jan_Revenue,
       SUM(CASE WHEN month = 'Feb' THEN revenue ELSE NULL END) AS Feb_Revenue,
       SUM(CASE WHEN month = 'Mar' THEN revenue ELSE NULL END) AS Mar_Revenue,
       SUM(CASE WHEN month = 'Apr' THEN revenue ELSE NULL END) AS Apr_Revenue,
       SUM(CASE WHEN month = 'May' THEN revenue ELSE NULL END) AS May_Revenue,
       SUM(CASE WHEN month = 'Jun' THEN revenue ELSE NULL END) AS Jun_Revenue,
       SUM(CASE WHEN month = 'Jul' THEN revenue ELSE NULL END) AS Jul_Revenue,
       SUM(CASE WHEN month = 'Aug' THEN revenue ELSE NULL END) AS Aug_Revenue,
       SUM(CASE WHEN month = 'Sep' THEN revenue ELSE NULL END) AS Sep_Revenue,
       SUM(CASE WHEN month = 'Oct' THEN revenue ELSE NULL END) AS Oct_Revenue,
       SUM(CASE WHEN month = 'Nov' THEN revenue ELSE NULL END) AS Nov_Revenue,
       SUM(CASE WHEN month = 'Dec' THEN revenue ELSE NULL END) AS Dec_Revenue
FROM Department
GROUP BY id
ORDER BY id;
