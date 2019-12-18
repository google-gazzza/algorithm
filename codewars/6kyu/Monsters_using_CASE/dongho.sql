--https://www.codewars.com/kata/593ef0e98b90525e090000b9/train/sql
--PostgreSQL 9.6
--Time: 2197ms Passed: 26 Failed: 0

/*  SQL  */
SELECT A.id, A.heads, B.legs, A.arms, B.tails,
       CASE WHEN A.heads > A.arms OR B.tails > B.legs THEN 'BEAST'
            ELSE 'WEIRDO' END AS species 
  FROM top_half AS A 
       JOIN bottom_half AS B ON A.id = B.id
 ORDER BY species