"""https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

Task Score  : 100%
Correctness : 100%
Performance : 100%
result: https://app.codility.com/demo/results/training2QM8XV-M7Z/
"""
from math import ceil, floor

def solution(A, B, K):
    return floor(B / K) - ceil(A / K) + 1
