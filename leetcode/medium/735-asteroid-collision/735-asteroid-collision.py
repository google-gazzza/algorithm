# leetcode/medium/735. Asteroid Collision
# 735-asteroid-collision
# URL: https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        index = 0

        while index < len(asteroids) - 1:
            if asteroids[index] > 0 and asteroids[index + 1] < 0:
                if abs(asteroids[index]) > abs(asteroids[index + 1]):
                    asteroids.pop(index + 1)
                elif abs(asteroids[index]) < abs(asteroids[index + 1]):
                    asteroids.pop(index)
                    index -= 1
                else:
                    asteroids.pop(index)
                    asteroids.pop(index)
                    index -= 1

                index = max(index, 0)
            else:
                index += 1

        return asteroids


asteroids = [-1, -2, -3, -4, -5]
print(Solution().asteroidCollision(asteroids))

asteroids = [5, 10, -5]
print(Solution().asteroidCollision(asteroids))
# Output: [5,10]

asteroids = [8, -8]
print(Solution().asteroidCollision(asteroids))
# Output: []

asteroids = [10, 2, -5]
print(Solution().asteroidCollision(asteroids))
# Output: [10]

asteroids = [-2, -1, 1, 2]
print(Solution().asteroidCollision(asteroids))

asteroids = [1, -2, -2, 1]
print(Solution().asteroidCollision(asteroids))
# Expected [-2,-2,1]
