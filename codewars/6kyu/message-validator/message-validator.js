/*
message-validator

# codewars/6kyu/Message Validator
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function isAValidMessage(message) {
  if (!message) {
    return true;
  }
  if (!message.match(/^\d/)) {
    return false;
  }
  
  const nums = message.match(/\d+/g);
  const str = message.match(/[a-z]+/ig);
  
  return (str.every((e, i) => e.length === Number(nums.shift())) && nums.length === 0);
}

// console.log(isAValidMessage("3hey5hello2hi"), true);
// console.log(isAValidMessage("4code13hellocodewars"), true);
// console.log(isAValidMessage("3hey5hello2hi5"), false);
// console.log(isAValidMessage("code4hello5"), false);
// console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee"), true);
// console.log(isAValidMessage(""), true);

console.log(isAValidMessage('59mxoJiDUdPJeNPWsozsctTjHNtPuYITtvTvZMDeEEwskkMhRLDxtktWQGlhy'), true);
