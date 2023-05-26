// [Medium] 1396. Design Underground System
// 1396_design_underground_system

// https://leetcode.com/problems/design-underground-system
// Runtime: 224 ms, faster than 100.00% of TypeScript online submissions for Design Underground System.
// Memory Usage: 53 MB, less than 100.00% of TypeScript online submissions for Design Underground System.

type startTuple = [string, number]

class UndergroundSystem {
  startMap: Map<number, startTuple>
  resultMap: Map<string, number[]>
  constructor() {
    this.startMap = new Map()
    this.resultMap = new Map()
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.startMap.set(id, [stationName, t])
  }

  checkOut(id: number, stationName: string, t: number): void {
    const [startStationName, startTime] = this.startMap.get(id)!
    this.startMap.delete(id)

    const key = `${startStationName}-${stationName}`
    const diff = t - startTime

    if (this.resultMap.has(key)) {
      this.resultMap.get(key)!.push(diff)
    } else {
      this.resultMap.set(key, [diff])
    }
  }

  getAverageTime(startStation: string, endStation: string): number {
    const resultArr = this.resultMap.get(`${startStation}-${endStation}`)!
    return resultArr.reduce((acc, cur) => acc + cur, 0) / resultArr.length
  }
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
