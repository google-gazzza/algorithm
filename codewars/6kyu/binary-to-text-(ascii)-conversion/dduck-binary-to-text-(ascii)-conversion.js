// https://www.codewars.com/kata/5583d268479559400d000064/

const binaryToString = (binary, result = []) => {
  if (binary.length === 0) {
    return result.join('');
  }
  result.push(String.fromCharCode(parseInt(binary.slice(0, 8), 2)));
  return binaryToString(binary.slice(8), result);
};


// Test apha chars
console.log(binaryToString('01100001'), 'a');
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE');

// Test numeric
console.log(binaryToString('00110001001100000011000100110001'), '1011');

// Test special chars
console.log(binaryToString('001111000011101000101001'), '<:)');
