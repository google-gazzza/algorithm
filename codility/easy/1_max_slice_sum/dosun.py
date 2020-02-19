"""https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/

Task Score  : 100%
Correctness : 100%
Performance : 100%
result : https://app.codility.com/demo/results/training8EGU94-SD2/
"""
def solution(S):
    max_slice = 0
    result = S[0]
    for s in S:
        max_slice = max(s, max_slice + s)
        result = max(result, max_slice)
    
    return result
