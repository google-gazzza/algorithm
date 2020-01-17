"""https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

Task Score  : 66%
Correctness :100%
Performance : 40%
result : https://app.codility.com/demo/results/training9T9A7W-BB8/
"""
def solution(N, A): 
      result = [0] * N
      for a in A:
        if a == N + 1:
          result = [max(result)] * N
        else:
          result[a-1] += 1
          
      return result
