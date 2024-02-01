// mexican-wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

const wave = (str) => str.split('')
  .map((v, i, arr) => {
    if (v !== ' ') {
      return [...arr.slice(0, i), v.toUpperCase(), ...arr.slice(i + 1)].join('');
    }
  }).filter((v) => v);

result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"), result, "Should return: '" + result + "'");

result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("codewars"), result, "Should return: '" + result + "'");

result = [];
console.log(wave(""), result, "Should return: '" + result + "'");

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"), result, "Should return: '" + result + "'");

result = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "), result, "Should return: '" + result + "'");
