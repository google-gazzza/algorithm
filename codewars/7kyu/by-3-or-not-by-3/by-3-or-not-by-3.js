/*
by-3-or-not-by-3

# codewars/7kyu/By 3, or not by 3? That is the question . . .
Difficulty: 7kyu
URL: https://www.codewars.com/kata/59f7fc109f0e86d705000043/

## Approach

### en
It’s about divisibility rules cheek [this](https://www.mathsisfun.com/divisibility-rules.html) out

### kr
이것은 divisibility rules에 관한 것입니다. [이 문서](https://www.mathsisfun.com/divisibility-rules.html)를 확인해보세요.

## Solution
### JavaScript

*/

const divisibleByThree = (str) => [...str].reduce((acc, cur) => acc + Number(cur), 0) % 3 === 0;
