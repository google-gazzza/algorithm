// leetcode/medium/319. Bulb Switcher
// 319-bulb-switcher
// URL: https://leetcode.com/problems/bulb-switcher/description/


// NOTE: Naive solution
function bulbSwitch(n: number): number {
  if (n === 0) {
    return 0;
  }

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      count++;
    }
  }

  return count;
};

// NOTE: trick.
function bulbSwitch(n: number): number {
  return Math.floor(Math.sqrt(n));
}

let n = 3;
console.log(bulbSwitch(n))
// Output: 1

n = 0;
console.log(bulbSwitch(n))
// Output: 0

n = 1;
console.log(bulbSwitch(n))
// Output: 1
