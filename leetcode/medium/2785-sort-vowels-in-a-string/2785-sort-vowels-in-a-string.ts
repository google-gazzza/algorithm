// leetcode/medium/2785. Sort Vowels in a String
// 2785-sort-vowels-in-a-string
// URL: https://leetcode.com/problems/number-of-employees-who-met-the-target/description/

function isVowel(c: string): boolean {
  return 'aeiouAEIOU'.includes(c);
}

function sortVowels(s: string): string {
  let arr: string[] = s.split('');
  const vowerList: string[] = [];

  for (let i = 0; i < s.length; i += 1) {
    if (isVowel(arr[i])) {
      vowerList.push(s[i]);
      arr[i] = '|';
    }
  }

  vowerList.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }

    return 0;
  });

  for (let i = 0; i < s.length; i += 1) {
    if (arr[i] === '|') {
      arr[i] = vowerList.shift();
    }
  }

  return arr.join('');
}

let s = 'lEetcOde';
let expect = 'lEOtcede';
console.log(sortVowels(s) === expect);

s = 'lYmpH';
expect = 'lYmpH';
console.log(sortVowels(s) === expect);
