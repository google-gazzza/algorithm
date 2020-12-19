/*
seven-ate-9

# codewars/7kyu/SevenAte9
difficulty: 7kyu
URL: https://www.codewars.com/kata/559f44187fa851efad000087
tags: regular-expression, recursion

## Approach

### en
1.find '797'j
1-1 if exist. then recursive call with parameter
(replace all '797' to '77' trouhg regular expression)
1-2 if not exist return input str

### kr
1.'797'; 을 찾습니다
1-1. 만약 '797'이 존재할경우  정규표현식을 통해 '797'을 '77'로 변환한 파라미터로 재귀호출을 실행합니다.
1-2 만약 존재하지 않을경우 입력된 str을 반환합니다.

## solution
 */

const sevenAte9 = (str) => (str.match(/797/gi) ? sevenAte9(str.replace(/797/gi, '77')) : str);

// test
console.log(sevenAte9('165561786121789797'), '16556178612178977');
console.log(sevenAte9('797'), '77');
console.log(sevenAte9('7979797'), '7777');
