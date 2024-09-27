// [Hard] 710. Random Pick with Blacklist
// 710_random_pick_with_blacklist

// https://leetcode.com/problems/random-pick-with-blacklist
// Runtime: 364 ms, faster than 76.47% of JavaScript online submissions for Random Pick with Blacklist.
// Memory Usage: 60.5 MB, less than 64.71% of JavaScript online submissions for Random Pick with Blacklist.
const Solution = function (N, blacklist) {
  this.matchMap = new Map()
  this.total = N - blacklist.length
  const blackSet = new Set(blacklist)
  let lastMappedIndex = N - 1
  const mappingUnderBound = num => {
    while (blackSet.has(lastMappedIndex)) {
      lastMappedIndex -= 1
    }
    this.matchMap.set(num, lastMappedIndex)
    lastMappedIndex -= 1
  }
  blacklist.filter(black => black < this.total).forEach(mappingUnderBound)
}

Solution.prototype.pick = function() {
  let index = Math.floor(Math.random() * this.total)
  return this.matchMap.has(index)
    ? this.matchMap.get(index)
    : index
}



// Time Over...T_T
const Solution2 = function (N, blacklist) {
  this.N = N
  this.blackSet = new Set(blacklist)
}

Solution2.prototype.pick = function() {
  let index = Math.floor(Math.random() * this.N)
  while (this.blackSet.has(index)) {
    index = Math.floor(Math.random() * this.N)
  }
  return index
}

// Time Over...T_T
const Solution3 = function (N, blacklist) {
  const blackSet = new Set(blacklist)
  this.candidateArr = Array.from({length: N}, (_, index) => (index)).filter((_, index) => !blackSet.has(index))
  this.total = this.candidateArr.length
}

Solution3.prototype.pick = function() {
  return this.candidateArr[Math.floor(Math.random() * this.total)]
}
