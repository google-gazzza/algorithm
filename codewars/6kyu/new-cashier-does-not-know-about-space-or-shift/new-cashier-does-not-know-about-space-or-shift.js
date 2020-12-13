/*
new-cashier-does-not-know-about-space-or-shift

# New Cashier Does Not Know About Space or Shift
difficulty: 6kyu
URL: https://www.codewars.com/kata/5d23d89906f92a00267bb83d/

<br>

## Approach

<br>

### en

this problem is about extracting pre-defined words with order
1.defined order constant and put values
2.iterate process-1 constant and extract from input that matched ith process-1 constant
3.flat process-2 array through reduce
4.iterate for capitalizing
5.join as a single string

<br>

### kr

이 문제는 사전에 정의된 단어들을 순서에맞춰 추출하는 문제입니다.
1.미리 정의된 값을 order라는 상수에 저장합니다.
2.process-1을 이터레이트 하며 input값하고 비교해 매치되는 값을 추출합니다
3.process-2을 flattening합니다.
4.process-3를  capitalize합니다.
5.process-4를 하나의 문자열로 묶습니다.

## Solution

 */

function getOrder(input) {
  const order = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  return order.map((e) => input.match(RegExp(e, 'gi')))
    .reduce((acc, cur) => (cur ? acc.concat(cur) : acc), [])
    .map((e) => (e ? `${e[0].toUpperCase()}${e.slice(1)}` : e))
    .join(' ');
}

// test code
console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'),
  'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke');
console.log(getOrder('pizzachickenfriesburgercokemilkshakefriessandwich'),
  'Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke');
