-- 3150-invalid-tweets-ii
-- URL: https://leetcode.com/problems/invalid-tweets-ii/description/
--
-- Input:
--
-- Tweets table:
--
--   +----------+-----------------------------------------------------------------------------------+
--   | tweet_id | content                                                                           |
--   +----------+-----------------------------------------------------------------------------------+
--   | 1        | Traveling, exploring, and living my best life @JaneSmith @SaraJohnson @LisaTaylor |
--   |          | @MikeBrown #Foodie #Fitness #Learning                                             |
--   | 2        | Just had the best dinner with friends! #Foodie #Friends #Fun                      |
--   | 4        | Working hard on my new project #Work #Goals #Productivity #Fun                    |
--   +----------+-----------------------------------------------------------------------------------+
--
-- Output:
--
--   +----------+
--   | tweet_id |
--   +----------+
--   | 1        |
--   | 4        |
--   +----------+


SELECT tweet_id
FROM Tweets
WHERE (LENGTH(content) - LENGTH(REPLACE(content, '#', ''))) / LENGTH('#') > 3
   OR (LENGTH(content) - LENGTH(REPLACE(content, '@', ''))) / LENGTH('@') > 3;
