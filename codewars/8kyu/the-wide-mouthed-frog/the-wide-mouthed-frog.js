/*
the-wide-mouthed-frog

# The Wide-Mouthed frog!
difficulty: 8kyu
URL: https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/
tags: regular-expression, ternary-operator

<br><br>

## Approach

<br>

### en
this problem asking about detect string 'alligator' regardless of case
there are a few ways to this.
ex) make the upper or lower case and compare

In this case, we will compare through regular expression.
and return result trough conditional (ternary) operator

<br>

### kr
이 문제는 입력된 문자열이 대소문자 구분 없이 'alligator' 문자열과 일치하는지 확인하는 문제입니다.
몇가지 방법들이 있습니다.
ex) 대문자, 혹은 소문자로 변환한뒤에 비교하는 방법.

이 경우에는 정규표현식을 통해 비교를 할겁니다.
그리고 삼항연산자를 통해 결과를 반환합니다.

<br><br>

## solution
 */

const mouthSize = (animal) => (animal.match(/alligator/i) ? 'small' : 'wide');

// test
console.log(mouthSize('toucan'), 'wide');
console.log(mouthSize('ant bear'), 'wide');
console.log(mouthSize('alligator'), 'small');
