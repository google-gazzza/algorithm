// [JS][7kyu] Parts of a list
// parts-of-a-list
// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

const partlist = (arr) => {
  const arrLen = arr.length
  const resultArr = []
  for (let i = 1; i < arrLen; i += 1 || 0) {
    resultArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
  }
  return resultArr
}

partlist(['I', 'wish', 'I', "hadn't", 'come'])
partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])
partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])
