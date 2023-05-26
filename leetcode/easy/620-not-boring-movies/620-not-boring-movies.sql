# 620-not-boring-movies
# leetcode/easy/620. Not Boring Movies
# URL: https://leetcode.com/problems/not-boring-movies/
#
# Input:
# Cinema table:
# +----+------------+-------------+--------+
# | id | movie      | description | rating |
# +----+------------+-------------+--------+
# | 1  | War        | great 3D    | 8.9    |
# | 2  | Science    | fiction     | 8.5    |
# | 3  | irish      | boring      | 6.2    |
# | 4  | Ice song   | Fantacy     | 8.6    |
# | 5  | House card | Interesting | 9.1    |
# +----+------------+-------------+--------+
# Output:
# +----+------------+-------------+--------+
# | id | movie      | description | rating |
# +----+------------+-------------+--------+
# | 5  | House card | Interesting | 9.1    |
# | 1  | War        | great 3D    | 8.9    |
# +----+------------+-------------+--------+
# Explanation:
# We have three movies with odd-numbered IDs: 1, 3, and 5. The movie with ID = 3 is boring so we do not include it in the answer.


SELECT *
FROM Cinema
WHERE id % 2 = 1
  AND description != 'boring'
ORDER BY rating
        DESC;
