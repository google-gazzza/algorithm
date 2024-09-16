# leetcode/easy/2880. Select Data
# 2880-select-data
# URL: https://leetcode.com/problems/select-data/description/

import pandas as pd


def selectData(students: pd.DataFrame) -> pd.DataFrame:
    df = students[students['student_id'] == 101]
    df.drop(['student_id'], axis=1, inplace=True)

    return df
