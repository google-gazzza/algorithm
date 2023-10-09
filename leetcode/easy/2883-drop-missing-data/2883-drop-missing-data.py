# leetcode/easy/2883. Drop Missing Data
# 2883-drop-missing-data
# URL: https://leetcode.com/problems/drop-missing-data/description/


import pandas as pd


def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    students = students.dropna(subset=['name'])

    return students
