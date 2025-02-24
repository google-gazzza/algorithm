# leetcode/easy/178. Rank Scores
# 178-rank-scores
# URL: https://leetcode.com/problems/rank-scores/description/?lang=pythondata

import pandas as pd


def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
    del scores['id']

    scores.sort_values(by='score', ascending=False, inplace=True)
    scores['rank'] = scores['score'].rank(ascending=False, method='dense').astype(int)

    return scores
