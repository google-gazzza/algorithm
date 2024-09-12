// [Medium] 1396. Design Underground System
// 1396_design_underground_system

// https://leetcode.com/problems/design-underground-system
// Runtime: 240 ms, faster than 80.86% of JavaScript online submissions for Design Underground System.
// Memory Usage: 52.8 MB, less than 94.47% of JavaScript online submissions for Design Underground System.

const UndergroundSystem = function () {
  this.startMap = new Map()
  this.resultMap = new Map()
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.startMap.set(id, [stationName, t])
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const [startStationName, startTime] = this.startMap.get(id)
  this.startMap.delete(id)

  const key = `${startStationName}-${stationName}`
  const diff = t - startTime

  if (this.resultMap.has(key)) {
    this.resultMap.get(key).push(diff)
  } else {
    this.resultMap.set(key, [diff])
  }
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const resultArr = this.resultMap.get(`${startStation}-${endStation}`)
  return resultArr.reduce((acc, cur) => acc + cur, 0) / resultArr.length
}

// const undergroundSystem = new UndergroundSystem()
// undergroundSystem.checkIn(45, 'Leyton', 3)
// undergroundSystem.checkIn(32, 'Paradise', 8)
// undergroundSystem.checkIn(27, 'Leyton', 10)
// undergroundSystem.checkOut(45, 'Waterloo', 15)
// undergroundSystem.checkOut(27, 'Waterloo', 20)
// undergroundSystem.checkOut(32, 'Cambridge', 22)
// undergroundSystem.getAverageTime('Paradise', 'Cambridge') //?
// undergroundSystem.getAverageTime('Leyton', 'Waterloo') //?
// undergroundSystem.checkIn(10, 'Leyton', 24)
// undergroundSystem.getAverageTime('Leyton', 'Waterloo') //?
// undergroundSystem.checkOut(10, 'Waterloo', 38)
// undergroundSystem.getAverageTime('Leyton', 'Waterloo') //?

const undergroundSystem = new UndergroundSystem()
undergroundSystem.checkIn(10, 'Leyton', 3)
undergroundSystem.checkOut(10, 'Paradise', 8)
undergroundSystem.getAverageTime('Leyton', 'Paradise') //?
undergroundSystem.checkIn(5, 'Leyton', 10)
undergroundSystem.checkOut(5, 'Paradise', 16)
undergroundSystem.getAverageTime('Leyton', 'Paradise') //?
undergroundSystem.checkIn(2, 'Leyton', 21)
undergroundSystem.checkOut(2, 'Paradise', 30)
undergroundSystem.getAverageTime('Leyton', 'Paradise') //?
