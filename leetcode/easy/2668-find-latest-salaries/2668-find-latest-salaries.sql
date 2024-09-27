# leetcode/easy/2668. Find Latest Salaries
# 2668-find-latest-salaries
# URL: https://leetcode.com/problems/find-latest-salaries/description/

# +--------+-----------+----------+--------+---------------+
# | emp_id | firstname | lastname | salary | department_id |
# +--------+-----------+----------+--------+---------------+
# | 1      | Todd      | Wilson   | 110000 | D1006         |
# | 1      | Todd      | Wilson   | 106119 | D1006         |
# | 2      | Justin    | Simon    | 128922 | D1005         |
# | 2      | Justin    | Simon    | 130000 | D1005         |
# | 3      | Kelly     | Rosario  | 42689  | D1002         |
# | 4      | Patricia  | Powell   | 162825 | D1004         |
# | 4      | Patricia  | Powell   | 170000 | D1004         |
# | 5      | Sherry    | Golden   | 44101  | D1002         |
# | 6      | Natasha   | Swanson  | 79632  | D1005         |
# | 6      | Natasha   | Swanson  | 90000  | D1005         |
# +--------+-----------+----------+--------+---------------+
# Output:
# +--------+-----------+----------+--------+---------------+
# | emp_id | firstname | lastname | salary | department_id |
# +--------+-----------+----------+--------+---------------+
# | 1      | Todd      | Wilson   | 110000 | D1006         |
# | 2      | Justin    | Simon    | 130000 | D1005         |
# | 3      | Kelly     | Rosario  | 42689  | D1002         |
# | 4      | Patricia  | Powell   | 170000 | D1004         |
# | 5      | Sherry    | Golden   | 44101  | D1002         |
# | 6      | Natasha   | Swanson  | 90000  | D1005         |
# +--------+-----------+----------+--------+---------------+

SELECT emp_id,
       firstname,
       lastname,
       MAX(salary) AS salary,
       department_id
FROM Salary
GROUP BY emp_id,
         firstname,
         lastname,
         department_id
ORDER BY emp_id;
