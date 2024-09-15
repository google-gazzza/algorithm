/*
170-two-sum-iii-data-structure-design
leetcode/easy/170. Two Sum III - Data structure design
Difficulty: easy
URL: https://leetcode.com/problems/two-sum-iii-data-structure-design/
*/


/*
Constraints:

-105 <= number <= 105
-231 <= value <= 231 - 1
At most 104 calls will be made to add and find.
 */
class TwoSum {
  private list: number[];

  constructor() {
    this.list = [];
  }

  add(number: number): void {
    this.list.push(number);
  }

  find(value: number): boolean {
    this.list.sort((a, b) => a - b);

    let i = 0;
    let j = this.list.length - 1;
    while (i < j) {
      const sum = this.list[i] + this.list[j];

      if (sum === value) {
        return true;
      }

      if (sum > value) {
        j -= 1;
      } else {
        i += 1;
      }
    }

    return false;
  }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

let twoSum: TwoSum = new TwoSum();
twoSum.add(1);   // [] --> [1]
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(5);   // [1,3] --> [1,3,5]
twoSum.find(4);  //?

// 1 + 3 = 4, return true
twoSum.find(7);  //?
// No two integers sum up to 7, return false

// ["TwoSum","add","add","add","find"]
// [[],[3],[1],[2],[3]]

twoSum: TwoSum = new TwoSum();
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(1);   // [] --> [1]
twoSum.add(2);   // [1] --> [1,3]
twoSum.find(3);  //?

