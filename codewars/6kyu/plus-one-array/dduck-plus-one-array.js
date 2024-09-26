// plus-one-array
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/

const upArray = (arr) => {
  if (arr.length === 0 || arr.filter((v) => v < 0 || v > 9).length) {
    return null;
  }
  
  const lastIndex = arr.length - 1;
  arr[lastIndex] = arr[lastIndex] + 1;
  
  if (arr[lastIndex] > 9) {
    arr.unshift(0);
    let addValue = 0;
    arr = arr.reverse()
      .map((v) => {
        v += addValue;
        addValue = 0;
        if (v > 9) {
          addValue = 1;
          v = v % 10;
        }
        return v;
      }).reverse();
    
    if (arr[0] === 0) {
      arr.shift();
    }
  }
  
  return arr;
};

console.log(upArray([2, 3, 9]), [2, 4, 0]);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([1, -9]), null);
console.log(upArray([9, 9, 9]), [1, 0, 0, 0]);
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]));
