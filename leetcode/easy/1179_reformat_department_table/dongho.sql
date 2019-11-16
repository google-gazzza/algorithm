--https://leetcode.com/problems/reformat-department-table/

--Runtime: 1188 ms, faster than 86.27% of MS SQL Server online submissions for Reformat Department Table.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Reformat Department Table.

SELECT id, 
	   [Jan] AS Jan_Revenue, 
	   [Feb] AS Feb_Revenue, 
	   [Mar] AS Mar_Revenue, 
	   [Apr] AS Apr_Revenue, 
	   [May] AS May_Revenue, 
	   [Jun] AS Jun_Revenue, 
	   [Jul] AS Jul_Revenue, 
	   [Aug] AS Aug_Revenue, 
	   [Sep] AS Sep_Revenue, 
	   [Oct] AS Oct_Revenue, 
	   [Nov] AS Nov_Revenue, 
	   [Dec] AS Dec_Revenue
  FROM Department
 PIVOT 
 (
	MAX(Revenue)
	FOR month IN (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec) 
 ) AS MonthsRevenue