// [Easy] 706. Design HashMap
// 706_design_hashmap

// https://leetcode.com/problems/design-hashmap
// Runtime: 196 ms, faster than 60.00% of TypeScript online submissions for Design HashMap.
// Memory Usage: 48.7 MB, less than 80.00% of TypeScript online submissions for Design HashMap.
class MyHashMap {
  map: { [key: number]: number } = {}

  put(key: number, value: number): void {
    this.map[key] = value
  }

  get(key: number): number {
    const mappedVal: number = this.map[key]
    return mappedVal != null ? mappedVal : -1
  }

  remove(key: number): void {
    delete this.map[key]
  }
}
