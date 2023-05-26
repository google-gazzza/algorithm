/*
i-spy

# codewars/5kyu/I Spy
Difficulty: 5kyu
URL: https://www.codewars.com/kata/555185132c0d4cca3d000197/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function spyOn(func) {
  let callCountNum = 0;
  const callParams = [];
  const returnedResult = [];
  
  this.main = (...params) => {
    callParams.push(...params);
    callCountNum += 1;
    const result = func(params);
    returnedResult.push(result);
    
    return result;
  };
  
  this.main.callCount = () => callCountNum;
  
  this.main.wasCalledWith = (e) => callParams.includes(e);
  
  this.main.returned = (e) => returnedResult.includes(e);
  
  return this.main;
}


// test
function returns1() {
  return 1;
}

const spy = spyOn(returns1);

console.log(spy.callCount(), 0);
console.log(spy.returned(1), false);
console.log(spy.wasCalledWith('hello'), false);

spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');

console.log(spy.callCount(), 2);
console.log(spy.returned(1), true);
console.log(spy.wasCalledWith('hi'), true);
console.log(spy.wasCalledWith('bye'), true);
