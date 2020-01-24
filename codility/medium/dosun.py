"""https://app.codility.com/c/run/trainingQV9XXR-34S/

result : https://app.codility.com/demo/results/trainingQV9XXR-34S/

Task Score  : 100%
Correctness : 100%
Performance : 100%
"""
def solution(S, P, Q):
    result = []
    for i in range(len(P)):
        dna = S[P[i]:Q[i] + 1]
        if 'A' in dna: result.append(1)
        elif 'C' in dna: result.append(2)
        elif 'G' in dna: result.append(3)
        else: result.append(4)
    return result
