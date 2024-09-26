/*
706-design-hashmap
leetcode/easy/706. Design HashMap
Difficulty: easy
URL: https://leetcode.com/problems/design-hashmap/

NOTE: Description

NOTE: Constraints
  - 0 <= key, value <= 106
  - At most 104 calls will be made to put, get, and remove.

NOTE: Explanation
*/

class MyHashMap {
  private map: { [key: number]: number };

  constructor() {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    if (this.map[key] !== undefined) {
      return this.map[key];
    }
    return -1;
  }

  remove(key: number): void {
    delete this.map[key];
  }
}

// Input
//   ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
//   [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
//   [null, null, null, 1, -1, null, 1, null, -1]
//
// Explanation
let myHashMap: MyHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
