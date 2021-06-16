/*
build-a-square

# codewars/7kyu/Build a square
Difficulty: 7kyu
URL: https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function generateShape(integer) {
  const result = [];
  
  for (let i = 0; i < integer; i += 1) {
    result.push('+'.repeat(integer));
  }
  
  return result.join('\n');
}


// best practice
function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}

test("test", () => {
  expect(generateShape(8)).toEqual('++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');
});
