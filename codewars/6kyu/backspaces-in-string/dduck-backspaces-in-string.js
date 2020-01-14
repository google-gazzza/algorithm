// https://www.codewars.com/kata/backspaces-in-string/

function cleanString(s = '', position = 0) {
  if (position >= s.length) {
    return Array.isArray(s) ? s.join('') : s;
  }
  return s[position] !== '#' ? cleanString(s, position + 1)
    : cleanString(
      [
        ...s.slice(0, Math.max(0, position - 1)),
        ...s.slice(position + 1),
      ],
      Math.max(0, position - 1),
    );
}

console.log(cleanString('abc#d##c'), "ac");
console.log(cleanString('abc####d##c#'), "");
console.log(cleanString(''), "");
