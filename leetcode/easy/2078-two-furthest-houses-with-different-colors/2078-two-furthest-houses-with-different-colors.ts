// leetcode/easy/2078. Two Furthest Houses With Different Colors
// 2078-two-furthest-houses-with-different-colors
// URL: https://leetcode.com/problems/two-furthest-houses-with-different-colors/

function maxDistance(colors: number[]): number {
  let max = 0;

  for (let i = 0; i < colors.length; i += 1) {
    for (let j = i + 1 + max; j < colors.length; j += 1) {
      if (colors[i] !== colors[j]) {
        max = Math.max(max, j - i);
      }
    }
  }

  return max;
}

colors = [1, 1, 1, 6, 1, 1, 1];
console.log(maxDistance(colors));
// Output: 3

colors = [1, 8, 3, 8, 3];
console.log(maxDistance(colors));
// Output: 4

colors = [0, 1];
console.log(maxDistance(colors));
// Output: 1
