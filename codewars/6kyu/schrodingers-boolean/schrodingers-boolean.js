/*
schrodingers-boolean

# codewars/6kyu/Schrödinger's Boolean
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5a5f9f80f5dc3f942b002309
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
const omnibool = {
  valueOf: () => {
    this.value = !this.value;
    return this.value;
  },
};

// test
console.log(omnibool == true);
console.log(omnibool == false);
