// leetcode/medium/487. Max Consecutive Ones II
// 487-max-consecutive-ones-ii
// URL: https://leetcode.com/problems/max-consecutive-ones-ii/description/?envType=study-plan-v2&envId=premium-algo-100


function findMaxConsecutiveOnes(nums: number[]): number {
  const mergedArr = [];

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 1) {
      let sum = 0;

      for (let j = i; j < nums.length; j++) {
        if (nums[j] === 1) {
          sum = sum + 1;

          if (j === nums.length - 1) {
            mergedArr.push(sum);
            i = j;
          }
        } else {
          i = j - 1;
          mergedArr.push(sum);
          break;
        }
      }
    } else {
      mergedArr.push(0);
    }
  }

  let maxSlide = 0;

  if (nums.length < 3) {
    if (nums.length === 1) {
      if (nums[0] === 0) {
        return 1;
      }
      return nums[0];
    }

    if (nums[0] === 0 || nums[1] === 0) {
      return nums[0] + nums[1] + 1;
    }

    return nums[0] + nums[1];
  }


  for (let i = 0; i < mergedArr.length - 1; i++) {
    const windowSum = mergedArr[i] + (mergedArr[i + 1] || 0) + (mergedArr[i + 2] || 0) + 1;

    if (windowSum > maxSlide) {
      maxSlide = windowSum;
    }
  }

  return Math.max(mergedArr[0], maxSlide);
};

let arr = [1, 0, 1, 1, 0];

// console.log(findMaxConsecutiveOnes(arr)

// arr = [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1];
// console.log(findMaxConsecutiveOnes(arr);
//
// arr = [1];
// console.log(findMaxConsecutiveOnes(arr);
//
// arr = [1, 1];
// console.log(findMaxConsecutiveOnes(arr);

// arr = [1, 1, 1, 1, 1, 1, 1, 1];
// console.log(findMaxConsecutiveOnes(arr);
