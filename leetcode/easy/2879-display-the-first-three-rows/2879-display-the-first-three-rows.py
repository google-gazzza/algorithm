# leetcode/easy/2879. Display the First Three Rows
# 2879-display-the-first-three-rows
# URL: https://leetcode.com/problems/display-the-first-three-rows/description/


import pandas as pd


def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.head(3)
