# 2339-all-the-matches-of-the-league
# leetcode/easy/2339. All the Matches of the League
# URL: https://leetcode.com/problems/all-the-matches-of-the-league/description/

SELECT t1.team_name AS home_team, t2.team_name AS away_team
FROM Teams AS t1
         JOIN Teams AS t2 ON t1.team_name != t2.team_name;
