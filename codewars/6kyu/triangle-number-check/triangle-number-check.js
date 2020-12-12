/*
triangle-number-check

# Triangle number check
difficulty: 6kyu
URL: https://www.codewars.com/kata/557e8a141ca1f4caa70000a6

<br>

## Approach

### en

first of all, we can recognize that the end number of each line has a pattern
if we were looking for 3rd end number
it's 3 + (3-1)rows's end number

and the end of rows number is 1,3,6,10 for row 1 to 4
in other words, the end number increase 1,2,3,4,... n+1 sequentially

1. compare current row-end num with input number
if the number equal to a current row number, then return true
2. if the current number is greater than the number or input is not a number, return false
3. calculate next rows end number and repeat the whole process trough tail recursion

### kr

우선 우리는 각 행의 끝 숫자가 패턴이 있는걸 확인 할 수 있습니다.
만약 우리가 3번째 행의 끝 숫자를 알려고 한다면
3 + (3-1)행의 끝 넘버를 합산하면 됩니다.

그리고 1행부터 4행까지의 끝 숫자는 1,3,6,10입니다.
다른말로 하면 끝 숫자는 1,2,3,4,... n+1로 순차적으로 증가됩니다.

1. 현재 행의 끝 숫자와 입력된 숫자가 비교한후 같으면 true 리턴
2. 만약 현재 행의 끝 숫자가 입력된 숫자보다 크거나, 숫자가 아닐경우 false리턴
3. 다음 행의 끝 숫자를 계산하고 전체 프로세스를 재귀호출을 이용해 반복

## solution

 */

function isTriangleNumber(number, step = 0, cur = 0) {
  if (cur === number) {
    return true;
  }
  if (cur > number || isNaN(number)) {
    return false;
  }
  
  return isTriangleNumber(number, step + 1, cur + (step + 1));
}

console.log(isTriangleNumber(3), true);
// , "Expected true for input 3.  Got " + isTriangleNumber(3) + ".")
console.log(isTriangleNumber(5), false);
// , "Expected false for input 5.  Got " + isTriangleNumber(5) + ".")
console.log(isTriangleNumber("hello!"), false);
// , "Expected false for input 'hello!'.  Got " + isTriangleNumber("hello!") + ".")
console.log(isTriangleNumber(6.15), false);
// , "Expected false for input 6.15.  Got " + isTriangleNumber(6.15) + ".")
