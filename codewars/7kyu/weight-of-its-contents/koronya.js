// [JS][7kyu] Weight of its Contents
// weight-of-its-contents
// https://www.codewars.com/kata/53921994d8f00b93df000bea/train/javascript

const contentWeight = (bottleWeight, scale) => {
  const scaleArr = scale.split(' ')
  const isLarger = scaleArr[scaleArr.length - 1] === 'larger'
  const ratio = Number(scaleArr[0])
  const multiplyValue = isLarger ? ratio / (1 + ratio) : 1 / (1 + ratio)
  return multiplyValue * bottleWeight
}

// contentWeight(120, '2 times larger')
// contentWeight(120, '3 times larger')
// contentWeight(1000, '4 times smaller')
