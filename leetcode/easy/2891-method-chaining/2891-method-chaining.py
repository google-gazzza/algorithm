# leetcode/easy/2891. Method Chaining
# 2891-method-chaining
# URL: https://leetcode.com/problems/method-chaining/description/

import pandas as pd


def findHeavyAnimals(df: pd.DataFrame) -> pd.DataFrame:
    filtered_df = df[df['weight'] > 100]
    sorted_df = filtered_df.sort_values(by=['weight'], ascending=False)

    return sorted_df[['name']]
