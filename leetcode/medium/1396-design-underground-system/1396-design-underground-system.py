# leetcode/medium/1396. Design Underground System
# 1396-design-underground-system
# URL: https://leetcode.com/problems/design-underground-system/description/?envType=study-plan-v2&id=programming-skills
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class UndergroundSystem:

    def __init__(self):
        self.checkInMap = {}
        self.trafficMap = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.checkInMap[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        trafficFrom = self.checkInMap[id][0]
        diff = t - self.checkInMap[id][1]
        self.checkInMap.pop(id)

        if (trafficFrom, stationName) not in self.trafficMap:
            self.trafficMap[(trafficFrom, stationName)] = {
                'count': 1,
                'total': diff
            }
        else:
            self.trafficMap[(trafficFrom, stationName)]['count'] += 1
            self.trafficMap[(trafficFrom, stationName)]['total'] += diff

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        return self.trafficMap[(startStation, endStation)]['total'] \
            / self.trafficMap[(startStation, endStation)]['count']


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)

undergroundSystem = UndergroundSystem()
undergroundSystem.checkIn(45, "Leyton", 3)
undergroundSystem.checkIn(32, "Paradise", 8)
undergroundSystem.checkIn(27, "Leyton", 10)
undergroundSystem.checkOut(45, "Waterloo", 15)
# // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20)
# // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22)
# // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
undergroundSystem.getAverageTime("Paradise", "Cambridge")
# // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo")
# // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, "Leyton", 24)
undergroundSystem.getAverageTime("Leyton", "Waterloo")
# // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38)
# // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo")
# // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
