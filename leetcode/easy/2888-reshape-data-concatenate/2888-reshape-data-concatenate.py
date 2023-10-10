# leetcode/easy/2888. Reshape Data: Concatenate
# 2888-reshape-data-concatenate
# URL: https://leetcode.com/problems/reshape-data-concatenate/description/


import pandas as pd


def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    return pd.concat([df1, df2], ignore_index=True)
