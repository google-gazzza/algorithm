--https://leetcode.com/problems/reformat-department-table/
--Runtime: 1131 ms, faster than 49.53% of Oracle online submissions for Reformat Department Table.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Reformat Department Table.

/* Write your PL/SQL query statement below */

SELECT 
    id
    ,MAX(CASE WHEN month = 'Jan' THEN revenue ELSE NULL END) Jan_Revenue
    ,MAX(CASE WHEN month = 'Feb' THEN revenue ELSE NULL END) Feb_Revenue
    ,MAX(CASE WHEN month = 'Mar' THEN revenue ELSE NULL END) Mar_Revenue
    ,MAX(CASE WHEN month = 'Apr' THEN revenue ELSE NULL END) Apr_Revenue
    ,MAX(CASE WHEN month = 'May' THEN revenue ELSE NULL END) May_Revenue
    ,MAX(CASE WHEN month = 'Jun' THEN revenue ELSE NULL END) Jun_Revenue
    ,MAX(CASE WHEN month = 'Jul' THEN revenue ELSE NULL END) Jul_Revenue
    ,MAX(CASE WHEN month = 'Aug' THEN revenue ELSE NULL END) Aug_Revenue
    ,MAX(CASE WHEN month = 'Sep' THEN revenue ELSE NULL END) Sep_Revenue
    ,MAX(CASE WHEN month = 'Oct' THEN revenue ELSE NULL END) Oct_Revenue
    ,MAX(CASE WHEN month = 'Nov' THEN revenue ELSE NULL END) Nov_Revenue
    ,MAX(CASE WHEN month = 'Dec' THEN revenue ELSE NULL END) Dec_Revenue
FROM Department
GROUP BY id

;