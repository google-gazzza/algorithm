// [JS][7kyu] Clean up after your dog
// clean-up-after-your-dog
// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

const crap = (x, bags, cap) => {
  if (x.some((line) => line.includes('D'))) {
    return 'Dog!!'
  }
  const onlyCrapList = x.map((line) => line.filter((item) => item === '@')).filter((item) => item.length > 0)
  if (onlyCrapList.length <= bags && onlyCrapList.every((item) => item.length <= cap)) {
    return 'Clean'
  }
  return 'Cr@p'
}

// prettier-ignore
crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2) === "Clean"
// prettier-ignore
crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1) === "Cr@p"
// prettier-ignore
crap([['_','_'], ['_','@'], ['D','_']], 2, 2) === "Dog!!"
