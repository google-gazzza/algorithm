"""https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

result
  https://app.codility.com/demo/results/trainingW5ATAF-KK5/
Task Score  : 100%
Correctness : 100%
Performance : 100%
"""
def solution(A):
    result = 1
    A = set(sorted(A))
    for a in A:
        if a == result: result += 1
    return result
