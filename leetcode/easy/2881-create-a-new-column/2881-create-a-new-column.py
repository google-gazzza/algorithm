# leetcode/easy/2881. Create a New Column
# 2881-create-a-new-column
# URL: https://leetcode.com/problems/create-a-new-column/description/


import pandas as pd


def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['bonus'] = employees['salary'] * 2

    return employees
