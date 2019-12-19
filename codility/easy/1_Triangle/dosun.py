"""https://app.codility.com/programmers/lessons/6-sorting/triangle/

Task Score  : 100%
Correctness : 100%
Performance : 100%
result : https://app.codility.com/demo/results/training7FNVT6-8F3/
"""
def solution(A):
    A.sort()
    for i in range(len(A) - 2):
        if A[i] + A[i+1] > A[i+2]: return 1
    return 0
