"""https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/

Task Score  : 100%
Correctness : 100%
Performance :100%

result: https://app.codility.com/demo/results/trainingAKABRW-NV5/
"""
def solution(A):
    min_element = 200000
    max_profit = 0
    for a in A:
        min_element = min(a, min_element)
        max_profit = max(a - min_element, max_profit)

    return max_profit
