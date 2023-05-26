// [Easy] 706. Design HashMap
// 706_design_hashmap

// https://leetcode.com/problems/design-hashmap
// Runtime: 168 ms, faster than 99.80% of JavaScript online submissions for Design HashMap.
// Memory Usage: 48.5 MB, less than 50.30% of JavaScript online submissions for Design HashMap.
const MyHashMap = function () {
  this.map = {}
}

MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value
}

MyHashMap.prototype.get = function (key) {
  const mappedVal = this.map[key]
  return mappedVal != null ? mappedVal : -1
}

MyHashMap.prototype.remove = function(key) {
  delete this.map[key]
}
