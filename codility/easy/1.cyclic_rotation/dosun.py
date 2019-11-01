"""https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

result : https://app.codility.com/demo/results/training4NC29K-74J/
1. CyclicRotation

Task Score :75%
Correctness:75%
Performance:Not assessed
"""

def solution(A, K):
    return A[-K:] + A[:-K]
