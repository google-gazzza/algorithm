"""https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

Task Score  :100%
Correctness :100%
Performance :100%

result : https://app.codility.com/demo/results/training3V32HZ-79R/
"""
def solution(H):
    stack = [''] * len(H)
    size = 0
    result = 0
    for _, v in enumerate(H):
        while size > 0 and v < stack[size - 1]:
            size -= 1
        if size == 0 or v != stack[size - 1]:
            result += 1
            stack[size] = v
            size += 1

    return result
