"""
1603-design-parking-system 
leetcode/easy/1603. Design Parking System
Difficulty: easy
URL: https://leetcode.com/problems/design-parking-system/
"""

class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self.space_dict = {
            1: big,
            2: medium,
            3: small,
        }

    def addCar(self, carType: int) -> bool:
        self.space_dict[carType] -= 1

        return self.space_dict[carType] >= 0

        # Your ParkingSystem object will be instantiated and called as such:


# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)


def test():
    parkingSystem = ParkingSystem(1, 1, 0)
    assert parkingSystem.addCar(1)
    assert parkingSystem.addCar(2)
    assert not parkingSystem.addCar(3)