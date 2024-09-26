# leetcode/easy/2887. Fill Missing Data
# 2887-fill-missing-data
# URL: https://leetcode.com/problems/fill-missing-data/description/


import pandas as pd


def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    products['quantity'] = products['quantity'].fillna(0)

    return products
