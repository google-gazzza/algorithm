"""https://app.codility.com/c/run/trainingAV849A-YQ3/

Task Score  : 100%
Correctness : 100%
Performance : 100%

result : https://app.codility.com/demo/results/trainingAV849A-YQ3/
"""
from itertools import accumulate

def solution(A):
    result = float('inf')
    sum_a = sum(A)
    accumulates = list(accumulate(A[:-1]))
    for acc in accumulates:
        result = min(abs(sum_a - (2 * acc)), result)
        
    return result
