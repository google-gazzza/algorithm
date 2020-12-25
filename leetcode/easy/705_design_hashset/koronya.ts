// [Easy] 705. Design HashSet
// 705_design_hashset

// https://leetcode.com/problems/design-hashset
// Runtime: 176 ms, faster than 100.00% of TypeScript online submissions for Design HashSet.
// Memory Usage: 47.3 MB, less than 100.00% of TypeScript online submissions for Design HashSet.
class MyHashSet {
  set: object
  constructor() {
    this.set = {}
  }

  add(key: number): void {
    this.set[key] = true
  }

  remove(key: number): void {
    delete this.set[key]
  }

  contains(key: number): boolean {
    return this.set.hasOwnProperty(key)
  }
}
