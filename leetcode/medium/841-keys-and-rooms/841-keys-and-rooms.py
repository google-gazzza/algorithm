# leetcode/medium/841. Keys and Rooms
# 841-keys-and-rooms
# URL: https://leetcode.com/problems/keys-and-rooms/


class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        keys = rooms[0]
        rooms[0] = None

        while len(keys):
            new_keys = rooms[keys[0]]
            rooms[keys[0]] = None
            keys.pop(0)

            if new_keys is not None:
                keys += new_keys

        return all(x is None for  x in rooms)

rooms = [[1],[2],[3],[]]
# Output: true

rooms = [[1,3],[3,0,1],[2],[0]]
# Output: false

