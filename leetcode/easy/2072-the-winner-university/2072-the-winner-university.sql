# 2072-the-winner-university
# leetcode/easy/2072. The Winner University
# URL: https://leetcode.com/problems/the-winner-university/
#
# NewYork table:
# +------------+-------+
# | student_id | score |
# +------------+-------+
# | 1          | 90    |
# | 2          | 87    |
# +------------+-------+
# California table:
# +------------+-------+
# | student_id | score |
# +------------+-------+
# | 2          | 89    |
# | 3          | 88    |
# +------------+-------+
# Output:
# +---------------------+
# | winner              |
# +---------------------+
# | New York University |
# +---------------------+


SELECT CASE
           WHEN NY.cnt > CA.cnt THEN 'New York University'
           WHEN NY.cnt < CA.cnt THEN 'California University'
           ELSE 'No Winner'
           END AS winner
FROM (SELECT count(*) AS cnt FROM NewYork WHERE score >= 90) AS NY,
     (SELECT count(*) AS cnt FROM California WHERE score >= 90) AS CA
