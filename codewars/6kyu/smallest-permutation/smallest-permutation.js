/*
smallest-permutation

# codewars/6kyu/Smallest Permutation
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5fefee21b64cc2000dbfa875/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function minPermutation(n) {
  const str = [...String(Math.abs(n))];
  str.sort((a, b) => a.localeCompare(b));
  
  const swapIndex = str.findIndex((e) => e !== '0');
  
  if (swapIndex !== 0) {
    const targetSwapIndex = str.findIndex((e) => e === '0');
    [str[swapIndex], str[targetSwapIndex]] = [str[targetSwapIndex], str[swapIndex]];
  }
  
  return Math.sign(n) * Number(str.join(''));
}


it("Should return permutation with smallst abs()", function () {
  expect(minPermutation(-20)).toEqual(-20);
  expect(minPermutation(-32)).toEqual(-23);
  expect(minPermutation(0)).toEqual(0);
  expect(minPermutation(10)).toEqual(10);
  expect(minPermutation(29394)).toEqual(23499);
});
