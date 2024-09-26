// [Easy] 705. Design HashSet
// 705_design_hashset

// https://leetcode.com/problems/design-hashset
// Runtime: 168 ms, faster than 95.00% of JavaScript online submissions for Design HashSet.
// Memory Usage: 47 MB, less than 75.38% of JavaScript online submissions for Design HashSet.
const MyHashSet = function () {
  this.set = {}
}

MyHashSet.prototype.add = function (key) {
  this.set[key] = true
}

MyHashSet.prototype.remove = function (key) {
  delete this.set[key]
}

MyHashSet.prototype.contains = function (key) {
  return this.set.hasOwnProperty(key)
}
