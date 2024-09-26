# 627-swap-salary
# leetcode/easy/627. Swap Salary
# URL: https://leetcode.com/problems/swap-salary/
#
# Input:
# Salary table:
# +----+------+-----+--------+
# | id | name | sex | salary |
# +----+------+-----+--------+
# | 1  | A    | m   | 2500   |
# | 2  | B    | f   | 1500   |
# | 3  | C    | m   | 5500   |
# | 4  | D    | f   | 500    |
# +----+------+-----+--------+
# Output:
# +----+------+-----+--------+
# | id | name | sex | salary |
# +----+------+-----+--------+
# | 1  | A    | f   | 2500   |
# | 2  | B    | m   | 1500   |
# | 3  | C    | f   | 5500   |
# | 4  | D    | m   | 500    |
# +----+------+-----+--------+
# Explanation:
# (1, A) and (3, C) were changed from 'm' to 'f'.
# (2, B) and (4, D) were changed from 'f' to 'm'.

UPDATE Salary
SET sex = CASE
              WHEN sex = 'f'
                  THEN 'm'
              WHEN sex = 'm'
                  THEN 'f'
    END;
