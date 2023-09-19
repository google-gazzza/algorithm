// leetcode/easy/1196. How Many Apples Can You Put into the Basket
// 1196-how-many-apples-can-you-put-into-the-basket
// URL: https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/

function maxNumberOfApples(weight: number[]): number {
  weight.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;

  while (weight.length && sum + weight[0] <= 5000) {
    sum += weight.shift();
    count += 1;
  }

  return count;
}
