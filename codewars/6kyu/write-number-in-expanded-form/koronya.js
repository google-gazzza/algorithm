// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// [JS][6kyu] Write Number in Expanded Form
// write-number-in-expanded-form

const expandedForm = (num) => {
  const str = String(num);
  const strLen = str.length;
  let result = `${str[0].padEnd(strLen, "0")}`;
  for (let i = 1; i < strLen; i += 1 || 0) {
    const char = str[i];
    if (char !== "0") {
      result += ` + ${char.padEnd(strLen - i, "0")}`;
    }
  }

  return result;
};

expandedForm(12) === "10 + 2";
expandedForm(42) === "40 + 2";
expandedForm(70304) === "70000 + 300 + 4";
