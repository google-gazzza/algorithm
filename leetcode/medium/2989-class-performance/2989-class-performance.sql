-- // 2989-class-performance
-- // URL: https://leetcode.com/problems/class-performance/description/

-- Input:
-- Scores table:
-- +------------+--------------+-------------+-------------+-------------+
-- | student_id | student_name | assignment1 | assignment2 | assignment3 |
-- +------------+--------------+-------------+-------------+-------------+
-- | 309        | Owen         | 88          | 47          | 87          |
-- | 321        | Claire       | 98          | 95          | 37          |
-- | 338        | Julian       | 100         | 64          | 43          |
-- | 423        | Peyton       | 60          | 44          | 47          |
-- | 896        | David        | 32          | 37          | 50          |
-- | 235        | Camila       | 31          | 53          | 69          |
-- +------------+--------------+-------------+-------------+-------------+
-- Output
-- +---------------------+
-- | difference_in_score |
-- +---------------------+
-- | 111                 |
-- +---------------------+

SELECT MAX(row_sum) - MIN(row_sum) AS difference_in_score
FROM (SELECT SUM(assignment1 + assignment2 + assignment3) AS row_sum
      FROM Scores
      GROUP BY student_id) AS subquery;
