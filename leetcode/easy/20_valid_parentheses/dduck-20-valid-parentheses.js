/*
20-valid-parentheses

# leetcode/easy/20. Valid Parentheses
difficulty: easy
URL: https://leetcode.com/problems/valid-parentheses/
tags: regular-expression, recursive

<br><br>

## Approach

<br>

### en
this problem is asking parentheses is wrapping right way.
Input: s = "()[]{}"
Output: true
Input: s = "([)]"
Output: false

For this, we will use a regular expression and Recursion.

1.find right parentheses such as () [] {}
 1-1 if there is remove. and call process from begin again
 1-2 if nothing matched with such process, then check the length of the string.
 If length is 0. return true.
Because length 0 means we eliminate all parentheses right way.

If length is over than 0, return false.
<br>

### kr
이 문제는 괄호가 알맞게 구성되어 있는지 확인 하는 문제입니다.
Input: s = "()[]{}"
Output: true
Input: s = "([)]"
Output: false

이 문제를 위해 우리는 정규표현식과 재귀함수를 사용 할 것입니다.

1.알맞은 괄호 이를테면 () [] {} 를 찾습니다.
 1-1 만약 찾았다면, 제거합니다. 그리고 프로세스를 처음부터 다시 시작합니다.
 1-2 만약 매치된 결과가 없다면 나머지 문자열의 길이를 확인하고 길이가 0이면 true를 리턴합니다.
 왜냐하면 길이가 0 이라는 것은 우리가 모든 괄호를 알맞게 제거 했다는 뜻 이기 때문입니다.

길이가 1 이상인 경우 false 를 리턴합니다.

<br><br>

## solution

 */

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  if (s.match(/(\(\))|(\{\})|(\[\])/g)) {
    s = s.replace(/(\(\))|(\{\})|(\[\])/g, '');
    return isValid(s);
  }
  
  return s.length === 0 ? true : false;
};

// test
isValid('()[]{}'); //?
isValid('([)]'); //?
