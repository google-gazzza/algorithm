# leetcode/easy/2882. Drop Duplicate Rows
# 2882-drop-duplicate-rows
# URL: https://leetcode.com/problems/drop-duplicate-rows/description/

import pandas as pd


def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.drop_duplicates(subset=['email'])
