/*
convert-a-boolean-to-a-string

# codewars/8kyu/Convert a Boolean to a String
Difficulty: 8kyu
URL: https://www.codewars.com/kata/551b4501ac0447318f0009cd/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const booleanToString = (boolean) => '' + boolean;

function booleanToString(b){
  return b.toString();
}

function booleanToString(b){
  return b ? 'true' : 'false';
}

function booleanToString(b){
  return String(b);
}

function booleanToString(b){
  return `${b}`
}

test('booleanToString', () => {
  expect(booleanToString(true)).toEqual("true");
  expect(booleanToString(false)).toEqual("false");
});
