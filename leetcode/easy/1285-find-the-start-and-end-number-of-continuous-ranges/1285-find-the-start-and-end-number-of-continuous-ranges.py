# leetcode/medium/1285. Find the Start and End Number of Continuous Ranges
# 1285-find-the-start-and-end-number-of-continuous-ranges
# URL: https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/description/

import pandas as pd


def find_continuous_ranges(logs: pd.DataFrame) -> pd.DataFrame:
    result = []

    start = logs['log_id'].iloc[0]

    for i in range(1, len(logs['log_id'])):
        if logs['log_id'].iloc[i] - logs['log_id'].iloc[i - 1] > 1:
            result.append((start, logs['log_id'][i - 1]))
            start = logs['log_id'].iloc[i]

    result.append((start, logs['log_id'].iloc[len(logs['log_id']) - 1]))

    return pd.DataFrame(result, columns=['start_id', 'end_id'])
