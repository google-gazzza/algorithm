function solution(str, ending) {
  return str.endsWith(ending);
}

solution("abcde", "cde") === true;
solution("abcde", "abc") === false;
