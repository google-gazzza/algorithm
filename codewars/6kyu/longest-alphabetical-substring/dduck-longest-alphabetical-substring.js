// https://www.codewars.com/kata/longest-alphabetical-substring/javascript

const longest = (input) => {
  let longestAphabeticalString = input[0] || '';
  input.split('').reduce((acc, cur) => {
    if (cur.charCodeAt() >= acc.charCodeAt(acc.length - 1)) {
      const str = acc + cur;
      if (str.length > longestAphabeticalString.length) {
        longestAphabeticalString = str;
      }
      return str;
    }
    return cur;
  });
  return longestAphabeticalString;
};

// longest('asd');
//?
// , 'as');
longest('nab');
//?
// //, 'ab');
longest('abcdeapbcdef');
//?
// // , 'abcde');
longest('asdfaaaabbbbcttavvfffffdf');
//?
// //, 'aaaabbbbctt');
longest('asdfbyfgiklag');
//?
// // , 'fgikl');
// longest('z');
// //?
// //, 'z');
longest('zyba');
//?
//, 'z');
