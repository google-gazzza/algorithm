# leetcode/easy/2886. Change Data Type
# 2886-change-data-type
# URL: https://leetcode.com/problems/change-data-type/description/


import pandas as pd


def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    students['grade'] = students['grade'].astype(int)

    return students
