"""
https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

result 
  https://app.codility.com/demo/results/training3N5D8H-H3U/
  
Task Score :100%
Correctness:100%  
"""
def solution(A):
    return sum(range(len(A) + 2)) - sum(A)
