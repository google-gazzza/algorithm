# leetcode/easy/2728. Count Houses in a Circular Street
# 2728-count-houses-in-a-circular-street
# URL: https://leetcode.com/problems/count-houses-in-a-circular-street/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import Optional


class Solution:
    def houseCount(self, street: Optional['Street'], k: int) -> int:
        count = 1

        for i in range(k):
            street.closeDoor()
            street.moveRight()
            street.openDoor()

        for i in range(k):
            street.moveLeft()

            if street.isDoorOpen():
                break
            else:
                count += 1

            street.openDoor()

        return count

# Definition for a street.
# class Street:
#     def openDoor(self):
#         pass
#     def closeDoor(self):
#         pass
#     def isDoorOpen(self):
#         pass
#     def moveRight(self):
#         pass
#     def moveLeft(self):
#         pass
