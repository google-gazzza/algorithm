-- leetcode/easy/1241. Number of Comments per Post
-- 1241-number-of-comments-per-post
-- https://leetcode.com/problems/number-of-comments-per-post/

# Input:
# Submissions table:
# +---------+------------+
# | sub_id  | parent_id  |
# +---------+------------+
# | 1       | Null       |
# | 2       | Null       |
# | 1       | Null       |
# | 12      | Null       |
# | 3       | 1          |
# | 5       | 2          |
# | 3       | 1          |
# | 4       | 1          |
# | 9       | 1          |
# | 10      | 2          |
# | 6       | 7          |
# +---------+------------+
# Output:
# +---------+--------------------+
# | post_id | number_of_comments |
# +---------+--------------------+
# | 1       | 3                  |
# | 2       | 2                  |
# | 12      | 0                  |
# +---------+--------------------+

WITH comments AS (SELECT *
                  FROM Submissions
                  WHERE parent_id IS NOT NULL
                  GROUP BY sub_id, parent_id),
     post AS (SELECT sub_id AS post_id
              FROM Submissions
              WHERE parent_id IS NULL
              GROUP BY sub_id),
     comments_counts AS (SELECT parent_id AS post_id,
                                COUNT(*)  AS number_of_comments
                         FROM comments
                         GROUP BY parent_id)

SELECT post_id,
       COALESCE(number_of_comments, 0) AS number_of_comments
FROM post
         LEFT JOIN comments_counts USING (post_id)
ORDER BY post_id;


