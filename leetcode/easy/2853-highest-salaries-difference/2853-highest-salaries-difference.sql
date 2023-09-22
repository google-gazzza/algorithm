# leetcode/easy/2853. Highest Salaries Difference
# 2853-highest-salaries-difference
# URL: https://leetcode.com/problems/highest-salaries-difference/

# Input:
# Salaries table:
# +----------+-------------+--------+
# | emp_name | department  | salary |
# +----------+-------------+--------+
# | Kathy    | Engineering | 50000  |
# | Roy      | Marketing   | 30000  |
# | Charles  | Engineering | 45000  |
# | Jack     | Engineering | 85000  |
# | Benjamin | Marketing   | 34000  |
# | Anthony  | Marketing   | 42000  |
# | Edward   | Engineering | 102000 |
# | Terry    | Engineering | 44000  |
# | Evelyn   | Marketing   | 53000  |
# | Arthur   | Engineering | 32000  |
# +----------+-------------+--------+
# Output:
# +-------------------+
# | salary_difference |
# +-------------------+
# | 49000             |
# +-------------------+
# Explanation:
# - The Engineering and Marketing departments have the highest salaries of 102,000 and 53,000, respectively. Resulting in an absolute difference of 49,000.

SELECT ABS(
                   (SELECT MAX(salary)
                    FROM Salaries
                    WHERE department IN ('Engineering'))
                   -
                   (SELECT MAX(salary)
                    FROM Salaries
                    WHERE department IN ('Marketing'))
           ) AS salary_difference

