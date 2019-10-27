"""
https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

result : https://app.codility.com/demo/results/trainingD4FBPY-77S/
"""
# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    result = 0
    for a in A: result ^= a
    
    return result
