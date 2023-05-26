/*
703-kth-largest-element-in-a-stream
leetcode/easy/703. Kth Largest Element in a Stream
URL: https://leetcode.com/problems/kth-largest-element-in-a-stream/

NOTE: Description

NOTE: Constraints
  - 1 <= k <= 104
  - 0 <= nums.length <= 104
  - -104 <= nums[i] <= 104
  - -104 <= val <= 104
  - At most 104 calls will be made to add.
  - It is guaranteed that there will be at least k elements in the array when you search for the kth element.

NOTE: Explanation
*/

class KthLargest {
  private stream: number[];

  private k: number;

  constructor(k: number, nums: number[]) {
    this.stream = nums.sort((a, b) => b - a);
    this.k = k;
  }

  add(val: number): number {
    this.stream.push(val);
    this.stream.sort((a, b) => b - a);
    return this.stream[this.k - 1];
  }
}

// Input
//   ["KthLargest", "add", "add", "add", "add", "add"]

const kthLargestInstance = new KthLargest(3, [4, 5, 8, 2]);
kthLargestInstance.add(3);
kthLargestInstance.add(5);
kthLargestInstance.add(10);
kthLargestInstance.add(9);
kthLargestInstance.add(4);
// Output
//   [null, 4, 5, 5, 8, 8]