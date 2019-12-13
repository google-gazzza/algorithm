"""
https://leetcode.com/problems/spiral-matrix/
Runtime: 28 ms, faster than 88.87% of Python3 online submissions for Spiral Matrix.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Spiral Matrix.
"""


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if matrix == []:
            return []
        
        for i in range(len(matrix)):
            matrix[i].append('T')
            matrix[i].insert(0, 'T')

        matrix.append(['T']*len(matrix[0]))
        matrix.insert(0, ['T'] * len(matrix[0]))

        def move(direction, i,j):
            if direction == 'r':
                return i, j+1
            elif direction == 'l':
                return i, j-1
            elif direction == 'u':
                return i-1, j
            elif direction == 'd':
                return i+1, j

        i = j = 1
        direction = "r"
        results = []
        while matrix[i][j] != 'T':
            results.append(matrix[i][j])
            matrix[i][j] = 'T'
            temp_i, temp_j = move(direction, i, j)

            if direction == 'r' and matrix[temp_i][temp_j] == 'T':
                direction = 'd'
                i, j = move(direction, i, j)
            elif direction == 'd' and matrix[temp_i][temp_j] == 'T':
                direction = 'l'
                i, j = move(direction, i, j)
            elif direction == 'l' and matrix[temp_i][temp_j] == 'T':
                direction = 'u'
                i, j = move(direction, i, j)
            elif direction == 'u' and matrix[temp_i][temp_j] == 'T':
                direction = 'r'
                i, j = move(direction, i, j)
            else:
                i, j = temp_i, temp_j

        return results
