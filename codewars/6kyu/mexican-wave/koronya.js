// [JS][6kyu] Mexican Wave
// mexican-wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

const wave = (str) => {
  const resultArr = [];
  const strLen = str.length;
  let tempStr = [...str];

  for (let i = 0; i < strLen; i += 1) {
    const char = str[i];
    if (char !== " ") {
      tempStr[i] = char.toUpperCase();
      resultArr.push(tempStr.join(""));
      tempStr = [...str];
    }
  }

  return resultArr;
};

// wave('hello')
// wave('codewars')
// wave('two words')
wave("");
