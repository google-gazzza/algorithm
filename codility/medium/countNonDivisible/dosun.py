"""https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/

Task Score  : 55%
Correctness :100%
Performance : 0%
result : https://app.codility.com/demo/results/training7Q2TW4-H2T/

"""
def solution(A):
    result = [0] * len(A)
    for k1, v1 in enumerate(A):
        for k2, v2 in enumerate(A):
            if k1 is not k2 and v1 % v2 is not 0:
                result[k1] += 1
    
    return result
               
