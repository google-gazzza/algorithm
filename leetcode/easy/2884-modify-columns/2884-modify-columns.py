# leetcode/easy/2884. Modify Columns
# 2884-modify-columns
# URL: https://leetcode.com/problems/modify-columns/description/


import pandas as pd


def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['salary'] = employees['salary'] * 2

    return employees
