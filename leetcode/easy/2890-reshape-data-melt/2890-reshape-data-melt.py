# leetcode/easy/2890. Reshape Data: Melt
# 2890-reshape-data-melt
# URL: https://leetcode.com/problems/reshape-data-melt/description/


import pandas as pd


def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    return pd.melt(
        report,
        id_vars=['product'],
        value_vars=['quarter_1', 'quarter_2', 'quarter_3', 'quarter_4'],
        var_name='quarter',
        value_name='sales',
    )
