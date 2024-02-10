-- leetcode/easy/2504. Concatenate the Name and the Profession
-- 2504-concatenate-the-name-and-the-profession
-- URL: https://leetcode.com/problems/concatenate-the-name-and-the-profession/description/

-- Input:
-- Person table:
-- +-----------+-------+------------+
-- | person_id | name  | profession |
-- +-----------+-------+------------+
-- | 1         | Alex  | Singer     |
-- | 3         | Alice | Actor      |
-- | 2         | Bob   | Player     |
-- | 4         | Messi | Doctor     |
-- | 6         | Tyson | Engineer   |
-- | 5         | Meir  | Lawyer     |
-- +-----------+-------+------------+
-- Output:
-- +-----------+----------+
-- | person_id | name     |
-- +-----------+----------+
-- | 6         | Tyson(E) |
-- | 5         | Meir(L)  |
-- | 4         | Messi(D) |
-- | 3         | Alice(A) |
-- | 2         | Bob(P)   |
-- | 1         | Alex(S)  |
-- +-----------+----------+

SELECT person_id, CONCAT(name, '(', LEFT(profession, 1), ')') AS name
FROM Person
ORDER BY person_id DESC;
