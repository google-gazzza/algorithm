"""https://app.codility.com/c/run/training8G7EDA-VRV/

result 
  https://app.codility.com/demo/results/training8G7EDA-VRV/
Task Score  : 100%
Correctness :100%
Performance : 100%
"""
def solution(X, A):
    position = set()
    for k, v in enumerate(A):
        position.add(v)
        if len(position) == X: return k
    return -1
