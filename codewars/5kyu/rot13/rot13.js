/*
rot13

# codewars/5kyu/Rot13
Difficulty: 5kyu
URL: https://www.codewars.com/kata/530e15517bc88ac656000716/

## Approach

### en
1.Check is alphabet if not return element
2.Check is uppercase?(<91) then change bar to 65 from 97
3.If (charcode - 13) lower than bar, then add 26 and return

### kr
1.알파벳인지 확인합니다.
2.대문자(<91)인지 확인하고 맞으면 bar를 97에서 65로 변경합니다.
3.만약 (charcode - 13)이 bar보다 낮으면 26을 더한후 리턴합니다.

## Solution
### JavaScript

*/

function rot13(message) {
  return [...message].map((e) => {
    if (!e.match(/[a-zA-Z]/)) {
      return e;
    }
    
    let bar = 97;
    if (e.charCodeAt() < 91) {
      bar = 65;
    }
    
    if (e.charCodeAt() - 13 < bar) {
      return String.fromCharCode((e.charCodeAt() - 13) + 26);
    }
    return String.fromCharCode((e.charCodeAt() - 13));
  }).join('');
}

// test
console.log("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"));
console.log("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"));
console.log(rot13("Ruby is cool!"));
// , Expected Output: Ehol vf pbby! , Actual Output: Ehol-vf-pbby.
