"""https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/

Task Score  : 100%
Correctness : 100%
Performance : 100%

result : https://app.codility.com/demo/results/trainingN8PJD5-H95/
"""
import math

def solution(N):
    sroot = math.sqrt(N)
    ceil = math.ceil(sroot)
    for i in range(ceil, 0, -1):
        if N % i == 0:
            return int(2 * (i + (N / i)))

    return -1
