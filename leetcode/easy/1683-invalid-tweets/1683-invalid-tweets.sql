# 1683-invalid-tweets
# leetcode/easy/1683. Invalid Tweets
# Difficulty: easy
# URL: https://leetcode.com/problems/invalid-tweets/submissions/

# Input:
# Tweets table:
# +----------+----------------------------------+
# | tweet_id | content                          |
# +----------+----------------------------------+
# | 1        | Vote for Biden                   |
# | 2        | Let us make America great again! |
# +----------+----------------------------------+
# Output:
# +----------+
# | tweet_id |
# +----------+
# | 2        |
# +----------+
# Explanation:
# Tweet 1 has length = 14. It is a valid tweet.
# Tweet 2 has length = 32. It is an invalid tweet.

# Write your MySQL query statement below


SELECT tweet_id
FROM tweets
WHERE CHAR_LENGTH(content) > 15;
