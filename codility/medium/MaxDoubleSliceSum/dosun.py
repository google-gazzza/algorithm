"""https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/

Task Score  : 100%
Correctness : 100%
Performance : 100%
result : https://app.codility.com/demo/results/trainingMEMNPR-SDX/
"""
def solution(A):
    len_a = len(A)
    start = [0] * len_a
    end = [0] * len_a
    for i in range(1, len_a - 1):
        start[i] = max(start[i-1] + A[i], 0)
        i = len_a - i - 1
        end[i] = max(end[i+1] + A[i], 0)
        
    result = 0
    for i in range(1, len_a - 1):
        result = max(result, start[i-1] + end[i+1])
    return result
