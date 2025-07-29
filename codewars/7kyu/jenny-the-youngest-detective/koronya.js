// [JS][7kyu] Jenny the youngest detective
// jenny-the-youngest-detective
// https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript

const missingWord = (nums, str) => {
  const cleanedStr = str.replace(/\s+/g, '')
  nums.sort((a, b) => a - b)
  if (nums[nums.length - 1] >= cleanedStr.length) {
    return 'No mission today'
  }
  return nums.map((num) => cleanedStr[num].toLowerCase()).join('')
}

missingWord([0, 3, 5], 'I love you') === 'ivy'
missingWord([7, 10, 1], 'see you later') === 'ear'
missingWord([29, 31, 8], 'The quick brown fox jumps over the lazy dog') === 'bay'
missingWord([12, 4, 6], 'Good Morning') === 'No mission today'
missingWord([1, 16, 21], 'A purple pig and a green donkey flew a kite in the middle of the night') === 'pen'
missingWord([35, 8, 20], 'A song can make or ruin your day if you let it get to you') === 'mug'
missingWord([20, 3, 27], 'I love eating toasted cheese and tuna') === 'vet'
missingWord([50, 4, 6], 'Hi everybody') === 'No mission today'
