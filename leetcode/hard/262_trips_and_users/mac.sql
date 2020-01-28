--https://leetcode.com/problems/trips-and-users/
--Runtime: 938 ms, faster than 96.47% of Oracle online submissions for Trips and Users.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Trips and Users.

/* Write your PL/SQL query statement below */

SELECT
    T.Request_at Day
    ,ROUND(SUM(CASE WHEN T.Status != 'completed' THEN 1 ELSE 0 END) /COUNT(1), 2) "Cancellation Rate"
FROM Trips T
LEFT OUTER JOIN Users U
ON (T.Client_Id = U.Users_Id)
WHERE T.Request_at BETWEEN '2013-10-01' AND '2013-10-03'
AND U.Banned = 'No'
GROUP BY T.Request_at
ORDER BY T.Request_at

;