// https://leetcode.com/problems/keys-and-rooms/
// Runtime: 52 ms, faster than 92.58% of JavaScript online submissions for Keys and Rooms.
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Keys and Rooms.
const canVisitAllRooms = rooms => {
  const roomsLen = rooms.length
  const visitedSet = new Set()
  const queue = [[0]]
  let restRoomCount = roomsLen
  while (queue.length > 0) {
    const keys = queue.shift()
    if (keys.length !== 0) {
      keys.map(key => {
        if (!visitedSet.has(key)) {
          visitedSet.add(key)
          queue.push(rooms[key])
          restRoomCount -= 1
        }
      })
    }
  }
  
  return restRoomCount === 0
}
