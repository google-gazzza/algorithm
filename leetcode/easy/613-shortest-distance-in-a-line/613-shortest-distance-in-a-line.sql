# leetcode/easy/613. Shortest Distance in a Line
# 613-shortest-distance-in-a-line
# URL: https://leetcode.com/problems/shortest-distance-in-a-line/

# Point table:
# +----+
# | x  |
# +----+
# | -1 |
# | 0  |
# | 2  |
# +----+
# Output:
# +----------+
# | shortest |
# +----------+
# | 1        |
# +----------+
# Explanation: The shortest distance is between points -1 and 0 which is |(-1) - 0| = 1.

SELECT MIN(ABS(p1.x - p2.x)) AS shortest
FROM point p1,
     point p2
WHERE p1.x <> p2.x;
