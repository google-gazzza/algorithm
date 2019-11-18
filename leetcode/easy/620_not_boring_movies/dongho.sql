--https://leetcode.com/problems/not-boring-movies/

--Runtime: 682 ms, faster than 45.09% of MS SQL Server online submissions for Not Boring Movies.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Not Boring Movies.

SELECT id, movie, description, rating 
  FROM cinema 
 WHERE description <> 'boring'
   AND id%2 = 1
  order by rating desc
