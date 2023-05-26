/*
705-design-hashset
leetcode/easy/705. Design HashSet
URL: https://leetcode.com/problems/design-hashset/

NOTE: Description

NOTE: Constraints
  - 0 <= key <= 106
  - At most 104 calls will be made to add, remove, and contains.

NOTE: Explanation
*/

class MyHashSet {
  private hashTable: { [key: number]: boolean };

  constructor() {
    this.hashTable = {};
  }

  add(key: number): void {
    this.hashTable[key] = true;
  }

  remove(key: number): void {
    delete this.hashTable[key];
  }

  contains(key: number): boolean {
    return this.hashTable[key] === true;
  }
}

// Explanation
const myHashSet: MyHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
