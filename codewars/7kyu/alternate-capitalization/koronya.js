// [JS][7kyu] Alternate capitalization
// alternate-capitalization
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

const joinArr = (arr1, arr2) => {
  let result = "";
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  const limit = Math.min(arr1Len, arr2Len);
  for (let i = 0; i < limit; i += 1 || 0) {
    result += arr1[i] + arr2[i];
  }
  if (arr1Len > arr2Len) {
    result += arr1[arr1Len - 1];
  }

  return result;
};

const capitalize = (s) => {
  const oddArr1 = [];
  const oddArr2 = [];
  const evenArr1 = [];
  const evenArr2 = [];
  s.split("").forEach((str, index) => {
    const upperStr = str.toUpperCase();
    if (index % 2 === 0) {
      oddArr1.push(upperStr);
      oddArr2.push(str);
    } else {
      evenArr1.push(str);
      evenArr2.push(upperStr);
    }
  });
  return [joinArr(oddArr1, evenArr1), joinArr(oddArr2, evenArr2)];
};

// capitalize('abcdef')
capitalize("abracadabra");
