/*
over-the-road

# codewars/7kyu/Over The Road
difficulty: 7kyu
URL: https://www.codewars.com/kata/5f0ed36164f2bc00283aed07
tags: math, algebra

## Approach

### en
This is a simple algebra, so the explanation is omitted.

### kr
이것은 간단한 algebra이기 때문에 설명을 생략합니다.

## Solution
### JavaScript

*/

const overTheRoad = (address, n) => (n * 2 + 1) - address;

//test
console.log(overTheRoad(1, 3), 6);
console.log(overTheRoad(3, 3), 4);
console.log(overTheRoad(2, 3), 5);
console.log(overTheRoad(3, 5), 8);
console.log(overTheRoad(7, 11), 16);
