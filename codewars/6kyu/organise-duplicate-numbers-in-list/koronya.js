// [JS][6kyu] Organise duplicate numbers in list
// organise-duplicate-numbers-in-list
// https://www.codewars.com/kata/5884b6550785f7c58f000047/train/javascript

const group = (arr) => {
  const numMap = new Map()
  arr.forEach((item) => {
    numMap.set(item, (numMap.get(item) || 0) + 1)
  })
  return [...numMap].map(([key, value]) => Array.from({ length: value }, () => key))
}

group([3, 2, 6, 2, 1, 3])
group([3, 2, 6, 2])
