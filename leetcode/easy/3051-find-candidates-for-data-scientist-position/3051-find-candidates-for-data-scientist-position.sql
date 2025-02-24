-- // 3051-find-candidates-for-data-scientist-position
-- // URL: https://leetcode.com/problems/find-candidates-for-data-scientist-position/description/

SELECT candidate_id
FROM Candidates
WHERE skill IN ('Python', 'Tableau', 'PostgreSQL')
GROUP BY candidate_id
HAVING COUNT(DISTINCT skill) = 3
ORDER BY candidate_id ASC

