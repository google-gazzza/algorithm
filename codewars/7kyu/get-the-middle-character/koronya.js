// [JS][7kyu] Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// get-the-middle-character

const getMiddle = (s) => {
  const sLen = s.length;
  const center = Math.floor(sLen / 2);
  if (sLen % 2 === 1) {
    return s[center];
  }
  return s[center - 1] + s[center];
};

getMiddle("test") === "es";
getMiddle("testing") === "t";
getMiddle("middle") === "dd";
getMiddle("A") === "A";
