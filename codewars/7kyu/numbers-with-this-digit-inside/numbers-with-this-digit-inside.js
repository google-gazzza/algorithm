/*
numbers-with-this-digit-inside

# codewars/7kyu/Numbers with this digit inside
difficulty: 7kyu
URL: https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039

<br><br><br><br>

## Approach

<br>

### en
1.make empty array as 'numbers' for store result
2.find number from 1 to 'x' that include 'd'
3.sum all value that we found and store to 'sum' variable
4.return [length of numbers, the sum of numbers, the product of numbers] as tuple

<br>
### kr
1.결과값을 저장하기위한 빈 어레이를 정의합니다.
2.1부터 'x'까지의 숫자중 'd'를 포함하는값을 찾아 'numbers'에 저장합니다
3.찾은 값을 모두 더하고 sum 변수에 결과를 저장합니다.
4.[number의 길이(사이즈), number의 합, product numbers]를 튜플 형태로 반환합니다.

<br><br><br><br>

## solution
 */

function numbersWithDigitInside(x, d) {
  const numbers = [];
  
  for (let i = 1; i <= x; i += 1) {
    if (String(i).indexOf(d) !== -1) {
      numbers.push(i);
    }
  }
  
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  
  return [
    numbers.length,
    sum,
    sum ? numbers.reduce((acc, cur) => acc * cur, 1) : 0,
  ];
}

// test
console.log(numbersWithDigitInside(5, 6), [0, 0, 0]);
console.log(numbersWithDigitInside(7, 6), [1, 6, 6]);
console.log(numbersWithDigitInside(11, 1), [3, 22, 110]);
console.log(numbersWithDigitInside(20, 0), [2, 30, 200]);
console.log(numbersWithDigitInside(44, 4), [9, 286, 5955146588160]);
