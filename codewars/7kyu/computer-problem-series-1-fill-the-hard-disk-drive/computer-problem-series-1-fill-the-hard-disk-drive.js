/*
computer-problem-series-1-fill-the-hard-disk-drive

Title: computer problem series #1: Fill the Hard Disk Drive
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript

<br><br><br><br>

## Approach

<br>

### en

basic logic is simple.
sum values from beginning while sum values less or equal than 'n'
and return counts that how many elements added

use reduce with initialize value {sum:0, count:0}
and accumulate element to 'sum'
and add one count to 'count'
while total sum value is less of equal than 'n'

when total sum value greater than 'n'
remove rest of array trough 'splice'.
then immediately iteration will stop.

if you don't remove rest of array
then iteration could run 100,000 times even we already get result at first time.

<br>

### kr

기본로직은 간단합니다.
합산된 값이 'n'값보다 작거나 같을동안 모든 엘레멘트를 시작부터 합산 하면 됩니다.
그리고 총 '몇번'그 과정을 거쳤는지 리턴하면 됩니다.

최초 {sum:0, count:0}로 reduce를 초기화합니다.
그리고 'sum' 에 엘레멘트 값을 합산하고
'count'에 1씩 더해줍니다.
이 과정을 'sum'이 'n'보다 작거나 같은 기간동안 반복합니다.

합산된 값이 'n'보다 클때
'splice'메소드를 이용해서 나머지 엘레멘트들을 삭제합니다.
이렇게 하면 이터레이션은 멈출것입니다.

만약 나머지 엘레멘트들을 삭제하지 않을경우
첫번째 엘레멘트에서 이미 원하는 값을 찾았음에도 이터레이션은 100,000번까지도 반복 될 수 있습니다.
---------------------------------------------
 */

const save = (sizes, hd) => sizes.reduce((acc, cur, i, arr) => {
  if (acc.sum + cur <= hd) {
    acc.sum += cur;
    acc.count += 1;
  } else {
    arr.splice(0, arr.length);
  }
  return acc;
}, { sum: 0, count: 0 }).count;

console.log(save([4, 4, 4, 3, 3], 12), 3);
console.log(save([4, 4, 4, 3, 3], 11), 2);
console.log(save([4, 8, 15, 16, 23, 42], 108), 6);
console.log(save([13], 13), 1);
console.log(save([1, 2, 3, 4], 250), 4);
console.log(save([100], 500), 1);
console.log(save([11, 13, 15, 17, 19], 8), 0);
console.log(save([45], 12), 0);
