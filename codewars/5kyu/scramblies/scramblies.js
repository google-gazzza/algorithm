/*
scramblies

# codewars/5kyu/Scramblies

Difficulty: 5kyu
URL: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/

## Approach

### en
1.define ‘regexp’ variable for memory optimize reason
2.convert ‘str2’ to ‘set’ and iterate through ‘some’
(‘some’ method is iteration until get ‘true‘, except that it’s same with forEach)
2-1 assign RegExp to ‘regexp’ variable for checking
2-2 if str1 doesn’t include same character or lower count thant str2 then return true.

3.when 2-2 process return true, which means ‘we detect something not match’
So return inverse result (!true) = false
When 2-2 process return false, which means ‘didn’t detect any abnormal things’
Then return inverse result (!false) = true

### kr
1.메모리 최적화를 위해 ’regexp’변수를 지정합니다.
2.’str2’를 ‘set’으로 변환한후 ‘some’메소드를 통해 이터레이션 합니다.
(‘some’ 메소드는 ‘true’를 리턴 받을떄까지 이터레이션 하는 메소드입니다, 이것을 제외하면 forEach와 같습니다)
2-1 새로운 정규표현식을 ‘regexp’에 할당합니다.
2-2 만약 str1이 같은 문자를 포함하고 있지 않거나, str2보다 더 적은 문자를 가지고 있다면 true를 리턴합니다.

3. 2-2가  true를 리턴한경우, 즉 ‘뭔가 매치되지 않는 상황인경우' 뒤집힌 결과인 (!true) = false를 리턴합니다.
2-2가 false를 리턴한경우, 즉 ‘이상한것으 감지하지 못한경우' 뒤집힌 결과인 (!false) = true를 리턴합니다.

## Solution
### JavaScript
*/

function scramble(str1, str2) {
  let regexp;
  
  return ![...(new Set(str2).values())].some((e) => {
    regexp = new RegExp(e, 'g');
    
    if (!str1.match(regexp) || (str1.match(regexp).length < str2.match(regexp).length)) {
      return true;
    }
  });
}

// test
console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
