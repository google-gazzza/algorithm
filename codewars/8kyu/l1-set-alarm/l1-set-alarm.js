/*
l1-set-alarm

# codewars/8kyu/L1: Set Alarm
Difficulty: 8kyu
URL: https://www.codewars.com/kata/568dcc3c7f12767a62000038/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function setAlarm(employed, vacation) {
  if (employed) {
    return !vacation;
  }
  
  return false;
}

test('setAlarm', () => {
  expect(setAlarm(true, true)).toBeFalsy();
  expect(setAlarm(false, true)).toBeFalsy();
  expect(setAlarm(true, false)).toBeTruthy();
});
