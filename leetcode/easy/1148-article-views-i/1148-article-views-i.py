# leetcode/easy/1148. Article Views I
# 1148-article-views-i
# URL: https://leetcode.com/problems/article-views-i/description/

# Input:
# Views table:
# +------------+-----------+-----------+------------+
# | article_id | author_id | viewer_id | view_date  |
# +------------+-----------+-----------+------------+
# | 1          | 3         | 5         | 2019-08-01 |
# | 1          | 3         | 6         | 2019-08-02 |
# | 2          | 7         | 7         | 2019-08-01 |
# | 2          | 7         | 6         | 2019-08-02 |
# | 4          | 7         | 1         | 2019-07-22 |
# | 3          | 4         | 4         | 2019-07-21 |
# | 3          | 4         | 4         | 2019-07-21 |
# +------------+-----------+-----------+------------+
# Output:
# +------+
# | id   |
# +------+
# | 4    |
# | 7    |
# +------+

SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id

