"""
https://leetcode.com/problems/solve-the-equation/
Runtime: 52 ms, faster than 5.78% of Python3 online submissions for Solve the Equation.
Memory Usage: 13.9 MB, less than 36.42% of Python3 online submissions for Solve the Equation.
"""


class Solution:
    def solveEquation(self, equation: str) -> str:
        def parsing(equation):
            equation += 'E'
            x = 0
            number = 0

            temp = equation[0]
            for i in range(1, len(equation)):
                if equation[i] == '+' or equation[i] == '-' or equation[i] == 'E':
                    if temp[-1] == 'x':
                        if temp == 'x' or not temp[-2].isnumeric():
                            temp = temp[:-1] + '1' + temp[-1]
                        x += int(temp[:-1])
                    else:
                        number += int(temp)
                    temp = equation[i]
                else:
                    temp += equation[i]

            return {'x':x, 'number':number}

        left_equation, right_equation = equation.split('=')
        left = parsing(left_equation)
        right = parsing(right_equation)

        left['x'] -= right['x']
        right['number'] -= left['number']
        del left['number']
        del right['x']

        if left['x'] != 0:
            if right['number'] != 0:
                return 'x=' + str(int(right['number']/left['x']))
            else:
                return 'x=0'
        else:
            if right['number'] == 0:
                return 'Infinite solutions'
            else:
                return 'No solution'
