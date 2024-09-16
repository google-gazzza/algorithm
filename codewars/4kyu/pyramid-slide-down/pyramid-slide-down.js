/*
pyramid-slide-down

# codewars/4kyu/Pyramid Slide Down
Difficulty: 4kyu
URL: https://www.codewars.com/kata/551f23362ff852e2ab000037/

## Approach

### en
Most easiest way to solve this problem is brute-force(breadth-first-search) way,
which means just calculate every path, and return max value.

Most people say brute-force Big-O is 𝑂(𝑚𝑛)
But I’m not sure about it’s O(mn), I think it’s product of n (i=0 -> n)

Anyway if we start from the end of array
Then we can eliminate half for each step which means it becomes to O(n log n)

### kr
가장 쉬운 방법은 brute-for(breadth-first-search)입니다, 다른말로 하자면 모든 경로를 계산 한뒤 가장 높은 값을 반환 하는 것 입니다.

많은 사람들은 brute-force의 Big-O를  𝑂(𝑚𝑛) 이라고 합니다.
그러나 저는 이 경우에 𝑂(𝑚𝑛)인지 모르겠습니다. 제 생각에는 이것은 product of n (i=0 -> n)입니다.

어찌됬건 우리가 만약 array의 가장 마지막에서부터 시작한다면
우리는 각 스텝마다 절반씩 제거 할 수 있습니다, 이렇게 하면 하면 Big-O가 O(n log n)이 됩니다.

## Solution
### JavaScript

*/

function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i >= 0; i -= 1) {
    for (let j = pyramid[i].length - 1; j >= 0; j -= 1) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  
  return pyramid[0][0];
}

// brute-force
// function longestSlideDown(pyramid, sum = 0, y = 0, x = 0) {
//   if (pyramid[y + 1] === undefined) {
//     return sum + pyramid[y][x];
//   }
//
//   return Math.max(
//     longestSlideDown(pyramid, sum + pyramid[y][x], y + 1, x),
//     longestSlideDown(pyramid, sum + pyramid[y][x], y + 1, x + 1),
//   );
// }

// test
console.log(longestSlideDown([[-10]]));
//?

console.log(longestSlideDown(
  [[3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]],
  ),
  23,
  'should work for small pyramids',
);

console.log(longestSlideDown(
  [[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]]),
  1074, 'should work for medium pyramids');
