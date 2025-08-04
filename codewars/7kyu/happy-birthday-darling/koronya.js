// [JS][7kyu] Happy Birthday, Darling!
// happy-birthday-darling
// https://www.codewars.com/kata/5e96332d18ac870032eb735f/train/javascript

const womensAge = (n) => {
  const base = Math.floor(n / 2)
  const age = n % 2 === 0 ? '20' : '21'
  return `${n}? That's just ${age}, in base ${base}!`
}

womensAge(32) === "32? That's just 20, in base 16!"
womensAge(39) === "39? That's just 21, in base 19!"
womensAge(22) === "22? That's just 20, in base 11!"
womensAge(65) === "65? That's just 21, in base 32!"
womensAge(83) === "83? That's just 21, in base 41!"
