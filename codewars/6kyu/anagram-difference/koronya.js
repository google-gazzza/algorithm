// [JS][6kyu] Anagram difference
// anagram-difference
// https://www.codewars.com/kata/5b1b27c8f60e99a467000041/train/javascript

const anagramDifference = (w1, w2) => {
  const w1Map = new Map()
  const w2Map = new Map()
  w1.split('')
    .sort()
    .forEach((item) => w1Map.set(item, (w1Map.get(item) || 0) + 1))
  w2.split('')
    .sort()
    .forEach((item) => w2Map.set(item, (w2Map.get(item) || 0) + 1))
  const keySet = new Set([...w1Map.keys(), ...w2Map.keys()])

  return [...keySet].reduce((acc, cur) => {
    const w1Value = w1Map.get(cur) || 0
    const w2Value = w2Map.get(cur) || 0
    const diff = Math.abs(w1Value - w2Value)
    return acc + diff
  }, 0)
}

anagramDifference('codewars', 'hackerrank')
anagramDifference('hackerrank', 'codewars')
anagramDifference(
  'vaozqepplqallnznsbnysjoqwrqatapplfyizqqdbpemrgoqeabnpyjascwewjghbsxycztzrubsjzvyafjtutlgebmv',
  'zbygcdcxntzmotnuaaamizvwxpwbongpykmviffnqapngiyuirhxmkwamxyqerrrxspbzhyvpqhetiyd',
)
