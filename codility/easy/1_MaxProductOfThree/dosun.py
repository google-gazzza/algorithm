"""https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

Task Score  :100%
Correctness : 100%
Performance : 100%

result: https://app.codility.com/demo/results/trainingBNAHGU-WCZ/
"""
def solution(A):
    A.sort()
    n = len(A)
    product1 = A[0] * A[1] * A[n-1]
    product2 = A[n-1] * A[n-2] * A[n-3]

    return max(product1, product2)
