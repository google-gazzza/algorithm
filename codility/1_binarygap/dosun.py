"""https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

Programming language used Python
Total time used 2 minutes
Effective time used 2 minutes
https://app.codility.com/demo/results/training9W74FK-QWH/
"""

def solution(N):
    binary = bin(N)[2:]
    return len(max(binary.strip('0').split('1')))
