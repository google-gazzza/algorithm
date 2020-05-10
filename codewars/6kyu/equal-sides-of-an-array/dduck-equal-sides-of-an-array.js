// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

const findEvenIndex = (arr) => {
  let rightSum = arr.reduce((a, c) => a + c);
  let leftSum = 0;
  let count = arr.length - 1;
  let index = 0;
  
  while (leftSum !== (rightSum - arr[index]) && count) {
    const v = arr[index];
    leftSum += v;
    rightSum -= v;
    count -= 1;
    index += 1;
  }
  
  return leftSum === (rightSum - arr[index]) ? index : -1;
};

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, 'The array was: [1,2,3,4,3,2,1] \n');
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, 'The array was: [1,100,50,-51,1,1] \n');
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, 'The array was: [1,2,3,4,5,6] \n');
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, 'The array was: [20,10,30,10,10,15,35] \n');
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]), 6);
