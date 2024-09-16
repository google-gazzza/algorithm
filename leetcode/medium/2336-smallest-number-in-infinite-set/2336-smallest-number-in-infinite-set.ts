/*
2336-smallest-number-in-infinite-set
leetcode/medium/2336. Smallest Number in Infinite Set
URL: https://leetcode.com/problems/smallest-number-in-infinite-set/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

class SmallestInfiniteSet {
  private count = 0;
  private removedNums: number[] = [];

  popSmallest(): number {
    this.removedNums.sort((a, b) => a - b);
    if (this.removedNums.length && this.removedNums[0] <= this.count) {
      return this.removedNums.shift();
    }
    this.count += 1;
    return this.count;
  }

  addBack(num: number): void {
    if (!this.removedNums.includes(num) && num <= this.count) {
      this.removedNums.push(num);
      this.removedNums.sort((a, b) => a - b);
    }
  }
}

const smallestInfiniteSet: SmallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
                                   // is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.

const smallestInfiniteSet2: SmallestInfiniteSet = new SmallestInfiniteSet();

smallestInfiniteSet2.popSmallest();
smallestInfiniteSet2.addBack(1);
smallestInfiniteSet2.popSmallest();
smallestInfiniteSet2.popSmallest();
smallestInfiniteSet2.popSmallest();
smallestInfiniteSet2.addBack(2);
smallestInfiniteSet2.addBack(3);
smallestInfiniteSet2.popSmallest();
smallestInfiniteSet2.popSmallest();
// [null,1,null,1,2,3,null,null,2,3]
