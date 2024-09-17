/*
reverse-every-other-word-in-the-string

# Reverse every other word in the string
difficulty: 6kyu
URL: https://www.codewars.com/kata/58d76854024c72c3e20000de/

## Approach

### en
1.trim() for remove beside white space
2.split each words for iterate
3.iterate process-2 and while iterate if index % 2 ===1 return reversed result
4.join process-3 as string with one space

### kr
1.trim()을 통해 양옆의 공백을 제거합니다.
2.각 단어를 iterate 하기 위해 어레이로 split합니다
3.precess-2의 결과물을 이터레이트 하면서 index % 2 === 1인경우 뒤집은 단어를 반환합니다.
4.process-3를 단어 사이에 하나의 공백과 함게 하나의 문자열로 묶습니다.

## Solution

 */

const reverse = (str) => str.trim()
  .split(' ')
  .map((e, i) => (i % 2 === 1 ? [...e].reverse().join('') : e))
  .join(' ');


// test code
console.log(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp");
console.log(reverse("I really don't like reversing strings!"), "I yllaer don't ekil reversing !sgnirts");
